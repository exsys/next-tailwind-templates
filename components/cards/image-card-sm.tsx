import { BanknotesIcon, HeartIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

export default function ImageCardSm() {
    return (
        <div className="bg-[#19224D] rounded-3xl p-3 flex flex-col relative w-[180px] drop-shadow-lg">
            <div className="w-full h-40 relative mb-2 rounded-3xl overflow-hidden">
                <Image src={"/images/card1.png"} alt="sm" fill />
            </div>
            <div className="py-4 px-3 text-gray-200 text-sm">
                <h1 className="mb-4">Title #001</h1>
                <div className="flex justify-between items-center">
                    <div>
                        <BanknotesIcon className="w-5 h-5 inline-block mr-2" />
                        <span>0.312</span>
                    </div>
                    <div>
                        <HeartIcon className="w-5 h-5 inline-block mr-1" />
                        <span>55</span>
                    </div>
                </div>
            </div>
        </div>
    )
}