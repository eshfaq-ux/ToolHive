"use client";
import { useState, useCallback } from "react";

const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const DIGITS = "0123456789";
const SYMBOLS = "!@#$%^&*()_+-=[]{}|;:,.<>?";

export default function PasswordGenerator() {
  const [length, setLength] = useState(16);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [digits, setDigits] = useState(true);
  const [symbols, setSymbols] = useState(false);
  const [password, setPassword] = useState("");
  const [copied, setCopied] = useState(false);

  const generate = useCallback(() => {
    let chars = "";
    if (upper) chars += UPPER;
    if (lower) chars += LOWER;
    if (digits) chars += DIGITS;
    if (symbols) chars += SYMBOLS;
    if (!chars) return;
    setPassword(Array.from({ length }, () => chars[Math.floor(Math.random() * chars.length)]).join(""));
    setCopied(false);
  }, [length, upper, lower, digits, symbols]);

  const copy = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const strength = !password ? null : password.length >= 16 && upper && lower && digits && symbols ? "Strong" : password.length >= 12 ? "Medium" : "Weak";
  const strengthColor = strength === "Strong" ? "#4ade80" : strength === "Medium" ? "#facc15" : "#f87171";

  return (
    <div className="space-y-5">
      <div className="flex gap-2">
        <input readOnly value={password} placeholder="Click Generate"
          className="input flex-1 font-mono text-sm" style={{ borderRadius: "0.75rem", padding: "0.75rem 1rem" }} />
        <button onClick={copy} disabled={!password}
          className="px-4 rounded-xl text-sm font-medium transition-colors"
          style={{ background: "#7c6af7", color: "#fff" }}>{copied ? "Copied!" : "Copy"}</button>
      </div>
      {strength && <div className="text-sm font-medium" style={{ color: strengthColor }}>Strength: {strength}</div>}
      <div className="space-y-3">
        <label className="flex items-center justify-between text-sm">
          <span>Length: {length}</span>
          <input type="range" min={6} max={64} value={length} onChange={(e) => setLength(+e.target.value)} className="w-48" />
        </label>
        {[["Uppercase (A-Z)", upper, setUpper], ["Lowercase (a-z)", lower, setLower],
          ["Numbers (0-9)", digits, setDigits], ["Symbols (!@#...)", symbols, setSymbols]].map(([label, val, set]) => (
          <label key={label as string} className="flex items-center gap-3 text-sm cursor-pointer">
            <input type="checkbox" checked={val as boolean} onChange={(e) => (set as (v: boolean) => void)(e.target.checked)} />
            {label as string}
          </label>
        ))}
      </div>
      <button onClick={generate}
        className="w-full py-3 rounded-xl font-semibold transition-colors"
        style={{ background: "#7c6af7", color: "#fff" }}>Generate Password</button>
    </div>
  );
}
