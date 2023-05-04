import Link from "next/link"
import styles from "./Navbar.module.css";

export function Navbar(){
  return(
    <header className={styles.navbar}>
      <Link href="/" legacyBehavior>
        <a className={styles.anchor}>Index</a>
      </Link>
      <Link href="/about" id="link" legacyBehavior>
        <a className={styles.anchor}>About</a>
      </Link>
    </header>
  )
}
2
