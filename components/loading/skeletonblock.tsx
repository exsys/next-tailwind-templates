/*
Add this to tailwind config (theme.extend):
      keyframes: {
        "skeleton-light": {
          "0%": { "background-color": "hsl(200, 20%, 80%)" },
          "100%": { "background-color": "hsl(200, 20%, 95%)" },
        },
        "skeleton-dark": {
          "0%": { "background-color": "hsl(204, 5%, 22%)" },
          "100%": { "background-color": "hsl(210, 4%, 10%)" },
        },
      },
      animation: {
        "skeleton-light": "skeleton-light 1s linear infinite alternate",
        "skeleton-dark": "skeleton-dark 1s linear infinite alternate",
      }

*/
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