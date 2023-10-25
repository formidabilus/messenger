import { Session } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoutButton from "./LogoutButton";

type Props = {
  session: Session;
};

const Header = ({ session }: Props) => {
  if (session)
    return (
      <header className="sticky top-0 z-50 bg-white flex justify-between items-center p-10 shadow-sm">
        <div className="flex flex-col">
          <div className="flex space-x-2">
            <Image
              className="rounded-full mx-2"
              height={10}
              width={50}
              src={session?.user?.image as string}
              alt="Profile"
            />

            <div>
              <p className="text-blue-400">Logged in as: </p>
              <p className="font-bold text-lg">{session?.user?.name}</p>
            </div>
          </div>
          <a
            className="mt-1 left-0 font-bold text-blue-400"
            target={"_blank"}
            href="https://www.freeprivacypolicy.com/live/26163e5e-e396-4757-99c5-2444a938b7ed"
          >
            Privacy Policy
          </a>
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
        <a
          className="font-bold text-blue-400"
          target={"_blank"}
          href="https://www.freeprivacypolicy.com/live/26163e5e-e396-4757-99c5-2444a938b7ed"
        >
          Privacy Policy
        </a>
        {/* <Link
          href="/auth/signin"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Sign In
        </Link> */}
      </div>
    </header>
  );
};

export default Header;
