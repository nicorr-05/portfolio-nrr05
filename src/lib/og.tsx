import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

// Same world as the hero: gray field, cut-out portrait, condensed name.
const FIELD = "#6b6e73";
const DEEP = "#1f2124";
const ON = "#f7f8f9";

async function assets() {
  const dir = join(process.cwd(), "src/assets");
  const [display, text, portrait] = await Promise.all([
    readFile(join(dir, "archivo-narrow-700.woff")),
    readFile(join(dir, "hanken-grotesk-500.woff")),
    readFile(join(dir, "portrait-640.png")),
  ]);
  return { display, text, portrait: `data:image/png;base64,${portrait.toString("base64")}` };
}

export async function renderOg({ title, kicker, available = false }: { title: string; kicker: string; available?: boolean }) {
  const { display, text, portrait } = await assets();
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: FIELD, color: ON, position: "relative", fontFamily: "Hanken" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={portrait} width={560} height={560} alt="" style={{ position: "absolute", right: -20, bottom: 0, maskImage: "linear-gradient(to right, transparent, black 16%, black 100%)" }} />
        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "56px 64px", width: 760 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 26 }}>
            {available ? <div style={{ width: 14, height: 14, borderRadius: 7, background: "#3fca6b" }} /> : null}
            {kicker}
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontFamily: "Archivo", fontSize: title.length > 40 ? 76 : 104, lineHeight: 0.95, letterSpacing: -2 }}>{title}</div>
            <div style={{ display: "flex", marginTop: 28, fontSize: 28, background: DEEP, alignSelf: "flex-start", padding: "12px 22px", borderRadius: 40 }}>
              Nicolás Restrepo · Remote, LATAM (GMT-4)
            </div>
          </div>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Archivo", data: display, weight: 700, style: "normal" },
        { name: "Hanken", data: text, weight: 500, style: "normal" },
      ],
    },
  );
}
