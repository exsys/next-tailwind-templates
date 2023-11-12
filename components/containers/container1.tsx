import Image from "next/image";
import styles from "./css/container1.module.css";

export default function Container1() {
    return (
        <div className="h-screen">
            <div className="h-full flex items-center justify-center mx-5">
                <div className="absolute w-[30%] h-full left-0 justify-start items-center hidden lg:flex">
                    <Image src={"/images/char1.png"} width={1284} height={1666} alt="img" priority />
                </div>
                <div className={`lg:max-w-[40%] text-center z-10 ${styles["text-shadow-black"]}`}>
                    <h1 className="text-5xl bold mb-16">Heading</h1>
                    <div className="text-xl leading-8">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, fugiat eligendi 
                        nisi amet facere dolore ipsam laudantium numquam unde hic, aspernatur aliquam 
                        harum quia? Doloribus, ex! Debitis architecto soluta inventore.
                    </div>
                </div>
                <div className="absolute w-[30%] h-full right-0 justify-start items-center hidden lg:flex">
                    <Image src={"/images/char2.png"} width={1967} height={2750} alt="img" priority />
                </div>
                <div className="absolute w-[150%] sm:w-[110%] lg:hidden">
                    <Image src={"/images/char3.png"} width={2134} height={1418} alt="img" priority />
                </div>
            </div>
        </div>
    )
}