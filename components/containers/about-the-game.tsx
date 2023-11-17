import { GamePage } from "@/interfaces/game-page";
import ReviewCard from "../cards/review-card";
import PageCoverDark from "../effects/page-cover-dark";

type Props = {
    gamePage: GamePage,
}

export default function AboutTheGame({ gamePage }: Props) {
    return (
        <div className="h-fit bg-[url('/images/neon-rush-5.webp')] bg-cover bg-center relative py-32 text-white">
            <PageCoverDark />
            <div className="relative flex flex-col xl:flex-row w-[92%] xl:w-5/6 mx-auto gap-24">
                <div className="flex-1">
                    <h1 className="text-4xl lg:text-5xl font-bold mb-10">
                        About the Game
                    </h1>
                    <div className="text-gray-400 font-medium text-lg">
                        <p className="mb-4">
                            {gamePage.about.description}
                        </p>
                        <ul className="pl-4 list-disc">
                            {gamePage.about.items.map((item: any, index: number) => (
                                <li key={index}>
                                    <strong>
                                        {item.name}:&nbsp;
                                    </strong>
                                    <p className="inline">
                                        {item.description}
                                    </p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="mx-auto xl:w-[400px] flex flex-col lg:flex-row xl:flex-col gap-8">
                    <img src={gamePage.showcaseImg} alt="cover" className="rounded-lg drop-shadow-xl lg:w-[350px] xl:w-[400px]" />
                    <div className="flex flex-col gap-5">
                        <h2 className="text-4xl lg:text-5xl font-bold">
                            {gamePage.gameInfo.title}
                        </h2>
                        <p>
                            {gamePage.gameInfo.description}
                        </p>
                        <div>
                            <div className="border border-main-text1 rounded-md py-3 px-6 w-fit">
                                <div className="flex font-medium text-lg">
                                    {gamePage.gameInfo.categories.map((category: string, index: number) => (
                                        <span key={index}>
                                            {category}{index !== gamePage.gameInfo.categories.length - 1 ? " |" : ""}&nbsp;
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <ReviewCard game={gamePage.gameInfo} />
                    </div>
                </div>
            </div>
        </div>
    )
}