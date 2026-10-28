"use client";

import { useSyncExternalStore } from "react";
import { site } from "@/lib/site";

const format = new Intl.DateTimeFormat("en-US", {
  hour: "2-digit",
  minute: "2-digit",
  hour12: false,
  timeZone: site.timeZone,
});

function subscribe(cb: () => void) {
  const id = setInterval(cb, 15_000);
  return () => clearInterval(id);
}

// Current time in GMT-4, so a US reader can see the overlap at a glance.
export function LocalTime() {
  const time = useSyncExternalStore(
    subscribe,
    () => format.format(new Date()),
    () => "--:--",
  );
  return (
    <time className="tabular" suppressHydrationWarning>
      {time}
    </time>
  );
}
