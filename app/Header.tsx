import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";

type Props = {
  session: Awaited<ReturnType<typeof getServerSession>>;
};
const Header = ({ session }: Props) => {
  console.log(session);
  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex space-x-2">
          <Image
            className="rounded-full mx-2 object-contain"
            height={10}
            width={50}
            src={session.user?.image!}
            alt="Profile"
          />

          <div>
            <p className="text-blue-400">Logged in as: </p>
            <p className="font-bold text-lg">{session.user?.name}</p>
          </div>
        </div>

        <LogoutButton />
      </header>
    );

  return (
    <header className="sticky top-0 z-50 bg-white flex justify-center items-center p-10 shadow-sm">
      <div className="flex flex-col items-center space-y-5">
        <div className="flex space-x-2 items-center">
          <Image src="/meta.png" height={10} width={50} alt="Logo" />

          <p className="text-blue-400">Welcome to Meta Messenger</p>
        </div>

        <Link
          href="/auth/signin"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </Link>
      </div>
    </header>
  );
};

export default Header;
