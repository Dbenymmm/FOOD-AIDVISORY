export default function LandingPage() {
  return (
    <main className="space-y-6">
      <h1 className="text-4xl font-bold">FOOD-AIDVISORY</h1>
      <p className="text-slate-300">AI-powered personalized meal planning, price optimization, and nutrition coaching.</p>
      <section className="grid md:grid-cols-3 gap-4">
        <div className="card">Personalized meal plans (7–10 days)</div>
        <div className="card">Macro targets & nutrition analytics</div>
        <div className="card">Shopping list + cheapest store recommendations</div>
      </section>
    </main>
  );
}
