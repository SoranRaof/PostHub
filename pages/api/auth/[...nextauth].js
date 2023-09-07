import NextAuth from "next-auth/next";
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import client from "../../../prisma/client";

const adapter = client;

export const authOptions = {
  adapter: PrismaAdapter(adapter),
  secret: process.env.AUTH_SECRET,
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
  ],
  session: {
    setTimeout: 6000,
    strategy: undefined,
  },
};

export default NextAuth(authOptions);
