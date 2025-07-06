import {
	Outlet,
	Scripts,
	createRootRouteWithContext,
} from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";

import TanStackQueryLayout from "../integrations/tanstack-query/layout.tsx";

import appCss from "../styles.css?url";

import Footer from "@/components/footer.tsx";
import { ThemeProvider } from "@/components/theme-provider.tsx";
import type { QueryClient } from "@tanstack/react-query";
import Navbar from "../components/navbar.tsx";

interface MyRouterContext {
	queryClient: QueryClient;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "TanStack Start Starter",
			},
		],
		links: [
			{
				rel: "stylesheet",
				href: appCss,
			},
		],
	}),

	component: () => (
		<RootDocument>
			<Outlet />
			<TanStackRouterDevtools />

			<TanStackQueryLayout />
		</RootDocument>
	),
});

function RootDocument({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>
				<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
					<div className="flex flex-col min-h-screen">
						<Navbar />
						<div className="flex-1">{children}</div>
						<Footer />
					</div>
				</ThemeProvider>
				<Scripts />
			</body>
		</html>
	);
}
