import React, { FunctionComponent, useEffect, useState } from "react";
import logIn from "../../static/icons/SVG/login.svg";
import loginSvg from "../../static/icons/SVG/user.svg";
import candado from "../../static/icons/SVG/candado.svg";
import Image from "next/image";
import GlobalInput from "../home/components/ui/input-global";
import { useRouter } from "next/router";
import useUserLogin from "../utils/useAllCategoriesStore";
import useIsMobile from "../utils/isMobile";

const AcessLogin: FunctionComponent = () => {
  const [userData, setUserData] = useState({ user: "", password: "" });
  const [error, setError] = useState(false);
  const { setUserLogin } = useUserLogin();
  const isMobile = useIsMobile();
  const router = useRouter();
  const setUserDataGlobalState = () => {
    if (!error) {
      window.localStorage.setItem("userData", JSON.stringify(userData));

      router.push("/derecho");
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUserDataGlobalState();
  };
  useEffect(() => {
    if (
      userData.user !== "valeCorrea@gmail.com" ||
      userData.password !== "valeCorrea@gmail.com123"
    ) {
      setError(true);
    } else {
      setUserLogin(true);
      setError(false);
    }
  }, [userData]);

  return (
    <div className="flex flex-col items-center justify-center h-screen ">
      <form
        onSubmit={handleFormSubmit}
        className="relative sm:w-[31.5vw] w-10/12 h-[250px] sm:h-[10vh] sm:min-h-[18.2vw] flex flex-col items-center justify-between px-3 sm:pt-[1.7vw] sm:pb-[1vw] pt-5 pb-5 -mt-14 border-4 rounded-[32px] border-stone-950"
      >
        <h1 className="font-extrabold text-center leading-none font-playfairExtraBold text-text sm:text-[1.8vw]">
          hola Vale!
        </h1>
        <div className="w-full flex flex-col h-full gap-[5%] items-center justify-center">
          <GlobalInput
            placeholder="Nombre de usuario"
            name={"user"}
            notBorderFocus
            onChange={(e) => setUserData({ ...userData, user: e.target.value })}
            className="h-[35%!important]   w-[78%!important] p-[0!important]  flex justify-center"
            inputClassName=" pl-10 text-xs sm:text-[1.2vw]  w-full h-full  border-black placeholder:font-playfairSemiBold   py-[5%] sm:pl-[12%]   rounded-[1.2vw] border-border1"
            leftIcon={
              <Image
                className="absolute -translate-y-1/2 left-2 top-1/2 min-w-[16px] w-6  sm:w-[8%]"
                src={loginSvg}
                alt="Nombre"
              />
            }
          />
          <GlobalInput
            leftIcon={
              <Image
                className="absolute -translate-y-1/2 left-2 top-1/2 min-w-[16px] w-6
                  sm:w-[8%]"
                src={candado}
                alt="Contraseña"
              />
            }
            placeholder="Ingresar contraseña"
            notBorderFocus
            name={"password"}
            type="password"
            onChange={(e) =>
              setUserData({ ...userData, password: e.target.value })
            }
            className="h-[35%!important]   w-[78%!important] p-[0!important]  flex justify-center"
            inputClassName=" pl-10  text-xs sm:text-[1.2vw]  w-full h-full  border-black placeholder:font-playfairSemiBold   py-[5%] sm:pl-[12%]    rounded-[1.2vw] border-border1"
          />
        </div>

        <button
          className={`sm:text-[.8vw] text-xs flex flex-col justify-center items-center font-playfairExtraBold `}
          type="submit"
        >
          <Image className="sm:w-[2vw] w-11" src={logIn} alt="Contraseña" />
          ingresar
        </button>
      </form>
    </div>
  );
};

export default AcessLogin;
