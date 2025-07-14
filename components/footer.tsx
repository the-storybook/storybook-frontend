import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faInstagram,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="flex w-full flex-col gap-4 border-t p-4">
      <section className="flex flex-col items-center justify-center text-center">
        <div className="text-lg font-bold">Storybook</div>
        <div>Craft Your Story, Choose Your Path</div>
      </section>
      <section className="grid grid-cols-3 gap-20 px-8">
        <div className="flex flex-col">
          <div className="text-center font-semibold">Explore</div>
          <div role="group" className="flex items-center justify-between">
            <Link href="/">Popular Stories</Link>
            <Link href="/">New Releases</Link>
            <Link href="/">Trending Genres</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center font-semibold">Create</div>
          <div role="group" className="flex items-center justify-around">
            <Link href="/">Start a Story</Link>
            <Link href="/">Node Editor Guide</Link>
            <Link href="/">Tips & Tricks</Link>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="text-center font-semibold">Community</div>
          <div role="group" className="flex items-center justify-around">
            <Link href="/">Follow Users</Link>
            <Link href="/">Comement Guidelines</Link>
            <Link href="/">Leaderboard</Link>
          </div>
        </div>
      </section>
      <section className="grid w-full grid-cols-3">
        <div className="flex justify-around">
          <div>Terms of Serive</div>|<div>Privacy Policy</div>|
          <div>Cookie Settings</div>
        </div>
        <div className="text-center">
          ©2025 Storybook, All rights reserved.
        </div>
        <div className="flex items-center justify-around">
          <Link href="/">
            <FontAwesomeIcon icon={faXTwitter} className="size-4" />
          </Link>
          <Link href="/">
            <FontAwesomeIcon icon={faInstagram} className="size-4" />
          </Link>
          <Link href="/">
            <FontAwesomeIcon icon={faFacebook} className="size-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Footer;
