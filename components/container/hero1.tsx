"use client";

export default function Hero1() {
    const buttonClick = (): void => {
        console.log("clicked");
    }

    return (
        <div className="h-screen add-bg-img">
            <div className="h-full flex flex-col justify-center items-center">
                <h1 className="text-5xl bold mb-8">Heading</h1>
                <h2 className="text-2xl bold mb-8">Sub Heading. Lorem ipsum dolor</h2>
                <div>
                    <button className="border border-slate-500 rounded-md py-2 w-40 hover:bg-white/20
                    hover:border-slate-600"
                    onClick={() => buttonClick()}>
                        Explore
                    </button>
                </div>
            </div>
        </div>
    )
}