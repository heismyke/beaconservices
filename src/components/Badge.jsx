import React from "react";

export function Badge({ children }) {
  return (
    <span className="inline-flex w-fit items-center rounded-full border border-current/25 bg-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.18em]">
      {children}
    </span>
  );
}
