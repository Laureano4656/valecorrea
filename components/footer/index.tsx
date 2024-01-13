import Link from "next/link";
import React from "react";
import Box from "../icons/Box";
import IgSocial from "../icons/IgSocial";
interface props {
  fixed?: boolean;
}

const Footer: React.FC<props> = ({ fixed }) => {
  return (
    <div
      className={`${
        fixed && "fixed bottom-0 left-0 w-full"
      } flex items-center justify-center h-28  gap-2 bg-black`}
    >
      <Box size="24px" />
      <Link
        target="_blank"
        className="text-white "
        href="mailto:valeriacorrea@gmail.com"
      >
        valeriacorrea@gmail.com
      </Link>
      <IgSocial size="24px" />
      <Link
        target="_blank"
        className="text-white"
        href={"https://www.instagram.com/valecorreamdq/"}
      >
        valecorreadmdq
      </Link>
    </div>
  );
};

export default Footer;
