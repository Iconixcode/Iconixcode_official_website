export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-[38%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/[0.035] blur-3xl sm:h-[700px] sm:w-[700px]" />

      <div className="absolute left-1/2 top-[42%] h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.025] sm:h-[420px] sm:w-[420px]" />

      <div className="absolute left-1/2 top-[42%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/[0.018] sm:h-[760px] sm:w-[760px]" />

      <div className="absolute bottom-0 left-0 right-0 h-72 bg-gradient-to-t from-black via-black/60 to-transparent" />
    </div>
  );
}