import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Lora } from "next/font/google";
const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});
const AuthNavbar = () => {
  return (
    <div
      className={`${lora.className} flex w-full items-center justify-between border-b p-4`}
    >
      <h1 className="text-2xl font-bold">Storybook</h1>
      <ModeToggle />
    </div>
  );
};

export default AuthNavbar;
