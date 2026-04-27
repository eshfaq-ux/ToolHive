"use client";
import { useState, useCallback } from "react";
import imageCompression from "browser-image-compression";

export default function ImageCompressor() {
  const [original, setOriginal] = useState<File | null>(null);
  const [compressed, setCompressed] = useState<{ url: string; size: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [quality, setQuality] = useState(0.7);

  const handleFile = useCallback(async (file: File) => {
    setOriginal(file); setCompressed(null); setLoading(true);
    try {
      const result = await imageCompression(file, { maxSizeMB: 1, useWebWorker: true, initialQuality: quality });
      setCompressed({ url: URL.createObjectURL(result), size: result.size });
    } finally { setLoading(false); }
  }, [quality]);

  const onDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file?.type.startsWith("image/")) handleFile(file);
  };

  return (
    <div className="space-y-5">
      <div onDrop={onDrop} onDragOver={(e) => e.preventDefault()}
        className="rounded-xl p-10 text-center cursor-pointer transition-colors"
        style={{ border: "2px dashed #353849" }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#7c6af7")}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#353849")}
        onClick={() => document.getElementById("fileInput")?.click()}>
        <input id="fileInput" type="file" accept="image/*" className="hidden"
          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
        <p style={{ color: "#9da3c8" }}>Drop an image here or <span style={{ color: "#f0f2ff" }} className="underline">browse</span></p>
      </div>

      <div className="flex items-center gap-4">
        <label className="text-sm w-28" style={{ color: "#9da3c8" }}>Quality: {Math.round(quality * 100)}%</label>
        <input type="range" min={0.1} max={1} step={0.05} value={quality}
          onChange={(e) => setQuality(Number(e.target.value))}
          className="flex-1" style={{ accentColor: "#7c6af7" }} />
      </div>

      {original && (
        <button className="btn" onClick={() => handleFile(original)}>
          {loading ? "Compressing…" : "Compress"}
        </button>
      )}

      {compressed && original && (
        <div className="card space-y-3">
          <div className="flex gap-6 text-sm flex-wrap">
            <span style={{ color: "#9da3c8" }}>Original: <b style={{ color: "#f0f2ff" }}>{(original.size / 1024).toFixed(1)} KB</b></span>
            <span style={{ color: "#9da3c8" }}>Compressed: <b className="text-green-400">{(compressed.size / 1024).toFixed(1)} KB</b></span>
            <span style={{ color: "#9da3c8" }}>Saved: <b className="text-green-400">{Math.round((1 - compressed.size / original.size) * 100)}%</b></span>
          </div>
          <a href={compressed.url} download="compressed-image" className="btn-ghost inline-block">⬇ Download</a>
        </div>
      )}
    </div>
  );
}
