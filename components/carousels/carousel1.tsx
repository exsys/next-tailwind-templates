"use client";
import { SHOWCASEGAMES } from "@/assets/showcase";
import { Game } from "@/interfaces/game";
import { StarIcon } from "@heroicons/react/20/solid";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useState } from "react";

/**
 * NOTE: check embla-carousel-react for more info. Carousel is also movable with touchscreen (and mouse drag)
 * npm i embla-carousel-react
 * npm i @heroicons/react
 * add following in globals.css (or in module.css):
 *
.embla {
    overflow: hidden;
    position: relative;
}
.embla__container {
    display: flex;
}
.embla__slide {
    flex: 0 0 100%;
    min-width: 0;
    position: relative;
}
 * 
 */

export default function Carousel1() {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
    const [selectedIndex, setSelectedIndex] = useState<number>(0);

    const onCarouselChange = useCallback((emblaApi: any, eventName: string) => {
        setSelectedIndex(emblaApi.selectedScrollSnap());
    }, []);

    useEffect(() => {
        if (emblaApi) emblaApi.on('select', onCarouselChange);
        return () => removeOnChangeListener();
    }, [emblaApi, onCarouselChange]);

    const removeOnChangeListener = useCallback(() => {
        if (emblaApi) emblaApi.off('select', onCarouselChange);
    }, [emblaApi, onCarouselChange]);

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev();
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext();
    }, [emblaApi]);

    return (
        <div className="embla text-white">
            <div ref={emblaRef} className="embla__viewport">
                <div className="embla__container h-[600px] lg:h-[550px]">
                    {SHOWCASEGAMES.map((game: Game, index: number) => (
                        <div key={index} className="embla__slide">
                            <img src={game.src} alt="game" className="h-full w-full object-cover rounded-2xl px-2 drop-shadow-xl" />
                            <div className="absolute top-0 w-full h-full flex flex-col justify-center items-center gap-6">
                                <h1 className="text-5xl font-semibold">
                                    {game.title}
                                </h1>
                                <div className="flex font-medium text-lg">
                                    {game.categories.map((category: string, index: number) => (
                                        <span key={index}>
                                            {category}{index !== game.categories.length - 1 ? " |" : ""}&nbsp;
                                        </span>
                                    ))}
                                </div>
                                <p className="max-w-[50%] text-center text-lg mb-8">
                                    {game.description}
                                </p>
                                <div className="w-[400px] flex justify-between items-center py-4 px-6 bg-main-primary rounded-md">
                                    <div className="flex items-start">
                                        <div className="mr-1">
                                            <StarIcon className="w-6 h-6 text-[#FFC107]" />
                                        </div>
                                        <div className="flex flex-col font-medium">
                                            <span>
                                                {game.stars}/5
                                            </span>
                                            <span className="text-main-text2">
                                                {String(game.reviews).slice(0, 3)}K Reviews
                                            </span>
                                        </div>
                                    </div>
                                    <div className="flex flex-col font-medium">
                                        <span className="self-end">
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 p-2 rounded-full">
                {SHOWCASEGAMES.map((game: Game, index: number) => (
                    <div key={index} className={`rounded-full w-2.5 h-2.5 cursor-pointer
                            ${selectedIndex === index ? "bg-gray-200" : "bg-gray-500"}`}
                        onClick={() => emblaApi?.scrollTo(index)} />
                ))}
            </div>
            <button className="embla__prev rounded-full bg-black/20 p-2 absolute left-10 top-1/2 hover:bg-black/30"
                onClick={scrollPrev}>
                <ChevronLeftIcon className="w-6 h-6" />
            </button>
            <button className="embla__next rounded-full bg-black/20 p-2 absolute right-10 top-1/2 hover:bg-black/30"
                onClick={scrollNext}>
                <ChevronRightIcon className="w-6 h-6" />
            </button>
        </div>
    )
}