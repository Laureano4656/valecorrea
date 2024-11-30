// import "../styles/index.css";
import "../styles/config.css";
import { useEffect } from "react";
import { useRouter } from "next/router";
import { useSubcategory } from "../store/useSubcategory";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const { setSelectedSubcategory } = useSubcategory();

  // useEffect(() => {
  //   if (!router?.asPath?.includes("derecho")) {
  //     setSelectedSubcategory(null);
  //   }
  // }, [router]);

  return <Component {...pageProps} />;
}

export default MyApp;
