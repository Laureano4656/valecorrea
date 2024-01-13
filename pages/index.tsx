import React, { useState } from "react";
import IconsTouch from "../components/home";
import Welcome from "../components/home/components/Welcome";
const Home = () => {
  const [nextHome, setNextHome] = useState(false);
  setTimeout(() => {
    setNextHome(true);
  }, 5000);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <IconsTouch />
      {!nextHome && <Welcome />}
    </div>
  );
};

export default Home;
