"use client";
import { usePathname } from "next/navigation";
import styles from "./navlink.module.css";
import Link from "next/link";

export default function Navlink({ children, href }) {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={pathname.startsWith(href) ? styles.active : ""}
        >
            {children}
        </Link>
    );
}
