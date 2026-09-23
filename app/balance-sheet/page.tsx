import { PageHeader } from "@/components/page-header";

const assets = [
  ["Chapter checking", "$18,420.00"],
  ["Savings", "$2,000.00"],
  ["Dues receivable", "$3,600.00"],
];

const liabilities = [
  ["Outstanding bills", "$2,150.00"],
  ["Reimbursements payable", "$420.00"],
];

export default function BalanceSheetPage() {
  return (
    <div className="page">
      <PageHeader
        eyebrow="As of Sep 23, 2026"
        title="Balance sheet"
        description="Track what the chapter owns, what it owes, and its resulting net assets."
      />
      <div className="demo-banner">Demo balances for layout purposes.</div>

      <section className="metric-grid three">
        <article className="metric-card">
          <p className="metric-label">Total assets</p>
          <p className="metric-value">$24,020.00</p>
        </article>
        <article className="metric-card">
          <p className="metric-label">Total liabilities</p>
          <p className="metric-value">$2,570.00</p>
        </article>
        <article className="metric-card featured-card">
          <p className="metric-label">Net assets</p>
          <p className="metric-value">$21,450.00</p>
        </article>
      </section>

      <section className="dashboard-grid">
        <article className="panel">
          <div className="panel-header"><div><p className="section-kicker">Assets</p><h2>What the chapter owns</h2></div></div>
          <div className="statement-list">
            {assets.map(([label, value]) => <div className="statement-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}
            <div className="statement-row total-row"><span>Total assets</span><strong>$24,020.00</strong></div>
          </div>
        </article>

        <article className="panel">
          <div className="panel-header"><div><p className="section-kicker">Liabilities</p><h2>What the chapter owes</h2></div></div>
          <div className="statement-list">
            {liabilities.map(([label, value]) => <div className="statement-row" key={label}><span>{label}</span><strong>{value}</strong></div>)}
            <div className="statement-row total-row"><span>Total liabilities</span><strong>$2,570.00</strong></div>
          </div>
        </article>
      </section>
    </div>
  );
}
