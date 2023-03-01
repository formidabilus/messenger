import Image from "next/image";
import React from "react";

type Props = {};

const Header = (props: Props) => {
  return (
    <header>
      <div>
        <div>
          <Image src="" height={10} width={10} alt="Logo" />
        </div>
      </div>
    </header>
  );
};

export default Header;
