"use client";

import React, { useState } from "react";
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
  XIcon,
  SmartphoneIcon,
  MonitorIcon,
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
import { useIsMobile } from "@/hooks/use-mobile";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
});

const isAutnenticated = true;

const Navbar = () => {
  const isMobile = useIsMobile();
  const [showMobileBanner, setShowMobileBanner] = useState(true);

  // Function to enable desktop mode on mobile
  const enableDesktopMode = () => {
    // Change viewport meta tag to enable desktop mode
    const viewport = document.querySelector('meta[name="viewport"]');
    if (viewport) {
      viewport.setAttribute(
        "content",
        "width=1024, initial-scale=0.5, user-scalable=yes",
      );
    } else {
      const newViewport = document.createElement("meta");
      newViewport.name = "viewport";
      newViewport.content = "width=1024, initial-scale=0.5, user-scalable=yes";
      document.head.appendChild(newViewport);
    }

    // Hide the banner after enabling desktop mode
    setShowMobileBanner(false);
  };

  return (
    <>
      {/* Mobile App Banner */}
      {isMobile && showMobileBanner && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-4 py-4 text-white">
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <SmartphoneIcon className="h-5 w-5 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">
                    📱 Mobile App Coming Soon!
                  </p>
                  <p className="text-xs opacity-90">
                    Get the best experience with our upcoming mobile app
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="sm"
                className="h-8 w-8 p-0 text-white hover:bg-white/20"
                onClick={() => setShowMobileBanner(false)}
              >
                <XIcon className="h-4 w-4" />
                <span className="sr-only">Close banner</span>
              </Button>
            </div>
            <div className="flex justify-center">
              <Button
                variant="outline"
                size="sm"
                className="border-white/20 bg-white/10 text-white hover:bg-white/20"
                onClick={enableDesktopMode}
              >
                <MonitorIcon className="mr-2 h-4 w-4" />
                Use Desktop Mode
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Main Navbar */}
      <div className="flex w-full items-center justify-between border-b p-4">
        <div className={lora.className}>
          <h1 className="text-2xl font-bold">Storybook</h1>
        </div>
        <div className="flex items-center gap-16">
          <Link href="/" className="text-lg font-semibold hover:underline">
            My Stories
          </Link>
          <Link
            href="/explore"
            className="text-lg font-semibold hover:underline"
          >
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
    </>
  );
};

export default Navbar;
