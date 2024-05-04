import Link from "next/link";
import logo from "@/assets/logo.png";
import styles from "./header.module.css";
import Image from "next/image";
import HeaderBackground from "./HeaderBackground";

export default function Header() {
    return (
        <>
            <HeaderBackground />
            <header className={styles.header}>
                <Link className={styles.logo} href="/">
                    <Image src={logo} alt="NextLevel Food" priority />
                    NextLevel Food
                </Link>
                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <Link href="/meals">Meals</Link>
                        </li>
                        <li>
                            <Link href="/meals/share">Share Meal</Link>
                        </li>
                        <li>
                            <Link href="/community">Community</Link>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
