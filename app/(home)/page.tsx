"use client";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Home = () => {
  const isAutnenticated = true;

  useEffect(() => {
    if (!isAutnenticated) {
      redirect("/login");
    }
  }, [isAutnenticated]);

  return (
    <div className="flex items-center justify-center">
      <h1 className="text-7xl">Welcome User!</h1>
    </div>
  );
};

export default Home;
