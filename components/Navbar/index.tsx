import Link from "next/link";
import styles from "./Navbar.module.css";

const NAV_ITEMS = [
	{ href: "/", label: "Index" },
	{ href: "/about", label: "About" },
];

export const Navbar = () => {
	return (
		<header className={styles.navbar}>
			{NAV_ITEMS.map((item, index) => {
				return (
					<Link key={index} href={item.href} legacyBehavior>
						<a className={styles.anchor}>{item.label}</a>
					</Link>
				);
			})}
		</header>
	);
};
