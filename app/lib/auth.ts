import NextAuth from 'next-auth';
import GitHub from 'next-auth/providers/github';

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  providers: [GitHub],
  callbacks: {
    async redirect({ baseUrl }) {
      const authorizationCallbackURL = '/api/auth/callback/github';
      return baseUrl + authorizationCallbackURL;
    },
  },
});
