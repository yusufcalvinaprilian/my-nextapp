import { useRouter } from "next/router";
import Navbar from "../Navbar";
import { Roboto } from "next/font/google";

type AppShellProps = {
	children: React.ReactNode;
};

const roboto = Roboto({ subsets: ["latin"], weight: "500" });

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

const AppShell = (props: AppShellProps) => {
	const { children } = props;
	const { pathname } = useRouter();
	return (
		<main className={roboto.className}>
			{!disableNavbar.includes(pathname) && <Navbar />}
			{children}
		</main>
	);
};

export default AppShell;
