import "./globals.css";
import Header from "./Header";

export const metadata = {
  title: "Meta Messenger",
  description: "meta messenger",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Header />
      <body>{children}</body>
    </html>
  );
}
