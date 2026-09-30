"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <header className="header">
      <div className="container header-inner">
        <Link href="/" className="logo" aria-label={`${site.name}, página inicial`}>
          {site.name}
          <small>{site.tagline}</small>
        </Link>

        <nav className="nav-desktop" aria-label="Principal">
          {nav.map((i) => (
            <Link key={i.href} href={i.href}>{i.label}</Link>
          ))}
        </nav>

        <Link href="/#contato" className="btn btn-primary header-cta">Entrar em contato</Link>

        <button
          type="button"
          className="menu-btn"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>

      {open && (
        <nav id="menu-mobile" className="nav-mobile" aria-label="Principal">
          {nav.map((i) => (
            <Link key={i.href} href={i.href} onClick={() => setOpen(false)}>{i.label}</Link>
          ))}
          <Link href="/#contato" className="btn btn-primary" onClick={() => setOpen(false)}>
            Entrar em contato
          </Link>
        </nav>
      )}
    </header>
  );
}
