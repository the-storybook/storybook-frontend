import React from "react";
import { ModeToggle } from "./mode-toggle";
import { Lora } from "next/font/google";
import Link from "next/link";
import { Button } from "./ui/button";
import {
  BellIcon,
  LogOutIcon,
  SearchIcon,
  SettingsIcon,
  UserIcon,
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const isAutnenticated = true;

const Navbar = () => {
  return (
    <div className="flex w-full items-center justify-between border-b p-4">
      <div className={lora.className}>
        <h1 className="text-2xl font-bold">Storybook</h1>
      </div>
      <div className="flex items-center gap-16">
        <Link href="/" className="text-lg font-semibold hover:underline">
          My Stories
        </Link>
        <Link href="/explore" className="text-lg font-semibold hover:underline">
          Explore Stories
        </Link>
        <Link href="/" className="text-lg font-semibold hover:underline">
          Create Story
        </Link>
      </div>
      {!isAutnenticated ? (
        <div className="flex items-center gap-4">
          <Button variant="ghost">
            <SearchIcon />
          </Button>
          <ModeToggle />
          <Button variant="outline" asChild>
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">Sign Up</Link>
          </Button>
        </div>
      ) : (
        <div className="flex items-center gap-4">
          <Button variant="ghost">
            <SearchIcon />
          </Button>
          <ModeToggle />
          <Button variant="ghost">
            <BellIcon />
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-60">
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Link href="/" className="flex w-full items-center">
                  <UserIcon className="mr-1" />
                  My Profile <DropdownMenuShortcut>⌘⇧P</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/" className="flex w-full items-center">
                  <SettingsIcon className="mr-1" />
                  Settings <DropdownMenuShortcut>⌘⇧S</DropdownMenuShortcut>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <LogOutIcon className="mr-1" />
                <Link href="/">Log Out</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      )}
    </div>
  );
};

export default Navbar;
