import { ogSize, renderOg } from "@/lib/og";

export const alt = "Nicolás Restrepo, Forward Deployed Engineer. Full stack and applied AI.";
export const size = ogSize;
export const contentType = "image/png";

export default function Image() {
  return renderOg({ title: "Forward Deployed Engineer", kicker: "Available now, full time", available: true });
}
