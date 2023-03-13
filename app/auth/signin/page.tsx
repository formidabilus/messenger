import { getProviders } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";

export const metadata = {
  title: "Sign in to Messenger",
  description: "Sign in",
};

const SignInPage = async () => {
  const providers = await getProviders();

  console.log("page providers: ", providers);
  return (
    <div className="grid justify-center">
      <div>
        <Image
          className="rounded-full mx2 object-cover"
          width={700}
          height={700}
          src="/meta.png"
          alt="Profile"
        />
      </div>
      {providers ? (
        <SignInComponent providers={providers} />
      ) : (
        <p>No providers found</p>
      )}
    </div>
  );
};

export default SignInPage;
