import React, { useEffect, useState } from "react";
import Favicon from "../../icons/Favicon";
import BarLoading from "../../icons/BarLoading";

const Welcome = () => {
  const [timer, setTimer] = useState({ timer1: true, timer2: false });

  useEffect(() => {
    const handleTimeout = setTimeout(() => {
      setTimer((prevTimer) => ({ ...prevTimer, timer1: false, timer2: true }));
    }, 2500);

    return () => clearTimeout(handleTimeout);
  }, [timer.timer1]);

  return (
    <div className="fixed flex items-center justify-center w-full h-screen bg-white">
      {timer.timer1 && (
        <div className="relative flex items-center justify-center gap-3 overflow-hidden bg-white h-max w-max welcome-none ">
          <div className=" bg-white z-10 w-[185px] h-[200px] relative flex justify-end items-center">
            <span className="absolute h-[95%] w-[95%] flex items-center justify-center  -translate-x-1/2 favicon-none left-1/2">
              <Favicon size="100%" />
            </span>
            <span className="absolute h-[95%] w-[95%] flex items-center justify-center  -translate-x-1/2 favicon-block left-1/2">
              <Favicon size="100%" background="#c16f38" />
            </span>
          </div>
          <h2 className="text-9xl font-playfair favicon-welcome">VCORREA</h2>
        </div>
      )}
      {timer.timer2 && (
        <div className="flex flex-col items-center text-center welcome-block">
          <h2 className="text-4xl font-playfairExtraBold">
            <strong>hola!</strong>{" "}
          </h2>
          <br />
          <p className="mb-10 text-2xl font-playfair">
            estas ingrensando <br /> a un área de plena lectura <br /> asique,
            ¡ponete comodx!
          </p>
          <BarLoading size="70%" />
        </div>
      )}
    </div>
  );
};

export default Welcome;
