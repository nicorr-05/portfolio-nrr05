import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

// Monogram on the hero's gray field, set in the display face.
export default async function Icon() {
  const font = await readFile(join(process.cwd(), "src/assets/archivo-narrow-700.woff"));
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#6b6e73",
          color: "#f7f8f9",
          borderRadius: 14,
          fontFamily: "Archivo",
          fontSize: 38,
          letterSpacing: -1,
        }}
      >
        NR
      </div>
    ),
    { ...size, fonts: [{ name: "Archivo", data: font, weight: 700, style: "normal" }] },
  );
}
