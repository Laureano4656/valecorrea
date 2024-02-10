import Link from "next/link";
import React from "react";
import Box from "../icons/Box";
import IgSocial from "../icons/IgSocial";
import styles from "./footer.module.css";
interface props {
  fixed?: boolean;
}

const Footer: React.FC<props> = ({ fixed }) => {
  return (
    <div className={`${fixed && styles.footerFixed} ${styles.footer} `}>
      <Box size="24px" />
      <Link
        target="_blank"
        className={`${styles.link}`}
        href="mailto:valeriacorrea@gmail.com"
      >
        valeriacorrea@gmail.com
      </Link>
      <IgSocial size="24px" />
      <Link
        target="_blank"
        className={`${styles.link}`}
        href={"https://www.instagram.com/valecorreamdq/"}
      >
        valecorreadmdq
      </Link>
    </div>
  );
};

export default Footer;
