import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, IceCream } from "lucide-react";

export default function NavBar() {
  const [open, setOpen] = useState(false);

  // Helper to render one nav item.
  // Use relative paths: "." for Home (index route), and "menu", "flavors", etc. for others.
  const item = (to: string, label: string) => (
    <NavLink
      to={to}
      end={to === "."} // Home should only be active on exact "/"
      onClick={() => setOpen(false)}
      className={({ isActive }) =>
        [
          "px-4 py-2 rounded-full text-base md:text-lg font-medium transition-colors duration-200",
          isActive
            ? "text-brand-700 bg-white shadow-sm"
            : "text-neutral-800 hover:text-brand-600 hover:bg-white/70",
        ].join(" ")
      }
    >
      {label}
    </NavLink>
  );

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-cream/70 border-b border-neutral-200/60 shadow-sm">
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-16">
        {/* Logo → go to index route ("/" under the basename) */}
        <Link to="/" className="flex items-center gap-2 group">
          <IceCream className="text-brand-600 w-7 h-7 group-hover:scale-110 transition-transform" />
          <span className="font-display font-semibold text-lg md:text-xl tracking-tight">
            Sweet Borough Creamery
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-4">
          {item(".", "Home")}
          {item("menu", "Menu")}
          {item("flavors", "Flavors")}
          {item("locations", "Locations")}
          {item("about", "About")}
          {item("contact", "Contact")}
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="md:hidden p-2 rounded-lg hover:bg-white/60 transition"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {open && (
        <div className="md:hidden border-t border-neutral-200/70 bg-white/80 backdrop-blur">
          <div className="container-px mx-auto max-w-7xl py-3 flex flex-col gap-2">
            {item(".", "Home")}
            {item("menu", "Menu")}
            {item("flavors", "Flavors")}
            {item("locations", "Locations")}
            {item("about", "About")}
            {item("contact", "Contact")}
          </div>
        </div>
      )}
    </header>
  );
}
