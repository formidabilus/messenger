import { authOptions } from "../pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
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

  console.log("session layout: ", session);
  return (
    <html lang="en">
      <head />
      <body>
        <Header session={session!} />
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
