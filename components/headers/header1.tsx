"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./css/header1.module.css";
import { useState } from "react";

// Normal Header

/** NOTE: if you don't want sidescroll you will have to add overflow-x: hidden; to body and also add
 * viewport: {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
  },
  to the metadata variable in layout.tsx
 */

export default function Header1() {
    const [active, setActive] = useState(false);

    return (
        <header className="pl-[208px] fixed w-full">
            <div className="flex items-center justify-between w-3/4 mx-auto py-6">
                <Link href={"/"}>
                    <Image src={"/logos/logo-placeholder.png"} width={105} height={56} alt="logo" priority />
                </Link>

                {/** mobile navbar */}
                <div className="inline-block sm:hidden">
                    <div className="relative cursor-pointer z-30 p-1.5" onClick={() => setActive(!active)}>
                        <div className={`${styles["menu-icon-line"]} ${active ? styles.line1 : ""}`}></div>
                        <div className={`${styles["menu-icon-line"]} ${active ? styles.line2 : ""}`}></div>
                        <div className={`${styles["menu-icon-line"]} ${active ? styles.line3 : ""}`}></div>
                    </div>

                    <div className={`${active ? styles.active : ""} ${styles.menu} fixed w-screen h-screen inset-0 bg-black`}>
                        <nav className="flex flex-col gap-8 text-lg">
                            <Link href={"/"}>Home</Link>
                            <Link href={"/"}>About</Link>
                            <Link href={"/"}>Contact</Link>
                        </nav>
                    </div>
                </div>

                {/** non-mobile navbar */}
                <div className="hidden sm:flex">
                    <nav className="flex gap-10 text-lg">
                        <Link href={"/"} className="hover:text-slate-400">Home</Link>
                        <Link href={"/"} className="hover:text-slate-400">About</Link>
                        <Link href={"/"} className="hover:text-slate-400">Contact</Link>
                    </nav>
                </div>
            </div>
        </header>
    )
}