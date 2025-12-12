import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, { AuthOptions } from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/app/libs/prismadb";
import bcrypt from "bcrypt";
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions: AuthOptions = {
  adapter: PrismaAdapter(prisma),
  // Configure one or more authentication providers,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    // ...add more providers here
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: {
          label: "email",
          type: "text",
        },
        password: {
          label: "password",
          type: "text",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("invalid credentials");
        }
        try {
          const userFound = await prisma.user.findUnique({
            where: {
              email: credentials?.email,
            },
          });
          if (!userFound || !userFound.hashedPassword) {
            throw new Error("user not found");
          }
          const realPassword = await bcrypt.compare(
            credentials.password,
            userFound.hashedPassword
          );
          if (!realPassword) {
            throw new Error("incorrect password");
          }
          return userFound;
        } catch (error) {
          throw new Error("user not found please sign up first!");
        }
      },
    }),
  ],
  pages: {
    signIn: "/",
  },
  debug: false,
  session: {
    strategy: "jwt",
  },
  secret: process.env.NEXTAUTH_SECRET,
};

//1:59

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
//
