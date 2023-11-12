type Project = {
    title: string,
    description: string,
    stack: string[],
    link: string, // href
    img: string, // path to img
}

type Props = {
    project: Project,
    animationDelay: string,
}

export default function ProjectCard({ project, animationDelay }: Props) {
    return (
        <article className="bg-main-bg3 drop-shadow-xl rounded-md overflow-hidden flex flex-col"
        data-aos="zoom-out-up" data-aos-duration="600" data-aos-delay={animationDelay}>
            <a href={project.link} target="_blank" className="bg-cover cursor-pointer relative">
                <div className="absolute h-full w-full hover:backdrop-blur-sm group">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                    hidden group-hover:flex items-center gap-3">
                        <span className="text-lg medium text-shadow-sm">
                            Visit
                        </span>
                        <img src="/svgs/enter-right.svg" alt="enter" width={25} height={25} className="inline-block drop-shadow-black-sm" />
                    </div>
                </div>
                <img src={project.img} alt="img" className="object-cover h-[320px]" />
            </a>
            <div className="relative p-6 flex flex-col justify-between grow">
                <div>
                    <h1 className="font-medium text-xl mb-3">{project.title}</h1>
                    <div className="mb-6">
                        {project.description}
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    {project.stack.map((tech: string, index: number) => (
                        <div key={index}>
                            <img title={tech} src={`/svgs/${tech}.svg`} alt={tech} width={30} height={30}
                                className="max-h-[30px] max-w-[30px]" />
                        </div>
                    ))}
                </div>
            </div>
        </article>
    )
}