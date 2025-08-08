import data from "@/lib/data.json";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Section from "@/components/Section";
import ProjectCard from "@/components/ProjectCard";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Section id="about" title="About">
        <p className="glass p-5">{data.summary}</p>
      </Section>
      <Section id="skills" title="Skills">
        <div className="grid md:grid-cols-3 gap-4">
          {Object.entries(data.skills).map(([k, v]) => (
            <div key={k} className="glass p-5">
              <h3 className="font-medium mb-2">{k}</h3>
              <div className="flex flex-wrap gap-2">
                {(v as string[]).map(s => <span key={s} className="text-xs px-2 py-1 rounded border border-white/10 text-zinc-300">{s}</span>)}
              </div>
            </div>
          ))}
        </div>
      </Section>
      <Section id="experience" title="Experience">
        {data.experience.map((e, i) => (
          <div key={i} className="glass p-5">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
              <div className="font-medium">{e.title} @ {e.org}</div>
              <div className="text-sm text-zinc-400">{e.when}</div>
            </div>
            <ul className="mt-3 list-disc list-inside text-sm text-zinc-300 space-y-1">
              {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </div>
        ))}
      </Section>
      <Section id="projects" title="Projects">
        <div className="grid md:grid-cols-2 gap-4">
          {data.projects.map((p, i) => (
            <ProjectCard key={i} {...p} />
          ))}
        </div>
      </Section>
      <Section id="research" title="Certificates & Research">
        <div className="glass p-5">
          <h3 className="font-medium">Certificates</h3>
          <div className="mt-2 flex flex-wrap gap-2">
            {data.certs.map((c, i) => <span key={i} className="text-xs px-2 py-1 rounded border border-white/10 text-zinc-300">{c}</span>)}
          </div>
        </div>
      </Section>
      <Section id="contact" title="Contact">
        <div className="glass p-5 grid gap-3">
          <div>Email: <a className="underline" href={`mailto:${data.email}`}>{data.email}</a></div>
          <div>Phone: <a className="underline" href={`tel:${data.phone}`}>{data.phone}</a></div>
          <div className="flex gap-3">
            <a className="underline" href={data.links.github} target="_blank">GitHub</a>
            <a className="underline" href={data.links.linktree} target="_blank">Linktree</a>
          </div>
        </div>
      </Section>
      <footer className="mx-auto max-w-5xl px-4 pb-10 text-xs text-zinc-500">
        © {new Date().getFullYear()} {data.name}. Built with Next.js.
      </footer>
    </main>
  );
}
