import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";
import { useCallback, useEffect, useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
	const [count, setCount] = useState(1);

	const hundleClick = useCallback(() => {
		if (count < 10) {
			setCount((count) => count + 1);
		}
	}, [count]);

	useEffect(() => {
		// マウント時の処理
		document.body.style.backgroundColor = "lightblue";

		// アンマウント時の処理
		return () => {
			document.body.style.backgroundColor = "";
		};
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
				<h1>{count}</h1>
				<button onClick={hundleClick}>ボタン</button>
				<Links />
			</main>
		</>
	);
}
