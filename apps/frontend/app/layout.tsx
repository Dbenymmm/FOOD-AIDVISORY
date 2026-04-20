import "./globals.css";
import { Nav } from "../components/Nav";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="max-w-6xl mx-auto px-4">
        <Nav />
        {children}
      </body>
    </html>
  );
}
