import Link from "next/link";
import Logo from "../svgs/logo";
import { GlobeAltIcon } from "@heroicons/react/24/outline";
import TwitterX from "../svgs/twitter-x";
import Telegram from "../svgs/telegram";
import Discord from "../svgs/discord";

/**
 * NOTE:
 * npm i @heroicons/react
 * and copy svgs
 */

export default function Footer3() {
    const currentYear = new Date().getFullYear();
    const FOOTERITEMS = [
        {
            title: "Quick Links",
            items: [
                { name: "Features", href: "" },
                { name: "E-Sport", href: "" },
                { name: "Licensing", href: "" }
            ]
        },
        {
            title: "Company",
            items: [
                { name: "Products", href: "" },
                { name: "Apps & Games", href: "" },
                { name: "Features", href: "" }
            ]
        },
        {
            title: "Help",
            items: [
                { name: "About", href: "" },
                { name: "Contact", href: "" },
                { name: "Support Us", href: "" }
            ]
        },
        {
            title: "Resources",
            items: [
                { name: "Youtube Playlist", href: "" },
                { name: "Privacy Policy", href: "" },
                { name: "Terms & Conditions", href: "" }
            ]
        },
    ];

    return (
        <footer>
            <div className="w-[90%] mx-auto border-t border-main-primary py-12">
                <div className="flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
                    <div className="flex flex-col gap-8 items-center lg:items-start">
                        <Link href={"/"} className="flex items-center gap-4">
                            <div className="w-8 h-8">
                                <Logo className="fill-main-primary" />
                            </div>
                            <div className="text-2xl font-semibold">
                                Protoplay
                            </div>
                        </Link>
                        <div className="flex flex-col gap-3 items-center lg:items-start">
                            <div className="flex items-center gap-1">
                                <Link href={"/"}>
                                    <GlobeAltIcon className="w-8 h-8 text-main-text2" />
                                </Link>
                                <Link href={"https://twitter.com/exsysjj"}>
                                    <div className="w-10 h-10 -mb-3">
                                        <TwitterX className="fill-main-text2" />
                                    </div>
                                </Link>
                                <Link href={"https://t.me/exsysjj"}>
                                    <div className="w-7 h-7 mr-2">
                                        <Telegram className="fill-main-text2" />
                                    </div>
                                </Link>
                                <div title="@exsys" className="w-8 h-8">
                                    <Discord className="fill-main-text2" />
                                </div>
                            </div>
                            <div>
                                © {currentYear} Protoplay. All rights reserved.
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 xl:gap-24 text-center lg:text-left">
                        {FOOTERITEMS.map((column: any, i: number) => (
                            <div key={i}>
                                <h2 className="text-lg font-semibold uppercase mb-4">
                                    {column.title}
                                </h2>
                                <ul className="text-main-text2 font-medium">
                                    {column.items.map((item: any, j: number) => (
                                        <li key={j} className="py-1 hover:underline">
                                            <Link href={item.href}>
                                                {item.name}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    )
}