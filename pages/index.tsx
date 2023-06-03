import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export default function Home(props: any) {
	const {
		count,
		isShow,
		hundleClick,
		hundleDisplay,
		text,
		array,
		hundleChange,
		hundleAdd,
	} = props;

	return (
		<>
			<Header>
				<title>index page</title>
			</Header>
			<Navbar />
			<main className={styles.main}>
				<Headline title="Index Page" />
				<Main />

				{/* useConter */}
				{isShow ? <h1>{count}</h1> : <h1>カウントは〇〇です。</h1>}
				<button onClick={hundleClick}>ボタン</button>
				<button onClick={hundleDisplay}>
					{isShow ? "カウントは〇〇です。ボタン" : "カウントボタン"}
				</button>

				{/* useInputArray */}
				<input type="text" value={text} onChange={hundleChange} />
				<button onClick={hundleAdd}>追加</button>
				<ul>
					{array.map((item: any, index: number) => {
						return <li key={index}>{item}</li>;
					})}
				</ul>

				<Links />
			</main>
		</>
	);
}
