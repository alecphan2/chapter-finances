import Link from "next/link";

const navigation = [
  { href: "/", label: "Dashboard", mark: "DB" },
  { href: "/balance-sheet", label: "Balance Sheet", mark: "BS" },
  { href: "/transactions", label: "Transactions", mark: "TX" },
  { href: "/budget", label: "Budget", mark: "BG" },
  { href: "/members", label: "Members & Dues", mark: "MD" },
];

export function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">CF</div>
        <div>
          <p className="brand-title">Chapter Finance</p>
          <p className="brand-subtitle">Board</p>
        </div>
      </div>

      <nav className="nav-list" aria-label="Primary navigation">
        {navigation.map((item) => (
          <Link className="nav-link" href={item.href} key={item.href}>
            <span className="nav-mark">{item.mark}</span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      <div className="sidebar-footer">
        <div className="chapter-avatar">GB</div>
        <div>
          <p className="chapter-name">Gamma Beta</p>
          <p className="muted">Fall 2026</p>
        </div>
      </div>
    </aside>
  );
}
