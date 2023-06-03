import Image from "next/image";
import styles from "./Main.module.css";

export const Main = () => {
	return (
		<div className={styles.center}>
			<Image
				className={styles.logo}
				src="/next.svg"
				alt="Next.js Logo"
				width={180}
				height={37}
				priority
			/>
		</div>
	);
}
