import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { useCallback } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const foo = 3;

	const hundleClick = useCallback((e: any) => {
		console.log(e.target);
		e.preventDefault();
		alert(foo);
	}, []);

	return (
		<>
			<Header>
				<title>index page</title>
			</Header>
			<Navbar />
			<main className={styles.main}>
				<Headline title="Index Page" />
				<Main />
				<a href="/about" onClick={hundleClick}>
					ボタン
				</a>
				<Links />
			</main>
		</>
	);
}
