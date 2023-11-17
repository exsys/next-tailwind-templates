import { Game } from "./game"

export type GamePoint = {
    title: string,
    description: string,
    imgSrc: string,
}

type AboutItem = {
    name: string,
    description: string,
}

export type About = {
    description: string,
    items: AboutItem[],
}

type Card = {
    imgSrc: string,
    title: string,
}

export interface GamePage {
    url: string,
    hero: string,
    bgImg: string,
    carouselImgs: string[],
    showcaseImg: string,
    overview: string,
    about: About,
    points: GamePoint[],
    card: Card,
    gameInfo: Game,
}