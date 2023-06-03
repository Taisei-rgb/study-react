import { Inter } from "next/font/google";
import styles from "./Links.module.css";
import { useCallback, useState } from "react";

const inter = Inter({ subsets: ["latin"] });
const ITEMS = [
	{
		href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
		title: "Docs",
		description:
			"Find in-depth information about Next.js features and&nbsp;API.",
	},

	{
		href: "https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
		title: "Learn",
		description:
			"Learn about Next.js in an interactive course with&nbsp;quizzes!",
	},

	{
		href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
		title: "Templates",
		description:
			"Find in-depth information about Next.js features and&nbsp;API.",
	},

	{
		href: "https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app",
		title: "Deploy",
		description:
			"Find in-depth information about Next.js features and&nbsp;API.",
	},
];

export const Links = () => {
	const [items, setItems] = useState(ITEMS);
	const hundleReduce = useCallback(() => {
		setItems((prevItems) => {
			return prevItems.slice(0, prevItems.length - 1);
		});
	}, []);
	return (
		<div className={styles.grid}>
			<div>アイテムの数は{items.length}個です。</div>
			<button onClick={hundleReduce}>減らす</button>
			{items.map((item, index) => {
				return (
					<a
						href={item.href}
						className={styles.card}
						target="_blank"
						rel="noopener noreferrer"
						key={index}
					>
						<h2 className={inter.className}>
							{item.title} <span>-&gt;</span>
						</h2>
						<p className={inter.className}>{item.description}</p>
					</a>
				);
			})}
		</div>
	);
}
