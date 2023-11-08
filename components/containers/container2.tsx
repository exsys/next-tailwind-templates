import Image from "next/image";

// NOTE: if you want to swap img and text sides, just replace lg:flex-row with lg:flex-row-reverse

export default function Container2() {
    return (
        <div className="h-full py-8">
            <div className="h-full lg:w-3/4 mx-5 lg:mx-auto flex flex-col items-center justify-center lg:gap-12 lg:flex-row
            text-center lg:text-left">
                <div className="lg:w-[40%]">
                    <h1 className="text-5xl bold mb-16">Heading</h1>
                    <div className="text-xl leading-8">
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere autem perferendis
                        fugit hic quo beatae rerum qui tempora aliquid iste modi unde non tempore odit
                        architecto minima fugiat, sequi adipisci.
                    </div>
                </div>
                <div className="md:w-[50%] lg:w-[40%] h-full flex items-center">
                    <Image src={"/images/char2.png"} width={1967} height={2750} alt="img" priority />
                </div>
            </div>
        </div>
    )
}