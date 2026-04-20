export default function CoachPage() {
  return (
    <main className="space-y-4 max-w-2xl">
      <h1 className="text-2xl font-semibold">AI Nutrition Coach</h1>
      <div className="card h-72">Chat history</div>
      <div className="flex gap-2">
        <input className="flex-1 bg-slate-800 p-2 rounded" placeholder='Ask: "Why am I hungry at night?"' />
        <button className="bg-violet-500 text-black px-4 rounded font-semibold">Send</button>
      </div>
    </main>
  );
}
