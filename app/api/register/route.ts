import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    console.log("[register] handler start");
    const body = await request.json();
    console.log("[register] body:", body);
    const { email, name, password } = body;

    // Basic validation
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 }
      );
    }

    if (typeof password !== "string") {
      return NextResponse.json(
        { error: "Password must be at least 6 characters" },
        { status: 400 }
      );
    }

    // Check for existing user
    console.log("[register] checking existing user for", email);
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 409 }
      );
    }

    // Hash and create
    console.log("[register] hashing password");
    const hashedPassword = await bcrypt.hash(password, 12);
    console.log("[register] creating user");
    const user = await prisma.user.create({
      data: {
        email,
        name: name || null,
        hashedPassword,
      },
    });
    console.log("[register] user created:", { id: user.id, email: user.email });
    // Return a safe minimal response
    return NextResponse.json(
      {
        message: "User created successfully",
        user: { id: user.id, email: user.email },
      },
      { status: 201 }
    );
  } catch (err) {
    console.error("Registration error:", err);
    return NextResponse.json(
      { error: "Registration failed", details: String(err) },
      { status: 500 }
    );
  }
}
