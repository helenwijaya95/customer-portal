import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import CredentialsProvider from "next-auth/providers/credentials";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    })
  ],
  callbacks: {
    async redirect({ url, baseUrl }) {
      return '/'
    },
    async session({ session, user, token }) {
      return session
    },
  },
  session: {
    strategy: 'jwt',
  },
};
export default NextAuth(authOptions);