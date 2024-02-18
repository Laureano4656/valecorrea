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
    <div className={`${fixed && styles.footerFixed} ${styles.footer} `}>
      <div className="flex items-center gap-2">
        <Box size="24px" />
        <Link
          target="_blank"
          className={`${styles.link} font-playfair`}
          href="mailto:valeriacorrea@gmail.com"
        >
          valeriacorrea@gmail.com
        </Link>
        <IgSocial size="24px" />
        <Link
          target="_blank"
          className={`${styles.link} font-playfair`}
          href={"https://www.instagram.com/valecorreamdq/"}
        >
          valecorreadmdq
        </Link>
      </div>
      <div className="border-white border-solid rounded-full border-border1">
        <Image src={logoPomelo} alt={"logo pomelo"} width={50} />
      </div>
    </div>
  );
};

export default Footer;
