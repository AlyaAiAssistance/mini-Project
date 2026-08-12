import MarqueeAlongSvgPath from "@/components/ui/marquee-along-svg-path"

const path =
  "M1 209.434C58.5872 255.935 387.926 325.938 482.583 209.434C600.905 63.8051 525.516 -43.2211 427.332 19.9613C329.149 83.1436 352.902 242.723 515.041 267.302C644.752 286.966 943.56 181.94 995 156.5"

export default function MarqueeAlongSvgPathDemo() {
  return (
    <div className="w-dvw h-dvh bg-slate-50 dark:bg-[#071424] text-slate-800 dark:text-white flex items-center justify-center transition-colors">
      <MarqueeAlongSvgPath
        path={path}
        viewBox="0 0 996 330"
        baseVelocity={8}
        slowdownOnHover={true}
        draggable={true}
        showPath={true}
        repeat={2}
        dragSensitivity={0.1}
        className="w-full h-full scale-105 text-brand-600/70 dark:text-sky-400 dark:drop-shadow-[0_0_14px_rgba(56,189,248,0.9)]"
        responsive
        grabCursor
      >
        {imgs.map((img, i) => (
          <div
            key={i}
            className="flex items-center gap-2 rounded-xl border border-slate-200/90 bg-white/95 p-2 shadow-xl backdrop-blur-md transition-all hover:scale-125 dark:border-sky-400/80 dark:bg-[#0c2438]/95 dark:shadow-[0_0_20px_rgba(56,189,248,0.35)]"
          >
            <img
              src={img.src}
              alt={`Destination ${i}`}
              className="h-10 w-10 rounded-lg object-cover shadow-sm shrink-0"
              draggable={false}
            />
            <div className="text-left leading-tight pr-1">
              <p className="text-xs font-extrabold text-slate-800 dark:text-white whitespace-nowrap">
                {img.name}
              </p>
              <span className="inline-block text-[10px] font-bold text-brand-600 dark:text-sky-300 whitespace-nowrap">
                {img.tag}
              </span>
            </div>
          </div>
        ))}
      </MarqueeAlongSvgPath>
    </div>
  )
}

const imgs = [
  {
    src: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=150&q=80",
    name: "Maldives",
    tag: "Safe 99%",
  },
  {
    src: "https://images.unsplash.com/photo-1488646953014-85cb44e25828?auto=format&fit=crop&w=150&q=80",
    name: "Kyoto",
    tag: "Top 99%",
  },
  {
    src: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=150&q=80",
    name: "Paris",
    tag: "Safe 96%",
  },
  {
    src: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=150&q=80",
    name: "Rome",
    tag: "Safe 97%",
  },
  {
    src: "https://images.unsplash.com/photo-1530521954074-e64f6810b32d?auto=format&fit=crop&w=150&q=80",
    name: "Swiss Alps",
    tag: "SOS 24/7",
  },
  {
    src: "https://images.unsplash.com/photo-1512100356356-de1b84283e18?auto=format&fit=crop&w=150&q=80",
    name: "Bali",
    tag: "Verified",
  },
]
