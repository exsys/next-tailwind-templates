
/**
 * Add the following to globals.css 
@layer utilities {
  .card-glow {
    filter: drop-shadow(0 50px 50px #04D9FF);
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
  }
}
 */

export default function GlassCard1() {
    return (
        <div className="py-4 px-6 backdrop-blur-sm bg-black/[.1] border-2 border-[#04D9FF]/[.15] rounded-xl
        relative card-glow">
            <div className="drop-shadow-2xl">
                <h1 className="text-3xl">Title</h1>
                <h2 className="text-xl">Subtitle</h2>
            </div>
        </div>
    )
}