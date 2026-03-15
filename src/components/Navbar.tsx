import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="navbar">
      <h2 className="logo">Mahjabin's Blog</h2>

      <nav className="navLinks">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>

        <button
          onClick={toggleTheme}
          className="themeButton"
        >
          {theme === "light" ? "Dark" : "Light"}
        </button>
      </nav>
    </div>
  );
}