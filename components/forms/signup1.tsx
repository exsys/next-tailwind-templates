"use client";
import Image from "next/image";
import styles from "./css/form1.module.css";
import { useState } from "react";

// NOTE: don't forget to also import the logos and icons

export default function SignUp1() {
    // TODO: add regex
    // TODO: add animations
    // TODO: add errors
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [showRepeatPassword, setShowRepeatPassword] = useState(false);

    const signUpWithEmail = async (e: any): Promise<void> => {
        e.preventDefault();
        const user = {
            email: email,
            password: password,
        }

        const res = await fetch("/api/register", {
            method: "POST",
            body: JSON.stringify(user),
            headers: {
                "Content-Type": "application/json",
            },
        });

        console.log(res);
    }

    return (
        <div className="bg-white w-full max-w-[400px] text-black p-8 rounded-xl drop-shadow-xl">
            <h1 className="text-center text-3xl font-medium mb-10">Sign Up</h1>
            <form onSubmit={signUpWithEmail}>
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
                    <div className={`relative ${styles["password-input-icon"]} border-b-2 border-slate-400 flex items-center`}>
                        <input id="password" type={showPassword ? "text" : "password"} className={`outline-none p-2 pl-10 text-lg`}
                            value={password} onChange={(e) => setPassword(e.target.value)} />
                        <div className="grow cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                            <Image src={`/icons/eye-${showPassword ? "closed" : "open"}.svg`} width={28} height={25} alt="eye" className="mx-auto" />
                        </div>
                    </div>
                </div>
                <div className="flex flex-col mb-8">
                    <label htmlFor="repeat-password" className="mb-2 font-medium">Repeat Password</label>
                    <div className={`relative ${styles["password-input-icon"]} border-b-2 border-slate-400 flex items-center`}>
                        <input id="repeat-password" type={showRepeatPassword ? "text" : "password"} className={`outline-none p-2 pl-10 text-lg`}
                            value={repeatPassword} onChange={(e) => setRepeatPassword(e.target.value)} />
                        <div className="grow cursor-pointer" onClick={() => setShowRepeatPassword(!showRepeatPassword)}>
                            <Image src={`/icons/eye-${showRepeatPassword ? "closed" : "open"}.svg`} width={28} height={25} alt="eye" className="mx-auto" />
                        </div>
                    </div>
                </div>
                <button type="submit" className="border border-slate-500 rounded-full w-full py-2 px-7
                hover:bg-black/10 mb-8">
                    Create Account
                </button>
            </form>
            <div className="text-center">
                <h2 className="font-medium text-lg mb-3">Or Sign Up using</h2>
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