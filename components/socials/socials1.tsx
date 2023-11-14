import Link from "next/link";

export default function Socials1() {
    return (
        <nav className="flex items-center gap-4">
            <Link href={"/"} target="_blank" className="fill-white hover:fill-gray-400">
                <svg width={40} height={40}>
                    <use href="/logos/x-logo.svg#logo" />
                </svg>
            </Link>
            <a href={"/"} target="_blank" className="fill-white hover:fill-gray-400">
                <svg width={33} height={33}>
                    <use href="/logos/discord-logo.svg#logo" />
                </svg>
            </a>
            <a href={"/"} target="_blank" className="fill-white hover:fill-gray-400">
                <svg width={40} height={40}>
                    <use href="/logos/instagram-logo.svg#logo" />
                </svg>
            </a>
            <a href={"/"} target="_blank" className="fill-white hover:fill-gray-400">
                <svg width={40} height={40}>
                    <use href="/logos/telegram-logo.svg#logo" />
                </svg>
            </a>
            <a href={"/"} target="_blank" className="fill-white hover:fill-gray-400">
                <svg width={40} height={40}>
                    <use href="/logos/medium-logo.svg#logo" />
                </svg>
            </a>
            <a href={"/"} target="_blank" className="fill-white hover:fill-gray-400">
                <svg width={33} height={33}>
                    <use href="/logos/github-logo.svg#logo" />
                </svg>
            </a>
            <a href={"/"} target="_blank" className="fill-white hover:fill-gray-400">
                <svg width={38} height={38}>
                    <use href="/logos/facebook-logo.svg#logo" />
                </svg>
            </a>
        </nav >
    )
}