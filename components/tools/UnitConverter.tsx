"use client";
import { useState } from "react";

const categories = {
  Length: { units: ["Meter","Kilometer","Mile","Foot","Inch","Centimeter","Millimeter","Yard"], toBase: { Meter:1,Kilometer:1000,Mile:1609.344,Foot:0.3048,Inch:0.0254,Centimeter:0.01,Millimeter:0.001,Yard:0.9144 } },
  Weight: { units: ["Kilogram","Gram","Pound","Ounce","Ton"], toBase: { Kilogram:1,Gram:0.001,Pound:0.453592,Ounce:0.0283495,Ton:1000 } },
  Temperature: { units: ["Celsius","Fahrenheit","Kelvin"], toBase: {} as Record<string,number> },
} as const;

type Category = keyof typeof categories;

function convertTemp(val: number, from: string, to: string) {
  const c = from === "Fahrenheit" ? (val-32)*5/9 : from === "Kelvin" ? val-273.15 : val;
  return to === "Fahrenheit" ? c*9/5+32 : to === "Kelvin" ? c+273.15 : c;
}

export default function UnitConverter() {
  const [cat, setCat] = useState<Category>("Length");
  const [from, setFrom] = useState("Meter");
  const [to, setTo] = useState("Kilometer");
  const [input, setInput] = useState("");

  const units = categories[cat].units as readonly string[];

  const convert = () => {
    const val = parseFloat(input);
    if (isNaN(val)) return "—";
    if (cat === "Temperature") return convertTemp(val, from, to).toFixed(6);
    const base = categories[cat].toBase as Record<string,number>;
    return ((val * base[from]) / base[to]).toFixed(6);
  };

  const onCatChange = (c: Category) => { setCat(c); setFrom(categories[c].units[0]); setTo(categories[c].units[1]); setInput(""); };

  return (
    <div className="space-y-5">
      <div className="flex gap-2">
        {(Object.keys(categories) as Category[]).map((c) => (
          <button key={c} onClick={() => onCatChange(c)} className={`tag ${cat === c ? "active" : ""}`}>{c}</button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 items-end">
        {[{ label: "From", val: from, set: setFrom }, { label: "To", val: to, set: setTo }].map(({ label, val, set }) => (
          <div key={label}>
            <label className="text-xs block mb-1" style={{ color: "#9da3c8" }}>{label}</label>
            <select value={val} onChange={(e) => set(e.target.value)} className="input">
              {units.map((u) => <option key={u}>{u}</option>)}
            </select>
          </div>
        ))}
        <div>
          <label className="text-xs block mb-1" style={{ color: "#9da3c8" }}>Value</label>
          <input type="number" value={input} onChange={(e) => setInput(e.target.value)} className="input" />
        </div>
      </div>
      {input && (
        <div className="card">
          <span style={{ color: "#9da3c8" }} className="text-sm">{input} {from} = </span>
          <span className="font-mono text-lg font-bold text-green-400">{convert()} {to}</span>
        </div>
      )}
    </div>
  );
}
