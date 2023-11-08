/**
 * for the fade in animations install 
 * npm i aos
 * and if you use typescript additionally
 * npm i -D @types/aos
 * create an aosprovider and wrap children in layout.tsx with it
 * 
 */

export default function Hero2() {
    return (
        <div className="h-screen">
            <div className="h-full flex flex-col justify-center items-center">
                <h1 className="text-5xl bold mb-8" data-aos="fade-up" data-aos-duration="700" data-aos-delay="100">
                    Heading
                </h1>
                <h2 className="text-2xl bold mb-8" data-aos="fade-up" data-aos-duration="700" data-aos-delay="250">
                    Sub Heading. Lorem ipsum dolor
                </h2>
            </div>
        </div>
    )
}