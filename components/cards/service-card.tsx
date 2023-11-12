type Props = {
    title: string,
    description: string,
    icon: any,
    animationDelay?: string,
}

/**
 * NOTE:
 * icon is a react component which returns a svg component or heroicons component
 * needed packages:
 * npm i aos
 * npm i -D @types/aos
 * and set aos up
 */

export default function ServiceCard({ title, description, icon, animationDelay = "200" }: Props) {
    return (
        <div className="bg-main-bg3 rounded-md border border-main-border2 py-10 px-2 flex flex-col 
        items-center justify-center gap-4 w-full group" data-aos="zoom-out-up" data-aos-duration="500" data-aos-delay={animationDelay}>
            <div className="w-24 h-24 mx-auto bg-main-bg2 rounded-full border border-main-border3 p-3 mb-2
                transition duration-[400ms] group-hover:border-main-primary text-main-border3 group-hover:text-main-primary">
                {icon}
            </div>
            <h1 className="transition duration-[400ms] text-xl font-medium group-hover:text-main-primary">{title}</h1>
            <div className="text-main-text2 w-[92%] text-center">
                {description}
            </div>
        </div>
    )
}