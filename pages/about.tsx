import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Header>
				<title>about page</title>
			</Header>
			<Navbar />
			<main className={styles.main}>
				<Headline title="About Page" />
				<Main />
				<Links />
			</main>
		</>
	);
}
