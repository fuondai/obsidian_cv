import { ReactNode } from "react";

export default function Section({ id, title, children }: { id: string, title: string, children: ReactNode }) {
  return (
    <section id={id} className="mx-auto max-w-5xl px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-semibold mb-6 gradient-text">{title}</h2>
      <div className="grid gap-4">{children}</div>
    </section>
  );
}
