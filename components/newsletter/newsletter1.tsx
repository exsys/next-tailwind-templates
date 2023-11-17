"use client";
import { toastSuccess } from "@/lib/toastify";

export default function Newsletter1() {
    const subscribeNewsletter = async () => {
        toastSuccess("Subscribed!");
    }

    return (
        <div className="h-fit py-20 text-white">
            <div className="w-[90%] mx-auto flex flex-col lg:flex-row justify-between gap-10 lg:gap-0">
                <div className="flex flex-col gap-10 lg:w-1/2 xl:w-2/6">
                    <h1 className="text-4xl md:text-5xl font-semibold">Stay in the Loop</h1>
                    <p className="text-main-text2 text-lg">
                        Subscribe to our newsletter for exclusive updates, game releases, and more!
                        Enter your email address to receive the latest gaming news and special offers.
                    </p>
                </div>
                <div className="flex flex-col xl:flex-row gap-4 justify-end xl:items-end lg:w-2/5 w-full">
                    <form action={() => subscribeNewsletter()}
                    className="flex-1 flex flex-col xl:flex-row gap-4 justify-end xl:items-end lg:w-full xl:w-2/5">
                        <input type="email" placeholder="Email" className="rounded-md py-3 px-5 text-[#222222]
                        outline-none w-full" required />
                        <button className="main-btn-1 py-3 w-full xl:w-[200px]" type="submit">
                            Subscribe
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}