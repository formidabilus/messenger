import { authOptions } from "../pages/api/auth/[...nextauth]";
import { getServerSession, Session } from "next-auth";
import "./globals.css";
import Header from "./Header";
import { Providers } from "./providers";

export const metadata = {
  title: "Meta Messenger",
  description: "meta messenger",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);

  return (
    <html lang="en">
      <body>
        <Header session={session as Session} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
