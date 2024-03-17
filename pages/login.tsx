import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const login = () => {
  const [userData, setUserData] = useState({ user: "", password: "" });
  const [error, setError] = useState(false);
  const router = useRouter();
  const setUserDataGlobalState = () => {
    window.localStorage.setItem("userData", JSON.stringify(userData));
    router.push("/derecho");
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    setUserDataGlobalState();
  };
  useEffect(() => {
    if (
      (userData.password !== "test123" &&
        userData.user !== "admintest" &&
        userData.password.length !== 0) ||
      userData.user.length !== 0
    ) {
      setError(true);
    } else {
      setError(false);
    }
  }, [userData]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <form
        onSubmit={handleFormSubmit}
        className="relative flex flex-col justify-between px-3 py-6 -mt-14 w-96 border-border1 rounded-xl border-stone-950"
      >
        <span className="absolute left-0 -top-8">Iniciar sesion</span>
        <input
          className="px-4 py-2"
          name={"user"}
          onChange={(e) => setUserData({ ...userData, user: e.target.value })}
          placeholder="Nombre de usuario"
        />
        <input
          className="px-4 py-2"
          name={"password"}
          placeholder="Contraseña"
          onChange={(e) =>
            setUserData({ ...userData, password: e.target.value })
          }
        />
        <button
          className={`${error ? "text-red-600" : "black"}`}
          disabled={error}
          type="submit"
        >
          Ingresar
        </button>
        {error && <span>usuario o contraseña incorrecto</span>}
      </form>
    </div>
  );
};

export default login;
