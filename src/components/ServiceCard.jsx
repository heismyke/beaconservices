import { CheckCircle2 } from "lucide-react";
import React from "react";

export function ServiceCard({ service, Icon }) {
  return (
    <article className="flex h-full flex-col bg-beacon-pearl p-6 shadow-soft sm:p-8">
      <div className="flex items-start justify-between gap-5">
        <div>
          <p className="text-sm font-black uppercase tracking-[0.16em] text-beacon-rose">
            {service.kicker}
          </p>
          <h3 className="mt-3 text-2xl font-black text-beacon-ink">
            {service.title}
          </h3>
        </div>
        <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-beacon-forest text-white">
          <Icon size={25} />
        </span>
      </div>
      <p className="mt-5 text-base leading-7 text-beacon-ink/72">
        {service.description}
      </p>
      <div className="mt-7 grid gap-3">
        {service.items.map((item) => (
          <p key={item} className="flex gap-3 text-sm font-semibold leading-6 text-beacon-ink/78">
            <CheckCircle2 className="mt-0.5 shrink-0 text-beacon-emerald" size={17} />
            {item}
          </p>
        ))}
      </div>
    </article>
  );
}
