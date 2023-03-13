import { getServerSession } from "next-auth";
import "./globals.css";
import Header from "./Header";

export const metadata = {
  title: "Meta Messenger",
  description: "meta messenger",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession();

  return (
    <html lang="en">
      <head />
      <body>
        <Header session={session} />
        {children}
      </body>
    </html>
  );
}
