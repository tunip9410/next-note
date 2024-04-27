import Link from "next/link";
import styles from "./navbar.module.css";

function Navbar() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><Link href={"/"}>Home</Link></li>
                <li><Link href={"/about"}>About us</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;
