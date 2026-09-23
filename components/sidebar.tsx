"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { href: "/", label: "Overview" },
  { href: "/transactions", label: "Transactions" },
  { href: "/budget", label: "Budget" },
  { href: "/members", label: "Members" },
  { href: "/balance-sheet", label: "Balance sheet" },
];

function isActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark" aria-hidden="true">
          <span />
          <span />
          <span />
          <span />
        </div>
        <div>
          <p className="brand-title">Chapter Finance</p>
          <p className="brand-subtitle">Treasury workspace</p>
        </div>
      </div>

      <div className="workspace-switcher">
        <div className="chapter-avatar">GB</div>
        <div className="workspace-copy">
          <span>Gamma Beta</span>
          <small>Fall 2026</small>
        </div>
        <span className="chevron">⌄</span>
      </div>

      <p className="nav-label">Workspace</p>
      <nav className="nav-list" aria-label="Primary navigation">
        {navigation.map((item) => {
          const active = isActive(pathname, item.href);
          return (
            <Link
              className={`nav-link ${active ? "nav-link-active" : ""}`}
              href={item.href}
              key={item.href}
            >
              <span className="nav-indicator" />
              <span>{item.label}</span>
            </Link>
          );
        })}
      </nav>

      <div className="sidebar-note">
        <p>Demo workspace</p>
        <span>Connect Supabase next to replace sample data.</span>
      </div>

      <div className="sidebar-footer">
        <div className="user-avatar">AP</div>
        <div className="workspace-copy">
          <span>Treasurer</span>
          <small>Admin access</small>
        </div>
      </div>
    </aside>
  );
}
