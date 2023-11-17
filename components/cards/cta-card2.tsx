import Link from "next/link";

export default function CTACard2() {
    return (
        <div className="h-fit py-20 text-white">
            <div className="w-[90%] mx-auto">
                <div className="h-[360px] lg:h-[500px] bg-join-bg bg-cover bg-center rounded-xl drop-shadow-xl">
                    <div className="h-full flex flex-col items-start justify-center gap-10 w-[55%] md:w-1/2 ml-auto">
                        <h1 className="text-2xl lg:text-4xl 2xl:text-5xl font-semibold !leading-normal">
                            Ready to Play?<br />
                            Join Protoplay Today!
                        </h1>
                        <Link href={"/contact"} className="bg-main-primary text-main-text1 rounded-md py-2.5 px-6 font-medium
                            hover:bg-main-secondary">
                            Join Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}