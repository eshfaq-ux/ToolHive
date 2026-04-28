"use client";
import { useState } from "react";

export default function BmiCalculator() {
  const [unit, setUnit] = useState<"metric" | "imperial">("metric");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [heightIn, setHeightIn] = useState("");

  const bmi = (() => {
    const w = parseFloat(weight), h = parseFloat(height);
    if (!w || !h) return null;
    if (unit === "metric") return w / (h / 100) ** 2;
    const totalIn = h * 12 + (parseFloat(heightIn) || 0);
    return (w / totalIn ** 2) * 703;
  })();

  const category = !bmi ? null : bmi < 18.5 ? "Underweight" : bmi < 25 ? "Normal weight" : bmi < 30 ? "Overweight" : "Obese";
  const color = !bmi ? "" : bmi < 18.5 ? "#60a5fa" : bmi < 25 ? "#4ade80" : bmi < 30 ? "#facc15" : "#f87171";

  return (
    <div className="space-y-5">
      <div className="flex gap-2">
        {(["metric", "imperial"] as const).map((u) => (
          <button key={u} onClick={() => setUnit(u)}
            className="flex-1 py-2 rounded-xl text-sm font-medium capitalize"
            style={{ background: unit === u ? "#7c6af7" : "#353849", color: "#f0f2ff" }}>{u}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <label className="space-y-1 text-sm">
          <span style={{ color: "#9da3c8" }}>Weight ({unit === "metric" ? "kg" : "lbs"})</span>
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)}
            placeholder={unit === "metric" ? "70" : "154"}
            className="input w-full" style={{ borderRadius: "0.75rem", padding: "0.75rem 1rem" }} />
        </label>
        <div className="space-y-1 text-sm">
          <span style={{ color: "#9da3c8" }}>Height ({unit === "metric" ? "cm" : "ft / in"})</span>
          <div className="flex gap-2">
            <input type="number" value={height} onChange={(e) => setHeight(e.target.value)}
              placeholder={unit === "metric" ? "175" : "5"}
              className="input w-full" style={{ borderRadius: "0.75rem", padding: "0.75rem 1rem" }} />
            {unit === "imperial" && (
              <input type="number" value={heightIn} onChange={(e) => setHeightIn(e.target.value)}
                placeholder="10"
                className="input w-24" style={{ borderRadius: "0.75rem", padding: "0.75rem 1rem" }} />
            )}
          </div>
        </div>
      </div>
      {bmi && (
        <div className="p-5 rounded-2xl text-center space-y-1" style={{ background: "#0f1117", border: `1.5px solid ${color}` }}>
          <div className="text-4xl font-bold" style={{ color }}>{bmi.toFixed(1)}</div>
          <div className="text-sm font-medium" style={{ color }}>{category}</div>
          <div className="text-xs mt-2" style={{ color: "#9da3c8" }}>Underweight &lt;18.5 · Normal 18.5–24.9 · Overweight 25–29.9 · Obese ≥30</div>
        </div>
      )}
    </div>
  );
}
