import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	return (
		<>
			<Header>
				<title>index page</title>
			</Header>
			<main className={styles.main}>
				<Headline title="Index Page" />
				<Main />
				<Links />
			</main>
		</>
	);
}
