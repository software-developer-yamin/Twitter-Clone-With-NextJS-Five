import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId:
        "517248368306-hmuorkj5l7narlg7v6phjhustvd7obos.apps.googleusercontent.com",
      clientSecret: "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",
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      session.user.tag = session.user.name
        .split(" ")
        .join("")
        .toLocaleLowerCase();

      session.user.uid = token.sub;
      return session;
    },
  },
  secret: "yamin_01880279_client@77",
});
