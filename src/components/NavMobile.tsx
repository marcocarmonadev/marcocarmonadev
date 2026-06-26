import { useState } from "react";
import { navLinks } from "../data/navLinks";

export default function NavMobile() {
  const [open, setOpen] = useState(false);

  return (
    <nav
      className="flex md:hidden sticky top-0 z-10 flex-col border-b border-border"
      style={{ background: "rgba(255,255,255,0.96)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
      aria-label="Mobile navigation"
    >
      <div className="h-[52px] px-5 flex items-center justify-start">
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex flex-col justify-center gap-[5px] w-10 h-10 p-2 bg-transparent border-none cursor-pointer rounded-md hover:bg-muted"
        >
          <span
            className="block bg-dark rounded-sm"
            style={{
              width: 18,
              height: 2,
              transition: "transform 0.25s ease, opacity 0.25s ease",
              transform: open ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            className="block bg-dark rounded-sm"
            style={{
              width: 18,
              height: 2,
              transition: "transform 0.25s ease, opacity 0.25s ease",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            className="block bg-dark rounded-sm"
            style={{
              width: 18,
              height: 2,
              transition: "transform 0.25s ease, opacity 0.25s ease",
              transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </div>

      <div
        className="overflow-hidden"
        style={{
          maxHeight: open ? "400px" : "0",
          transition: "max-height 0.3s ease",
          padding: open ? "8px 20px 24px" : "0 20px",
          borderTop: open ? "1px solid #D8DBE0" : "none",
          background: "#fff",
        }}
      >
        {navLinks.map(({ href, label }) => (
          <a
            key={href}
            href={href}
            onClick={() => setOpen(false)}
            className="block text-lg font-semibold text-dark no-underline py-4 border-b border-border hover:text-accent"
          >
            {label}
          </a>
        ))}
        <a
          href="#contact"
          onClick={() => setOpen(false)}
          className="block mt-5 text-center text-base font-semibold text-white bg-accent no-underline py-3.5 rounded-md hover:bg-accent-dark"
        >
          Contact
        </a>
      </div>
    </nav>
  );
}
