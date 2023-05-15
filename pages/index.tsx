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
	const [text, setText] = useState("");
	const [isShow, setIsShow] = useState(true);

	const hundleClick = useCallback(() => {
		if (count < 10) {
			setCount((prevCount) => prevCount + 1);
		}
	}, [count]);

	const hundleDisplay = useCallback(() => {
		setIsShow((prevIsShow) => !prevIsShow);
	}, []);

	const hundleChange = useCallback((e: any) => {
		if (e.target.value.length >= 5) {
			alert("5文字以下にしてください。");
			return;
		}
		setText(e.target.value.trim());
	}, []);

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
				{isShow ? <h1>{count}</h1> : <h1>カウントは〇〇です。</h1>}
				<button onClick={hundleClick}>ボタン</button>
				<button onClick={hundleDisplay}>
					{isShow ? "カウントは〇〇です。ボタン" : "カウントボタン"}
				</button>
				<input type="text" value={text} onChange={hundleChange} />
				<Links />
			</main>
		</>
	);
}
