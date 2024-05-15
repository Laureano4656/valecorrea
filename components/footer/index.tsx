import Link from "next/link";
import React, { useEffect } from "react";
import Box from "../icons/Box";
import IgSocial from "../icons/IgSocial";
import logoPomelo from "../../static/icons/Logo Pomelo.png";
import styles from "./footer.module.css";
import Image from "next/image";
import useActiveContact from "../utils/useActiveFooter";
interface props {
  fixed?: boolean;
}

const Footer: React.FC<props> = ({ fixed }) => {
  const { activeContact, setActiveContact } = useActiveContact();
  useEffect(() => {
    const handleWheel = (event) => {
      // Aquí puedes hacer lo que necesites cuando ocurra el evento de rueda del ratón
      setActiveContact(false);
    };
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return (
    <>
    {activeContact &&
      <div className={`${styles.footer}`}></div>

    }
      <div
        className={`${
          activeContact
            ? `  fixed bottom-0 left-0 w-full  transition-all duration-1000`
            : `${activeContact ? "0 " : "-bottom-52 "}`
        } ${fixed && styles.footerFixed} ${styles.footer} transition-all duration-1000 `}
      >
        <div className="flex items-center gap-2">
          <Box size="1.5vw" />
          <Link
            target="_blank"
            className={`${styles.link} md:text-[1.2vw] text-[12px] font-playfair`}
            href="valecorreamdq@gmail.com"
          >
            valecorreamdq@gmail.com
          </Link>
          <IgSocial size="1.5vw" />
          <Link
            target="_blank"
            className={`${styles.link} md:text-[1.2vw] text-[12px] font-playfair`}
            href={"https://www.instagram.com/valecorreamdq/"}
          >
            valecorreadmdq
          </Link>
        </div>
        <Link
          target="_blank"
          className={`${styles.link}  text-[12px] font-playfair`}
          href={"http://www.productorapomelo.com.ar/"}
        >
          Creator Pomelo I&M
        </Link>
        {/* <div className="border-white border-solid rounded-full border-border1 absolute left-[5%] -translate-y-1/2 top-1/2">
        <Image src={logoPomelo} alt={"logo pomelo"} width={50} />
      </div> */}
      </div>
    </>
  );
};

export default Footer;
