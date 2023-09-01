"use client";
import { IPriceCardInfo } from "@/assets/priceCardInfos";
import Image from "next/image";

interface Props {
    priceCard: IPriceCardInfo
}

// NOTE: add IPriceCardInfo, svg and following to tailwind.config.ts:
/*"main-lg": [
    "0 0 10px rgba(0, 0, 0, 0.07)",
    "0 0 5px rgba(0, 0, 0, 0.12)"
],*/

export default function PriceCard1({ priceCard }: Props) {
    const buttonClick = () => {
        console.log("clicked");
    }

    return (
        <div className="flex flex-col p-10 bg-white rounded-xl drop-shadow-main-lg max-w-[400px] mx-auto text-black">
            <div>
                <h1 className="text-2xl font-medium mb-3">{priceCard.title}</h1>
                <h2>{priceCard.description}</h2>
            </div>
            <div className="mt-5">
                <span className="text-4xl font-bold">
                    {priceCard.currency}{priceCard.price}
                </span>
                {priceCard.interval ? "/" : ""}{priceCard.interval}
            </div>
            <div className="mt-5">
                <ul>
                    {priceCard.bulletList.map((entry: string, index: number) => (
                        <li key={index} className="mb-2 flex items-center gap-2">
                            <Image src={"/icons/check.svg"} width={15} height={15} alt="" />
                            {entry}
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mt-10">
                <button className="bg-indigo-600 text-white rounded-md py-2 px-10 w-full hover:bg-indigo-500"
                onClick={() => buttonClick()}>
                    Buy Plan
                </button>
            </div>
        </div>
    )
}