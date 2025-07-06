import { Link } from "@tanstack/react-router";
import {
	FacebookIcon,
	InstagramIcon,
	TwitterIcon,
	XIcon,
	YoutubeIcon,
} from "lucide-react";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";

function Footer() {
	return (
		<div className="flex flex-col items-center justify-center py-4 border-t gap-4">
			{/* 1st Column - Brand name and slogan */}
			<div className="flex flex-col items-center gap-2">
				<h1 className="text-xl font-bold">Storybook</h1>
				<p className="text-sm">
					<i> Craft Your Story, Choose Your Path</i>
				</p>
			</div>

			{/* 2nd Column - Links to popular groups */}
			<div className="flex justify-between w-full px-8 py-4 gap-40">
				<div className="flex flex-col gap-2 w-full">
					<h2 className="text-center font-semibold text-lg">Explore</h2>
					<div className="flex justify-around items-center w-full">
						<Link to="#" className="hover:underline">
							Popular Stories
						</Link>
						<Link to="#" className="hover:underline">
							New Releases
						</Link>
						<Link to="#" className="hover:underline">
							Trending Genres
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-2 w-full">
					<h2 className="text-center font-semibold text-lg">Create</h2>
					<div className="flex justify-around items-center w-full">
						<Link to="#" className="hover:underline">
							Start a Story
						</Link>
						<Link to="#" className="hover:underline">
							Node Editor Guide
						</Link>
						<Link to="#" className="hover:underline">
							Tips & Tricks
						</Link>
					</div>
				</div>
				<div className="flex flex-col gap-2 w-full">
					<h2 className="text-center font-semibold text-lg">Community</h2>
					<div className="flex justify-around items-center w-full">
						<Link to="#" className="hover:underline">
							Follow Users
						</Link>
						<Link to="#" className="hover:underline">
							Comment Guidelines
						</Link>
						<Link to="#" className="hover:underline">
							Leaderboard
						</Link>
					</div>
				</div>
			</div>

			{/* 3rd Column - Conditions, Copyright, and Socials */}
			<div className="flex justify-between w-full px-8 gap-40">
				<div className="flex justify-between items-center w-full">
					<Link to="#" className="hover:underline">
						Terms of Service
					</Link>
					<Separator orientation="vertical" className="h-6 mx-2" />
					<Link to="#" className="hover:underline">
						Privacy Policy
					</Link>
					<Separator orientation="vertical" className="h-6 mx-2" />
					<Link to="#" className="hover:underline">
						Cookie Settings
					</Link>
				</div>
				<div className="flex flex-col gap-2 w-full justicy-center items-center">
					<p>© 2025 Storybook. All rights reserved.</p>
					<p>Made with ❤️ by the Storybook Team</p>
				</div>
				<div className="flex justify-around w-full gap-2">
					<Button variant="ghost">
						<Link to="/socials/youtube" tabIndex={-1}>
							<YoutubeIcon className="size-6" />
						</Link>
					</Button>
					<Button variant="ghost">
						<Link to="/socials/instagram" tabIndex={-1}>
							<InstagramIcon className="size-6" />
						</Link>
					</Button>
					<Button variant="ghost">
						<Link to="/socials/facebook" tabIndex={-1}>
							<FacebookIcon className="size-6" />
						</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}

export default Footer;
