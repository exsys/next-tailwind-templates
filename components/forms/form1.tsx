"use client";
import Image from "next/image";
import styles from "./css/form1.module.css";
import { useState } from "react";
import Link from "next/link";

// NOTE: don't forget to also import the logos and icons

export default function Form1() {
    // TODO: add regex
    // TODO: add authentication
    // TODO: add animations
    // TODO: add oauth
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signInWithEmail = (e: any): void => {
        e.preventDefault();
        console.log("clicked");
    }

    return (
        <div className="bg-white w-full max-w-[400px] text-black p-8 rounded-xl drop-shadow-xl">
            <h1 className="text-center text-3xl font-medium mb-10">Sign In</h1>
            <form onSubmit={signInWithEmail}>
                <div className="flex flex-col mb-8">
                    <label htmlFor="email" className="mb-2 font-medium">Email</label>
                    <div className={`relative ${styles["email-input-icon"]} border-b-2 border-slate-400`}>
                        <input type="text" placeholder="johndoe@gmail.com" value={email}
                            className={`outline-none p-2 pl-10 text-lg`}
                            onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="flex flex-col mb-8">
                    <label htmlFor="password" className="mb-2 font-medium">Password</label>
                    <div className={`relative ${styles["password-input-icon"]} border-b-2 border-slate-400`}>
                        <input type="password" className={`outline-none p-2 pl-10 text-lg`}
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <button type="submit" className="border border-slate-500 rounded-full w-full py-2 px-7
                hover:bg-black/10 mb-8">
                    Sign In
                </button>
            </form>
            <div className="mb-6 text-center">
                No account yet? <Link href={"/register"} className="underline cursor-pointer">Sign Up</Link>
            </div>
            <div className="text-center">
                <h2 className="font-medium text-lg mb-3">Or Sign In using</h2>
                <div className="flex justify-center items-center gap-2">
                    <button>
                        <Image src={"/logos/x-logo-round.svg"} width={45} height={45} alt="X" />
                    </button>
                    <button>
                        <Image src={"/logos/google-logo.svg"} width={45} height={45} alt="Google" />
                    </button>
                </div>
            </div>
        </div>
    )
}