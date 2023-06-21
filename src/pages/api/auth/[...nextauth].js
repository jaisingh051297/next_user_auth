
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { User } from "next-auth";

const authOptions={
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      
      name: "Credentials",
      
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "jsmith",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
      async authorize(credentials, req) {
        const { username, password } = credentials;
        const loginData={
          identifier:username,
          password:password,
        }
        const res = await fetch("https://dev-be-startups.ialabs.co.in/api/auth/local", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(loginData),
        });

        const user = await res.json();

        console.log({ user });

        if (res.ok && user) {
          return user;
        } else return null;
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token, user }) {
      
      session.user = token;
      return session;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};


export default NextAuth(authOptions);