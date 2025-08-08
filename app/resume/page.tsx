import data from "@/lib/data.json";

export default function ResumePage(){
  return (
    <main className="mx-auto max-w-3xl px-4 py-24">
      <h1 className="text-3xl font-semibold gradient-text">Resume</h1>
      <p className="mt-2 text-zinc-300">{data.name} — {data.tagline}</p>
      <div className="mt-6 glass p-5">
        <h2 className="font-medium">Education</h2>
        <ul className="list-disc list-inside text-sm text-zinc-300 mt-2 space-y-1">
          <li>University of Information Technology – VNUHCM (2022–Present)</li>
          <li>Nguyen Thi Minh Khai Gifted High School (2019–2022)</li>
        </ul>
      </div>
    </main>
  );
}
