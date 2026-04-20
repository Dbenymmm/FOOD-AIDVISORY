import Link from "next/link";

const links = [
  ["/", "Home"],
  ["/dashboard", "Dashboard"],
  ["/meal-plan", "Meal Plan"],
  ["/shopping-list", "Shopping List"],
  ["/coach", "AI Coach"]
] as const;

export function Nav() {
  return (
    <nav className="flex flex-wrap gap-4 py-4 border-b border-slate-800 mb-6">
      {links.map(([href, label]) => (
        <Link key={href} href={href} className="text-sm text-slate-300 hover:text-white">
          {label}
        </Link>
      ))}
    </nav>
  );
}
