import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Links } from "@/components/Links";
import { Headline } from "@/components/Headline";
import { Main } from "@/components/Main";
import { Header } from "@/components/Header";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

const About = (props: any) => {
	return (
		<>
			<Header>
				<title>about page</title>
			</Header>
			<Navbar />
			<main className={styles.main}>
				<Headline title="About Page" />
				<Main />

				{/* useConter */}
				{props.isShow ? (
					<h1>{props.doubleCount}</h1>
				) : (
					<h1>カウントは〇〇です。</h1>
				)}
				<button onClick={props.hundleClick}>ボタン</button>
				<button onClick={props.hundleDisplay}>
					{props.isShow ? "カウントは〇〇です。ボタン" : "カウントボタン"}
				</button>

				{/* useInputArray */}
				<input type="text" value={props.text} onChange={props.hundleChange} />
				<button onClick={props.hundleAdd}>追加</button>
				<ul>
					{props.array.map((item: any, index: number) => {
						return <li key={index}>{item}</li>;
					})}
				</ul>

				<Links />
			</main>
		</>
	);
};

export default About;
