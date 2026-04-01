"use client";

import { Toaster as HotToaster } from "react-hot-toast";

export function Toaster() {
  return (
    <HotToaster
      position="bottom-right"
      toastOptions={{
        style: {
          background: "#1a1a1a",
          color: "#ededed",
          border: "1px solid #262626",
        },
      }}
    />
  );
}
