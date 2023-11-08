// NOTE: to change color of lines stroke has to be given as a prop
// NOTE²: if you want the original colors uncomment fill and stroke properties

export default function ReactJs(props: any) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-11.5 -10.23174 23 20.46348" {...props}>
            <title>React Logo</title>
            <circle cx="0" cy="0" r="2.05" /*fill="#61dafb"*/ />
            <g /*stroke="#61dafb"*/ stroke-width="1" fill="none">
                <ellipse rx="11" ry="4.2" />
                <ellipse rx="11" ry="4.2" transform="rotate(60)" />
                <ellipse rx="11" ry="4.2" transform="rotate(120)" />
            </g>
        </svg>

    )
}