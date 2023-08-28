import Link from "next/link";

// Normal Footer

export default function Footer1() {
    const currentYear: number = new Date().getFullYear();

    return (
        <footer>
            <div className="flex flex-col gap-6 lg:flex-row justify-between w-3/5 mx-auto py-6">
                <div>© Company {currentYear} All rights reserved</div>
                <div>
                    <nav className="flex gap-8">
                        <Link href={"/"} className="hover:text-slate-400">Home</Link>
                        <Link href={"/"} className="hover:text-slate-400">About</Link>
                        <Link href={"/"} className="hover:text-slate-400">Contact</Link>
                    </nav>
                </div>
            </div>
        </footer>
    )
}