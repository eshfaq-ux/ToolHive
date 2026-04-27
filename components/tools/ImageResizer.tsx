"use client";
import { useState, useRef } from "react";

export default function ImageResizer() {
  const [preview, setPreview] = useState<string | null>(null);
  const [width, setWidth] = useState(800);
  const [height, setHeight] = useState(600);
  const [keepRatio, setKeepRatio] = useState(true);
  const [origSize, setOrigSize] = useState({ w: 0, h: 0 });
  const imgRef = useRef<HTMLImageElement>(null);

  const handleFile = (file: File) => {
    const url = URL.createObjectURL(file);
    const img = new Image();
    img.onload = () => { setOrigSize({ w: img.width, h: img.height }); setWidth(img.width); setHeight(img.height); setPreview(url); };
    img.src = url;
  };

  const onWidthChange = (v: number) => { setWidth(v); if (keepRatio && origSize.w) setHeight(Math.round(v * origSize.h / origSize.w)); };
  const onHeightChange = (v: number) => { setHeight(v); if (keepRatio && origSize.h) setWidth(Math.round(v * origSize.w / origSize.h)); };

  const resize = () => {
    if (!preview || !imgRef.current) return;
    const canvas = document.createElement("canvas");
    canvas.width = width; canvas.height = height;
    canvas.getContext("2d")!.drawImage(imgRef.current, 0, 0, width, height);
    canvas.toBlob((blob) => {
      if (!blob) return;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob); a.download = `resized-${width}x${height}.png`; a.click();
    });
  };

  return (
    <div className="space-y-5">
      <div className="rounded-xl p-10 text-center cursor-pointer transition-colors"
        style={{ border: "2px dashed #353849" }}
        onMouseEnter={(e) => (e.currentTarget.style.borderColor = "#7c6af7")}
        onMouseLeave={(e) => (e.currentTarget.style.borderColor = "#353849")}
        onClick={() => document.getElementById("ri")?.click()}>
        <input id="ri" type="file" accept="image/*" className="hidden"
          onChange={(e) => e.target.files?.[0] && handleFile(e.target.files[0])} />
        <p style={{ color: "#9da3c8" }}>Drop an image or <span style={{ color: "#f0f2ff" }} className="underline">browse</span></p>
      </div>

      {preview && (
        <>
          <img ref={imgRef} src={preview} alt="preview" className="max-h-48 rounded-lg object-contain" />
          <div className="flex flex-wrap gap-4 items-end">
            {[{ label: "Width (px)", val: width, set: onWidthChange }, { label: "Height (px)", val: height, set: onHeightChange }].map(({ label, val, set }) => (
              <div key={label}>
                <label className="text-xs block mb-1" style={{ color: "#9da3c8" }}>{label}</label>
                <input type="number" value={val} onChange={(e) => set(Number(e.target.value))} className="input w-28" />
              </div>
            ))}
            <label className="flex items-center gap-2 text-sm cursor-pointer" style={{ color: "#9da3c8" }}>
              <input type="checkbox" checked={keepRatio} onChange={(e) => setKeepRatio(e.target.checked)} style={{ accentColor: "#7c6af7" }} />
              Lock ratio
            </label>
          </div>
          <button className="btn" onClick={resize}>⬇ Resize & Download</button>
        </>
      )}
    </div>
  );
}
