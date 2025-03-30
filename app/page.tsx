export default function Home() {
  return (
    <main className="p-10 text-slate-800 bg-[#F9FAFB] space-y-12 font-sans">
      <section className="text-center bg-gradient-to-b from-[#AEE6F9] to-[#F9FAFB] p-10 rounded-xl">
        <h1 className="text-4xl font-bold mb-4">Quit Nicotine Without the Stress</h1>
        <p className="text-xl mb-6">Join thousands who have broken free through calm, science-backed guidance.</p>
        <button className="bg-[#FF9F9F] text-white px-6 py-3 rounded-full font-semibold hover:opacity-90">Start Your Journey</button>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">How It Works</h2>
        <div className="grid md:grid-cols-4 gap-6 text-center">
          {['Assess', 'Follow', 'Track', 'Break Free'].map((step, i) => (
            <div key={i} className="p-6 bg-white rounded-lg shadow">
              <h3 className="font-bold text-xl mb-2">{step}</h3>
              <p className="text-sm text-slate-600">Step {i + 1} of your calm journey</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-[#B8D8C4] text-white p-10 rounded-xl text-center">
        <h2 className="text-2xl font-semibold mb-4">Why It Works</h2>
        <p>Built by behavioral psychologists. Backed by neuroscience. Tailored for real life.</p>
      </section>

      <section className="text-center">
        <h2 className="text-2xl font-semibold mb-4">Success Stories</h2>
        <blockquote className="italic max-w-xl mx-auto">“I never thought I’d feel free again. Now I breathe deeper every day.”</blockquote>
        <p className="mt-2 font-bold">– Emily, Zurich</p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4 text-center">Program Features</h2>
        <ul className="grid md:grid-cols-2 gap-4 list-disc list-inside">
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
