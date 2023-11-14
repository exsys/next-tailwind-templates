/**
 * NOTE:
 * make sure other sibling elements have position set. like relative for example.
 * Or else z index probably won't work
 */

export default function CoverDark() {
    return (
        <div className="z-0 absolute top-0 left-0 h-full w-full bg-gradient-to-b
        from-[#191825] via-[#19182566] to-[#191825]" />
    )
}