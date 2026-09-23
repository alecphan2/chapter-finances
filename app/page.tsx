import Link from "next/link";
import { PageHeader } from "@/components/page-header";

const recentTransactions = [
  { date: "Sep 23", name: "HEB", category: "Social", amount: "-$286.42", tone: "expense" },
  { date: "Sep 23", name: "Member dues", category: "Dues", amount: "+$850.00", tone: "income" },
  { date: "Sep 22", name: "Barge rental", category: "Brotherhood", amount: "-$1,200.00", tone: "expense" },
  { date: "Sep 21", name: "Member dues", category: "Dues", amount: "+$425.00", tone: "income" },
];

const categories = [
  { name: "Social", spent: 5850, budget: 8000 },
  { name: "Recruitment", spent: 4100, budget: 5000 },
  { name: "Brotherhood", spent: 3200, budget: 4000 },
  { name: "Philanthropy", spent: 1900, budget: 3000 },
];

export default function DashboardPage() {
  return (
    <div className="page">
      <PageHeader
        eyebrow="Fall 2026"
        title="Financial overview"
        description="A single place to track chapter cash, budgets, dues, and transactions."
        action="Add transaction"
      />

      <div className="demo-banner">
        Demo data is shown below. We will connect these cards to the database next.
      </div>

      <section className="metric-grid" aria-label="Financial summary">
        <article className="metric-card featured-card">
          <p className="metric-label">Cash available</p>
          <p className="metric-value">$16,270.00</p>
          <p className="metric-note positive">+$2,450 this month</p>
        </article>
        <article className="metric-card">
          <p className="metric-label">Dues collected</p>
          <p className="metric-value">85%</p>
          <p className="metric-note">$52,400 of $61,200</p>
        </article>
        <article className="metric-card">
          <p className="metric-label">Outstanding dues</p>
          <p className="metric-value">$8,800.00</p>
          <p className="metric-note">18 member balances</p>
        </article>
        <article className="metric-card">
          <p className="metric-label">Budget remaining</p>
          <p className="metric-value">$13,800.00</p>
          <p className="metric-note">43% of semester budget</p>
        </article>
      </section>

      <section className="dashboard-grid">
        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="section-kicker">Budget</p>
              <h2>Spending by category</h2>
            </div>
            <span className="pill">57% used</span>
          </div>

          <div className="budget-list">
            {categories.map((category) => {
              const percent = Math.round((category.spent / category.budget) * 100);
              return (
                <div className="budget-item" key={category.name}>
                  <div className="budget-line">
                    <span>{category.name}</span>
                    <span className="muted">
                      ${category.spent.toLocaleString()} / ${category.budget.toLocaleString()}
                    </span>
                  </div>
                  <div className="progress-track" aria-label={`${category.name} budget used: ${percent}%`}>
                    <div className="progress-fill" style={{ width: `${percent}%` }} />
                  </div>
                </div>
              );
            })}
          </div>
        </article>

        <article className="panel">
          <div className="panel-header">
            <div>
              <p className="section-kicker">Attention</p>
              <h2>Upcoming</h2>
            </div>
          </div>
          <div className="upcoming-list">
            <div className="upcoming-row">
              <div>
                <p className="row-title">Venue payment</p>
                <p className="muted">Sep 28 · Social</p>
              </div>
              <strong>$1,200</strong>
            </div>
            <div className="upcoming-row">
              <div>
                <p className="row-title">Insurance</p>
                <p className="muted">Oct 1 · Operations</p>
              </div>
              <strong>$850</strong>
            </div>
            <div className="upcoming-row">
              <div>
                <p className="row-title">Member dues deadline</p>
                <p className="muted">Oct 15 · 18 outstanding</p>
              </div>
              <span className="status status-warning">Due soon</span>
            </div>
          </div>
        </article>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <p className="section-kicker">Ledger</p>
            <h2>Recent transactions</h2>
          </div>
          <Link className="text-link" href="/transactions">View all</Link>
        </div>

        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Description</th>
                <th>Category</th>
                <th className="amount-cell">Amount</th>
              </tr>
            </thead>
            <tbody>
              {recentTransactions.map((transaction) => (
                <tr key={`${transaction.date}-${transaction.name}-${transaction.amount}`}>
                  <td className="muted">{transaction.date}</td>
                  <td className="row-title">{transaction.name}</td>
                  <td><span className="category-chip">{transaction.category}</span></td>
                  <td className={`amount-cell ${transaction.tone}`}>{transaction.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
