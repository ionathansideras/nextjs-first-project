import Link from "next/link";
import logo from "@/assets/logo.png";
import styles from "./header.module.css";
import Image from "next/image";
import HeaderBackground from "./HeaderBackground";
import Navlink from "./Navlink";

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
                            <Navlink href="/meals">Browse Meals</Navlink>
                        </li>
                        <li>
                            <Navlink href="/community">
                                Foodies Community
                            </Navlink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    );
}
