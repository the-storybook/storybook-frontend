import { Link } from "@tanstack/react-router";
import { SearchIcon } from "lucide-react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

export default function Navbar() {
	return (
		<header className="py-4 px-8 flex gap-2 justify-between border-b">
			<nav className="flex flex-row justify-between items-center w-full">
				<div className="flex gap-4 items-centera justify-center">
					<Link to="/" className="text-2xl font-bold">
						Storybook
					</Link>
					<ModeToggle />
				</div>
				<div className="flex flex-1 gap-8 justify-center items-center">
					<Link
						to="/me/stories"
						className="font-semibold text-lg hover:underline"
					>
						My Stories
					</Link>
					<Link to="/stories" className="font-semibold text-lg hover:underline">
						Explore Stories
					</Link>
					<Link
						to="/me/create"
						className="font-semibold text-lg hover:underline"
					>
						Create Story
					</Link>
				</div>
				<div className="flex gap-2 justify-center items-center">
					<Button variant="ghost">
						<SearchIcon />
					</Button>
					<Button variant="outline">
						<Link to="/auth/login" tabIndex={-1}>
							Login
						</Link>
					</Button>
					<Button>
						<Link to="/auth/signuo" tabIndex={-1}>
							Sign Up
						</Link>
					</Button>
				</div>
			</nav>
		</header>
	);
}
