/**
 * NOTE: parent element needs to have group and relative in className.
 * And siblings need to have position (eg relative) set, else z index wont work.
 * <div className="relative">
 *     <CardGlow />
 *     // other content
 * </div>
 */

export default function CardGlow() {
    return (
        <div className="blur-xl rounded-3xl bg-card-glow h-[105%] w-full absolute top-0 left-0
        z-0 opacity-0 group-hover:opacity-80 transition duration-300" />
    )
}