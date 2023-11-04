import styles from "./css/char-card.module.css";

// img width nach belieben ändern

export default function CharCardSm() {
    return (
        <div className={`bg-char-bg rounded-xl relative w-[270px] h-[360px] drop-shadow-main-xl ${styles["background-position"]}`}>
            <div className="bg-red-500 w-48 h-48 rounded-full absolute left-1/2 top-1/2 
            -translate-y-1/2 -translate-x-1/2">
            </div>
            <img src={"/images/char1.png"} alt="sm" className="absolute w-[90%] left-1/2 top-1/2 
            -translate-y-1/2 -translate-x-1/2" />
        </div>
    )
}