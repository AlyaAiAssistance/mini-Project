"use client";

import React, { useEffect, useRef } from "react";

export interface AsciiForestCanvasProps {
  className?: string;
  cellSize?: number;
  tint?: string;
  animated?: boolean;
}

export function AsciiForestCanvas({
  className = "",
  cellSize = 10,
  tint = "#3ca6ff",
  animated = true,
}: AsciiForestCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let time = 0;

    const forestChars = ["█", "▓", "▒", "░", "▲", "↟", "🌲", "✦", "*", "+", "."];

    const resize = () => {
      const parent = canvas.parentElement;
      if (!parent) return;
      canvas.width = parent.clientWidth;
      canvas.height = parent.clientHeight;
    };

    resize();
    window.addEventListener("resize", resize);

    const render = () => {
      time += animated ? 1.2 : 0;
      const width = canvas.width;
      const height = canvas.height;
      if (!width || !height) {
        animationFrameId = requestAnimationFrame(render);
        return;
      }

      ctx.clearRect(0, 0, width, height);

      const cols = Math.ceil(width / cellSize);
      const rows = Math.ceil(height / cellSize);

      ctx.font = `${cellSize - 1}px monospace`;
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";

      const isDark = document.documentElement.classList.contains("dark");
      const baseHue = 205; // brand blue hue (#3ca6ff)

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = c * cellSize;
          const y = r * cellSize;

          // Shimmer wave combining harmonic sine math
          const wave1 = Math.sin(c * 0.12 + r * 0.08 + time * 0.03);
          const wave2 = Math.cos(c * 0.07 - r * 0.14 + time * 0.02);
          const val = (wave1 + wave2 + 2) / 4; // 0 to 1

          // Film dust / halftone particle simulation
          const isDust = Math.sin(c * 91 + r * 37 + time * 0.5) > 0.985;

          if (val > 0.08 || isDust) {
            const charIdx = Math.floor(val * (forestChars.length - 1));
            const glyph = isDust ? "✦" : forestChars[charIdx];

            // Color adjustments & tinting
            const alpha = Math.min(0.5, 0.1 + val * 0.35).toFixed(2);
            if (isDark) {
              ctx.fillStyle = `hsla(${baseHue + val * 25}, 85%, 65%, ${alpha})`;
            } else {
              ctx.fillStyle = `hsla(${baseHue}, 80%, 45%, ${alpha})`;
            }

            ctx.fillText(glyph, x + cellSize / 2, y + cellSize / 2);
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [cellSize, tint, animated]);

  return (
    <canvas
      ref={canvasRef}
      className={`pointer-events-none absolute inset-0 z-0 h-full w-full rounded-xl opacity-35 dark:opacity-30 ${className}`}
    />
  );
}

export default AsciiForestCanvas;
