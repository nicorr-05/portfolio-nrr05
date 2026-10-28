import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
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
          fontFamily: "Archivo",
          fontSize: 104,
          letterSpacing: -3,
        }}
      >
        NR
      </div>
    ),
    { ...size, fonts: [{ name: "Archivo", data: font, weight: 700, style: "normal" }] },
  );
}
