export interface IPriceCardInfo {
    title: string,
    description: string,
    price: number,
    currency: string,
    interval?: string,
    bulletList: string[]
}

export const priceCards: IPriceCardInfo[] = [
    {
        title: "Startup",
        description: "A plan that scales with your rapidly growing business.",
        price: 20,
        currency: "$",
        interval: "M",
        bulletList: [
            "25 products",
            "Up to 10,000 subscribers",
            "Advanced Analytics",
            "24-hour support response time",
            "Marketing automations"
        ],
    }
]