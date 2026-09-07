import React from "react";

export function SectionHeader({ eyebrow, title, align = "left" }) {
  const centered = align === "center";

  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-2xl"}>
      <p className="text-sm font-black uppercase tracking-[0.18em] text-beacon-emerald">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-black leading-tight text-beacon-ink sm:text-4xl lg:text-5xl">
        {title}
      </h2>
    </div>
  );
}
