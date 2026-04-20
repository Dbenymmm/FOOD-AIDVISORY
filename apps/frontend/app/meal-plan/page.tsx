const meals = ["Breakfast", "Snack", "Lunch", "Snack", "Dinner"];

export default function MealPlanPage() {
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold">Meal Plan</h1>
      <div className="grid md:grid-cols-2 gap-4">
        {Array.from({ length: 7 }).map((_, day) => (
          <div key={day} className="card">
            <h2 className="font-semibold mb-2">Day {day + 1}</h2>
            <ul className="text-sm text-slate-300 space-y-1">
              {meals.map((m) => <li key={m}>{m}: AI generated item</li>)}
            </ul>
          </div>
        ))}
      </div>
    </main>
  );
}
