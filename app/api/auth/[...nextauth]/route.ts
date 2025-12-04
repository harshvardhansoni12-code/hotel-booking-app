import { PrismaAdapter } from "@next-auth/prisma-adapter";
import NextAuth, {
  AuthOptions,
  Awaitable,
  RequestInternal,
  User,
} from "next-auth";
import GithubProvider from "next-auth/providers/github";
import GoogleProvider from "next-auth/providers/google";
import prisma from "@/app/libs/prismadb";
import Credentials from "next-auth/providers/credentials";
import { CgPassword } from "react-icons/cg";
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
    Credentials({
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
      authorize: function (
        credentials: Record<"email", string> | undefined,
        req: Pick<RequestInternal, "body" | "query" | "headers" | "method">
      ): Awaitable<User | null> {
        throw new Error("Function not implemented.");
      },
    }),
  ],
};

export default NextAuth(authOptions);
//1:59
