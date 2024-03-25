import React, { useEffect } from "react";
import IconsTouch from "../components/home";
import Welcome from "../components/home/components/Welcome";
import { useRouter } from "next/router";
const Home = () => {
  const rotuer = useRouter();
  setTimeout(() => {
    rotuer.push("/home");
  }, 5000);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Welcome />
    </div>
  );
};

export default Home;
