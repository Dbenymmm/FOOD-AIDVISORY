export default function SignupPage() {
  return (
    <main className="space-y-4 max-w-md">
      <h1 className="text-2xl font-semibold">Create account</h1>
      <form className="card space-y-3">
        <input className="w-full bg-slate-800 p-2 rounded" placeholder="Email" />
        <input className="w-full bg-slate-800 p-2 rounded" placeholder="Password" type="password" />
        <button className="bg-emerald-500 px-4 py-2 rounded text-black font-semibold">Sign up</button>
      </form>
    </main>
  );
}
