export default function DashboardPage() {
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold">Dashboard</h1>
      <section className="grid md:grid-cols-4 gap-4">
        <div className="card">Meal calendar</div>
        <div className="card">Macro charts</div>
        <div className="card">Weekly analytics</div>
        <div className="card">Energy/Hunger/Satisfaction trends</div>
      </section>
    </main>
  );
}
