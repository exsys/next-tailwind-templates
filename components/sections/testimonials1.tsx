export default function Testimonials1() {
    return (
        <div className={`h-fit w-full mt-20 text-white`}>
            <div className={`h-full relative py-20`}>
                <div className="h-full flex flex-col items-center justify-center text-center max-w-[98%] mx-auto md:pb-20">
                    <div data-aos="fade-up" data-aos-duration="800">
                        <h1 className="text-4xl font-semibold mb-6">Trusted by creators Worldwide</h1>
                        <h2 className="text-[#a9a9ad] text-lg mb-20">Lorem ipsum dolor sit amet consect adipisicing possimus</h2>
                    </div>
                    <div className="flex flex-col md:flex-row gap-1 lg:w-full 2xl:w-3/4 mb-20">
                        <div className="flex-1 bg-[#f5f4f4] px-8 sm:px-2 lg:px-10 py-10 md:py-8 rounded-t-2xl
                        md:rounded-l-2xl md:!rounded-tr-none"
                            data-aos="zoom-out-up" data-aos-duration="500" data-aos-delay="300">
                            <div className="text-3xl font-semibold tracking-wider text-black">8000+</div>
                            <div className="text-[#636366] text-xl">Companies on the platform</div>
                        </div>
                        <div className="flex-1 bg-[#f5f4f4] px-8 sm:px-2 lg:px-10 py-10 md:py-8"
                            data-aos="zoom-out-up" data-aos-duration="500" data-aos-delay="400">
                            <div className="text-3xl font-semibold tracking-wider text-black">1%</div>
                            <div className="text-[#636366] text-xl">Flat platform fee</div>
                        </div>
                        <div className="flex-1 bg-[#f5f4f4] px-8 sm:px-2 lg:px-10 py-10 md:py-8"
                            data-aos="zoom-out-up" data-aos-duration="500" data-aos-delay="500">
                            <div className="text-3xl font-semibold tracking-wider text-black">99.9%</div>
                            <div className="text-[#636366] text-xl">Profit guarantee</div>
                        </div>
                        <div className="flex-1 bg-[#f5f4f4] px-8 sm:px-2 lg:px-10 py-10 md:py-8 rounded-b-2xl
                        md:rounded-r-2xl md:rounded-bl-none"
                            data-aos="zoom-out-up" data-aos-duration="500" data-aos-delay="600">
                            <div className="text-3xl font-semibold tracking-wider text-black">$70M+</div>
                            <div className="text-[#636366] text-xl">Total revenue generated</div>
                        </div>
                    </div>
                    <button className="py-3 px-10 rounded-lg">
                        Learn more
                    </button>
                </div>
            </div>
        </div>
    )
}