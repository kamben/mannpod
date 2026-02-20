"use client";

import { useEffect } from "react";

const CONTAINER_ID = "buzzsprout-large-player";
const EMBED_SRC =
  "https://www.buzzsprout.com/2298471.js?container_id=buzzsprout-large-player&player=large";

export default function BuzzsproutPlayer() {
  useEffect(() => {
    const container = document.getElementById(CONTAINER_ID);
    if (container) {
      container.innerHTML = "";
    }

    const script = document.createElement("script");
    script.src = EMBED_SRC;
    script.async = true;
    script.charset = "utf-8";
    script.dataset.buzzsprout = CONTAINER_ID;
    document.body.appendChild(script);

    return () => {
      script.remove();
      if (container) {
        container.innerHTML = "";
      }
    };
  }, []);

  return <div id={CONTAINER_ID} className="min-h-[420px]" />;
}
