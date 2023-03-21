import { getProviders } from "next-auth/react";
import Image from "next/image";
import SignInComponent from "./SignInComponent";

export const metadata = {
  title: "Sign in to Messenger",
  description: "Sign in",
};

const SignInPage = async () => {
  const providers = await getProviders();

  return (
    <div className="grid justify-center">
      <div>
        <Image
          className="my-12 mx-2 object-cover"
          width={200}
          height={200}
          src="/facebook-messenger-logo.png"
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
