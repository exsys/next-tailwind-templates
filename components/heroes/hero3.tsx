import CoverDarkB from "../effects/cover-dark-b"

export default function Hero3() {
    return (
        <div className="h-full md:h-full bg-hero-bg bg-cover bg-bottom text-white relative">
            <CoverDarkB />
            <div className="h-full w-5/6 mx-auto pt-40 xl:pt-0 relative">
                <div className="h-full flex flex-col xl:flex-row xl:items-center">
                    <div className="flex flex-col gap-8 lg:w-4/6 xl:w-2/5">
                        <h1 className="text-5xl lg:text-6xl xl:text-7xl font-semibold 2xl:w-[90%]">
                            Get Ready to Play, Explore, Conquer
                        </h1>
                        <h2 className="text-lg">
                            Embark on your gaming journey of discovery and excitement right here,
                            where the world of immersive gameplay meets reality.
                        </h2>
                        <div className="flex gap-5">
                            <button className="main-btn-1">Explore</button>
                            <button className="main-btn-2">Learn more</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}