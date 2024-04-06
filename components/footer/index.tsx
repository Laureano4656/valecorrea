import Link from "next/link";
import React from "react";
import Box from "../icons/Box";
import IgSocial from "../icons/IgSocial";
import logoPomelo from "../../static/icons/Logo Pomelo.png";
import styles from "./footer.module.css";
import Image from "next/image";
interface props {
  fixed?: boolean;
}

const Footer: React.FC<props> = ({ fixed }) => {
  return (
    <div className={`relative ${fixed && styles.footerFixed} ${styles.footer} `}>
      <div className="flex items-center gap-2">
        <Box size="1.5vw" />
        <Link
          target="_blank"
          className={`${styles.link} font-playfair`}
          href="mailto:valeriacorrea@gmail.com"
        >
          valeriacorrea@gmail.com
        </Link>
        <IgSocial size="1.5vw" />
        <Link
          target="_blank"
          className={`${styles.link} font-playfair`}
          href={"https://www.instagram.com/valecorreamdq/"}
        >
          valecorreadmdq
        </Link>
      </div>
      <div className="border-white border-solid rounded-full border-border1 absolute left-[5%] -translate-y-1/2 top-1/2">
        <Image src={logoPomelo} alt={"logo pomelo"} width={50} />
      </div>
    </div>
  );
};

export default Footer;
