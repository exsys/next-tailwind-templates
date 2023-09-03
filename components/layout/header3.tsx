"use client";
import Image from "next/image";
import Link from "next/link";

// Header with accounts functionality

/** NOTE: if you don't want sidescroll you will have to add overflow-x: hidden; to body and also add
 * viewport: {
    width: "device-width",
    initialScale: 1,
    minimumScale: 1,
  },
  to the metadata variable in layout.tsx
 */

export default function Header3() {
    return (
        <header className="w-full absolute">
            <div className="flex items-center justify-between w-3/4 mx-auto py-6">
                <Link href={"/"}>
                    <Image src={"/logos/logo-placeholder.png"} width={105} height={56} alt="logo" priority />
                </Link>

                <div className="flex gap-10">
                    <nav className="hidden lg:flex items-center gap-10 text-lg">
                        <Link href={"/"} className="hover:text-slate-400">Home</Link>
                        <Link href={"/"} className="hover:text-slate-400">About</Link>
                        <Link href={"/"} className="hover:text-slate-400">Contact</Link>
                    </nav>
                    <div className="flex gap-4">
                        <Link href={"/"} className="border border-slate-500 rounded-md py-2 px-7
                        hover:bg-white/20">
                            Sign In
                        </Link>
                        <Link href={"/"} className="border border-slate-500 rounded-md py-2 px-7 hidden sm:block
                        hover:bg-white/20">
                            Sign Up
                        </Link>
                    </div>
                </div>
            </div>
        </header>
    )
}