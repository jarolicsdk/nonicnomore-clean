export default function Home() {
  return (
    <main className="space-y-12 bg-[#F9FAFB] p-10 font-sans text-slate-800">
      <section className="rounded-xl bg-gradient-to-b from-[#AEE6F9] to-[#F9FAFB] p-10 text-center">
        <h1 className="mb-4 text-4xl font-bold">Quit Nicotine Without the Stress</h1>
        <p className="mb-6 text-xl">
          Join thousands who have broken free through calm, science-backed guidance.
        </p>
        <button className="rounded-full bg-[#FF9F9F] px-6 py-3 font-semibold text-white hover:opacity-90">
          Start Your Journey
        </button>
      </section>

      <section>
        <h2 className="mb-6 text-center text-2xl font-semibold">How It Works</h2>
        <div className="grid gap-6 text-center md:grid-cols-4">
          {["Assess", "Follow", "Track", "Break Free"].map((step, i) => (
            <div key={i} className="rounded-lg bg-white p-6 shadow">
              <h3 className="mb-2 text-xl font-bold">{step}</h3>
              <p className="text-sm text-slate-600">Step {i + 1} of your calm journey</p>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-xl bg-[#B8D8C4] p-10 text-center text-white">
        <h2 className="mb-4 text-2xl font-semibold">Why It Works</h2>
        <p>Built by behavioral psychologists. Backed by neuroscience. Tailored for real life.</p>
      </section>

      <section className="text-center">
        <h2 className="mb-4 text-2xl font-semibold">Success Stories</h2>
        <blockquote className="mx-auto max-w-xl italic">
          “I never thought I’d feel free again. Now I breathe deeper every day.”
        </blockquote>
        <p className="mt-2 font-bold">– Emily, Zurich</p>
      </section>

      <section>
        <h2 className="mb-4 text-center text-2xl font-semibold">Program Features</h2>
        <ul className="list-inside list-disc gap-4 grid md:grid-cols-2">
          <li>Daily guided content</li>
          <li>Craving support toolkit</li>
          <li>Progress tracker</li>
          <li>Community & chat access</li>
          <li>Relapse recovery plan</li>
        </ul>
      </section>
    </main>
  );
}
