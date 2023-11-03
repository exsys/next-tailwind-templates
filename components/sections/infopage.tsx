import { AdjustmentsHorizontalIcon, ChartPieIcon, ClipboardDocumentCheckIcon } from "@heroicons/react/24/outline";

// npm i @heroicons/react

export default function InfoPage() {
    return (
        <div className="h-fit lg:h-full flex items-center justify-center">
            <div className="flex flex-col items-center h-fit">
                <div className="mb-20">
                    <h1 className="max-w-[500px] text-center text-4xl font-semibold leading-relaxed">
                        Taking Your Finances to the Next Level
                    </h1>
                </div>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-10 xl:gap-20 flex-1">
                    <div className="flex flex-col items-center text-center w-[300px]">
                        <ChartPieIcon className="w-12 h-12 mb-5 text-main-clr-1" />
                        <h2 className="text-2xl font-medium mb-2">Organized</h2>
                        <div className="text-lg">
                            All important information in one place. Never waste your time again.
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center w-[300px]">
                        <ClipboardDocumentCheckIcon className="w-12 h-12 mb-5 text-main-clr-1" />
                        <h2 className="text-2xl font-medium mb-2">Planning</h2>
                        <div className="text-lg">
                            Planning ahead can be easy. You won't have to worry about the future anymore.
                        </div>
                    </div>
                    <div className="flex flex-col items-center text-center w-[300px]">
                        <AdjustmentsHorizontalIcon className="w-12 h-12 mb-5 text-main-clr-1" />
                        <h2 className="text-2xl font-medium mb-2">Optimization</h2>
                        <div className="text-lg">
                            Optimize Your Finances. No more wasted Money.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}