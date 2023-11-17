import { Game } from "@/interfaces/game";
import { StarIcon } from "@heroicons/react/20/solid";

type Props = {
    game: Game,
}

export default function ReviewCard({ game }: Props) {
    return (
        <div className="w-[90%] md:w-[400px] flex justify-between items-center py-4 px-6 bg-main-primary rounded-md drop-shadow-xl">
            <div className="flex items-start">
                <div className="mr-1">
                    <StarIcon className="w-6 h-6 text-[#FFC107]" />
                </div>
                <div className="flex flex-col font-medium">
                    <span className="font-semibold">
                        {game.stars}/5
                    </span>
                    <span className="text-main-text2">
                        {String(game.reviews).slice(0, 3)}K Reviews
                    </span>
                </div>
            </div>
            <div className="flex flex-col font-medium">
                <span className="self-end font-semibold">
                    {String(game.downloads).length <= 7 ? (
                        <>
                            {String(game.downloads).charAt(0)}.{String(game.downloads).charAt(1)}M
                        </>
                    ) : (
                        <>
                            {String(game.downloads).slice(0, 2)}.{String(game.downloads).charAt(2)}M
                        </>
                    )}
                </span>
                <span className="text-main-text2">
                    Downloads
                </span>
            </div>
        </div>
    )
}