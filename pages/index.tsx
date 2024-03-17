import React, { useEffect } from "react";
import IconsTouch from "../components/home";
import Welcome from "../components/home/components/Welcome";
import { disabledAnimationHome } from "../globals/homeAnimations";
const Home = () => {
  const { animationsHome, setAnimationsHome } = disabledAnimationHome();
  setTimeout(() => {
    setAnimationsHome(true);
  }, 5000);

  // useEffect(() => {
  //   setAnimationsHome(false);
  // }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <IconsTouch />
      {!animationsHome && <Welcome />}
    </div>
  );
};

export default Home;
