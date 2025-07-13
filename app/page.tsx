"use client";

import { ModeToggle } from "@/components/mode-toggle";
import { redirect } from "next/navigation";
import React, { useEffect } from "react";

const Home = () => {
  const isAutnenticated = false;

  useEffect(() => {
    if (!isAutnenticated) {
      redirect("/login");
    }
  }, [isAutnenticated]);

  return (
    <div className="flex justify-center items-center min-h-screen">
      <h1 className="text-7xl">Welcome User!</h1> <ModeToggle />
    </div>
  );
};

export default Home;
