export default function SkeletonBlock() {
    return (
        <div className="h-full">
            <div className="">
                <div className="flex items-center gap-6">
                    <div className={`animate-skeleton-light dark:animate-skeleton-dark w-14 h-14 mb-2 rounded-full`}></div>
                    <div className={`animate-skeleton-light dark:animate-skeleton-dark w-3/4 h-3 mb-2 rounded-sm`}></div>
                </div>
                <div className={`animate-skeleton-light dark:animate-skeleton-dark w-full h-3 mb-2 rounded-sm`}></div>
                <div className={`animate-skeleton-light dark:animate-skeleton-dark w-3/4 h-3 mb-2 rounded-sm`}></div>
                <div className={`animate-skeleton-light dark:animate-skeleton-dark w-[30%] h-3 mb-2 rounded-sm`}></div>
            </div>
        </div>
    )
}