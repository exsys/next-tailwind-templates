type Props = {
    from: string,
    to: string,
    border?: string,
    classNameOuter?: string,
    classNameInner?: string,
    children?: React.ReactNode,
}

/**
 * NOTE: from & to have to be the from-[hex] and to-[hex] tailwindcss classes
 * classNameOuter styles the card itself and Inner will style the block inside
 * 
 */

// TODO: mach aus dem inneren gradient ein eigenen component, apply ihn, und remove classNameInner
// änder classNameOuter zu className und kombinier styles von hier mit className durch prop

export default function CardGradientDark({ from, to, border, classNameOuter, classNameInner, children }: Props) {
    return (
        <div className={`bg-gradient-to-b ${from} ${to} ${border && `border ${border}`}
        rounded-md cursor-pointer ${classNameOuter}`}>
            <div className={`relative rounded-md h-full bg-gradient-to-b from-[#00000099] to-[#000000cc]
            ${classNameInner}`}>
                {children}
            </div>
        </div>
    )
}