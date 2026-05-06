import { useEffect, useState } from "react";

export default function Countdown({ hours = 23 }: { hours?: number }) {
  const [t, setT] = useState(hours * 3600);
  useEffect(() => {
    const i = setInterval(() => setT(s => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(i);
  }, []);
  const h = String(Math.floor(t / 3600)).padStart(2, "0");
  const m = String(Math.floor((t % 3600) / 60)).padStart(2, "0");
  const s = String(t % 60).padStart(2, "0");
  return (
    <div className="flex gap-2 font-mono text-primary">
      {[h, m, s].map((v, i) => (
        <div key={i} className="bg-card border border-gold px-3 py-2 rounded-sm font-bold">{v}</div>
      ))}
    </div>
  );
}
