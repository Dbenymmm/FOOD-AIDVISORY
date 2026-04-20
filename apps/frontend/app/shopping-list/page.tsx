const items = [
  ["Chicken breast", "2kg", "€14.20", "Lidl"],
  ["Oats", "1kg", "€1.80", "Tesco"],
  ["Greek yogurt", "1.5kg", "€5.60", "Kaufland"]
];

export default function ShoppingListPage() {
  return (
    <main className="space-y-4">
      <h1 className="text-2xl font-semibold">Shopping List</h1>
      <div className="card overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead>
            <tr className="text-slate-400">
              <th>Ingredient</th><th>Qty</th><th>Price</th><th>Store</th>
            </tr>
          </thead>
          <tbody>
            {items.map(([name, qty, price, store]) => (
              <tr key={name} className="border-t border-slate-800">
                <td className="py-2">{name}</td><td>{qty}</td><td>{price}</td><td>{store}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
}
