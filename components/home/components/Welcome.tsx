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
        <div className="relative flex items-center justify-center gap-3 overflow-hidden bg-white h-max w-max pr-[4vw] ">
          <div className=" bg-gradient-to-r from-white via-white to-transparent z-10 w-[10.5vw] h-[10.5vw]  relative flex justify-end items-center">
            <span className="absolute h-[95%] w-[95%] flex items-center justify-center  -translate-x-1/2 left-1/2">
              <Favicon size="100%" />
            </span>
          </div>
          <h2 className="text-[7.5vw] font-playfair favicon-welcome">
            VCORREA
          </h2>
        </div>
      )}

      {timer.timer2 && (
        <div className="flex flex-col items-center text-center welcome-block">
          <h2 className="text-[2.7vw] font-playfairExtraBold mb-[1vw]">
            <strong>hola!</strong>
          </h2>
          <p className="mb-[1.8vw] text-[1.7vw] font-playfair">
            estas ingrensando <br /> a un área de plena lectura <br /> asique,
            ¡ponete comodx!
          </p>
          <BarLoading size="13.4vw" />
        </div>
      )}
    </div>
  );
};

export default Welcome;
