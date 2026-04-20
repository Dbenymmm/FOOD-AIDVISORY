export default function ProfileSetup() {
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold">Profile setup</h1>
      <div className="card grid md:grid-cols-2 gap-3">
        {[
          "age", "sex", "height", "weight", "goal weight", "activity level", "diet", "allergies",
          "budget", "cooking preference", "household size"
        ].map((f) => (
          <input key={f} className="bg-slate-800 p-2 rounded" placeholder={f} />
        ))}
      </div>
    </main>
  );
}
