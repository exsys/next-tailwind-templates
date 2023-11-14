/**
 * NOTE: Set relative on parent so its correctly positioned.
 * And set relative on siblings so z index is correct.
 * Will cover whole area
 */

export default function CoverCustom({ bgClr }: { bgClr: string }) {
    return <div className={`absolute top-0 left-0 h-full w-full z-0 rounded-xl ${bgClr}`} />
}