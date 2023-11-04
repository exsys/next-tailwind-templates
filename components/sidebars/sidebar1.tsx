"use client";
import { useState } from "react";
import {
    AdjustmentsHorizontalIcon, ChartBarSquareIcon, ChatBubbleBottomCenterTextIcon,
    CubeTransparentIcon,
    DocumentDuplicateIcon, HomeIcon, MagnifyingGlassIcon, ShoppingCartIcon, UserCircleIcon
} from "@heroicons/react/24/outline";
import styles from "./css/sidebar.module.css";

export default function Sidebar1() {
    const [sidebarOpen, setSidebarOpen] = useState(true);

    return (
        <aside className="h-full fixed z-20">
            <div className={`${styles["sidebar"]} fixed top-0 left-0 h-full text-gray-400 bg-gray-900 rounded-r-lg
            ${sidebarOpen ? "w-56" : "w-[72px]"}`}>
                <div className="sidebar-button absolute top-1 -right-[55px] py-6 cursor-pointer z-30"
                    onClick={() => setSidebarOpen(!sidebarOpen)}>
                    <div className={`${styles["menu-icon-line"]}`}></div>
                    <div className={`${styles["menu-icon-line"]}`}></div>
                    <div className={`${styles["menu-icon-line"]}`}></div>
                </div>
                <div className="flex items-center h-20 min-w-[200px]">
                    <i>
                        <CubeTransparentIcon className="w-[72px] h-7 stroke-current inline-block" />
                    </i>
                    <span className={`font-bold text-xl ${styles["sidebar-link"]} ${sidebarOpen ? "" : "opacity-0 pointer-events-none"}`}>
                        App Name
                    </span>
                </div>
                <ul className={`${sidebarOpen ? "overflow-auto" : "overflow-visible"} relative h-full py-4 pb-40`}>
                    <li className="relative transition duration-300 ease-linear rounded-lg hover:bg-gray-700 hover:text-gray-300">
                        <a className="flex items-center h-12" href="#">
                            <i>
                                <HomeIcon className="w-[72px] h-7 stroke-current" />
                            </i>
                            <span className={`text-sm font-medium ${styles["sidebar-link"]}
                            ${sidebarOpen ? "" : "opacity-0 pointer-events-none"}`}>
                                Dashboard
                            </span>
                        </a>
                    </li>
                    <li className="relative transition duration-300 ease-linear rounded-lg hover:bg-gray-700 hover:text-gray-300">
                        <a className="flex items-center h-12 mt-2" href="#">
                            <i>
                                <MagnifyingGlassIcon className="w-[72px] h-7 stroke-current" />
                            </i>
                            <span className={`text-sm font-medium ${styles["sidebar-link"]}
                            ${sidebarOpen ? "" : "opacity-0 pointer-events-none"}`}>
                                Search
                            </span>
                        </a>
                    </li>
                    <li className="relative transition duration-300 ease-linear rounded-lg hover:bg-gray-700 hover:text-gray-300">
                        <a className="flex items-center h-12 mt-2" href="#">
                            <i>
                                <ChartBarSquareIcon className="w-[72px] h-7 stroke-current" />
                            </i>
                            <span className={`text-sm font-medium ${styles["sidebar-link"]}
                            ${sidebarOpen ? "" : "opacity-0 pointer-events-none"}`}>
                                Insights
                            </span>
                        </a>
                    </li>
                    <li className="relative transition duration-300 ease-linear rounded-lg hover:bg-gray-700 hover:text-gray-300">
                        <a className="flex items-center h-12 mt-2" href="#">
                            <i>
                                <DocumentDuplicateIcon className="w-[72px] h-7 stroke-current" />
                            </i>
                            <span className={`text-sm font-medium ${styles["sidebar-link"]}
                            ${sidebarOpen ? "" : "opacity-0 pointer-events-none"}`}>
                                Docs
                            </span>
                        </a>
                    </li>
                    <li className="relative transition duration-300 ease-linear rounded-lg hover:bg-gray-700 hover:text-gray-300">
                        <a className="flex items-center h-12 mt-2" href="#">
                            <i>
                                <ShoppingCartIcon className="w-[72px] h-7 stroke-current" />
                            </i>
                            <span className={`text-sm font-medium ${styles["sidebar-link"]}
                            ${sidebarOpen ? "" : "opacity-0 pointer-events-none"}`}>
                                Products
                            </span>
                        </a>
                    </li>
                    <li className="relative transition duration-300 ease-linear rounded-lg hover:bg-gray-700 hover:text-gray-300">
                        <a className="flex items-center h-12 mt-2" href="#">
                            <i>
                                <AdjustmentsHorizontalIcon className="w-[72px] h-7 stroke-current" />
                            </i>
                            <span className={`text-sm font-medium ${styles["sidebar-link"]}
                            ${sidebarOpen ? "" : "opacity-0 pointer-events-none"}`}>
                                Settings
                            </span>
                        </a>
                    </li>
                    <li className="relative transition duration-300 ease-linear rounded-lg hover:bg-gray-700 hover:text-gray-300">
                        <a className="flex items-center h-12 mt-2" href="#">
                            <i>
                                <ChatBubbleBottomCenterTextIcon className="w-[72px] h-7 stroke-current" />
                            </i>
                            <span className={`text-sm font-medium ${styles["sidebar-link"]}
                            ${sidebarOpen ? "" : "opacity-0 pointer-events-none"}`}>
                                Messages
                            </span>
                            <span className="absolute top-3 left-5 w-2 h-2 bg-indigo-500 rounded-full"></span>
                        </a>
                    </li>
                    <li className="relative">
                        <a className={`fixed bottom-0 flex items-center h-16 w-56 rounded-br-lg
                        hover:bg-gray-700 hover:text-gray-300 transition-all duration-200 ease-linear
                        ${sidebarOpen ? "bg-[#1d1b31]" : "!w-[72px] bg-transparent"}`} href="#">
                            <i>
                                <UserCircleIcon className="w-[72px] h-7 stroke-current" />
                            </i>
                            <span className={`text-sm font-medium ${styles["sidebar-link"]} ${sidebarOpen ? "" : "opacity-0"}`}>
                                Account
                            </span>
                        </a>
                    </li>
                </ul>
            </div>
        </aside>
    )
}