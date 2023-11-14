type Props = {
    from: string,
    to: string,
    border?: string,
    classNameOuter?: string,
    classNameInner?: string,
    children: React.ReactNode,
}

export default function CardGradientLight({ from, to, border, classNameOuter, classNameInner, children }: Props) {
    return (
        <div className={`bg-gradient-to-b from-[#ffffff12] to-[#ffffff40] ${border && `border ${border}`}
        rounded-md cursor-pointer ${classNameOuter}`}>
            <div className={`relative rounded-md h-full bg-gradient-to-b ${from} ${to} ${classNameInner}`}>
                {children}
            </div>
        </div>
    )
}