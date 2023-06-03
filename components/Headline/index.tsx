import Image from "next/image";
import styles from "./Headline.module.css";

export const Headline = (props: any) => {
	return (
		<>
			<div className={styles.description}>
				<p>{props.title}</p>
				<div>
					<a
						href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
						target="_blank"
						rel="noopener noreferrer"
					>
						By{" "}
						<Image
							src="/vercel.svg"
							alt="Vercel Logo"
							className={styles.vercelLogo}
							width={100}
							height={24}
							priority
						/>
					</a>
				</div>
			</div>
		</>
	);
}
