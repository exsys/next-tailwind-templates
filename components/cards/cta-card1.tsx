import Link from "next/link";

type Props = {
    src: string,
    title: string,
    subtitle?: string,
    href?: string,
    align?: string,
}

export default function CTACard1({ src, title, subtitle, href, align = "left" }: Props) {
    return (
        <div className="h-fit py-24 text-white">
            <div className="w-[90%] mx-auto">
                <div className="py-16 px-12 lg:py-32 rounded-xl drop-shadow-xl relative overflow-hidden">
                    <img src={src} alt="game" className="absolute top-0 left-0 h-full w-full z-0 object-cover" />
                    <div className={`h-full flex flex-col justify-center w-full z-10 relative
                    ${align === "left" && "items-start"} ${align === "center" && "items-center"} ${align === "right" && "items-end"}`}>
                        <h1 className="text-2xl lg:text-4xl 2xl:text-5xl font-semibold !leading-snug lg:max-w-[60%]">
                            {title}
                        </h1>
                        <h2 className="text-2xl lg:text-4xl 2xl:text-5xl font-semibold !leading-snug lg:max-w-[60%] mb-8">
                            {subtitle}
                        </h2>
                        {href && (
                            <Link href={href} className="bg-main-primary text-main-text1 rounded-md py-2.5 px-6 font-medium
                            hover:bg-main-secondary">
                                Play Now
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}