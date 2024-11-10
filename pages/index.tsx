import React, { useEffect } from "react";
import Welcome from "../components/home/components/Welcome";
import { useRouter } from "next/router";
const Home = () => {
  const router = useRouter();
  console.log("test 2");
  
  useEffect(() => {
    const timeout = setTimeout(() => {
      router.push("/home");
    }, 7000);
    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen ">
      <Welcome />
    </div>
  );
};

export default Home;
