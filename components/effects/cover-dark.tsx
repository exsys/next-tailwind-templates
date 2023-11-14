/**
 * NOTE: set relative on parent so its correctly positioned.
 * And set relative on siblings so z index is correct.
 */

export default function CoverDark() {
    return (
        <div className="z-0 absolute top-0 left-0 h-full w-full bg-gradient-to-b
        from-[#191825] via-[#19182566] to-[#191825]" />
    )
}