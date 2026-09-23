import Link from "next/link";
import { PageHeader } from "@/components/page-header";

const recentTransactions = [
  { date: "Sep 23", name: "HEB", detail: "Tailgate supplies", category: "Social", amount: "-$286.42", tone: "expense" },
  { date: "Sep 23", name: "John Smith", detail: "Fall 2026 dues", category: "Dues", amount: "+$850.00", tone: "income" },
  { date: "Sep 22", name: "Barge rental", detail: "Brotherhood event", category: "Brotherhood", amount: "-$1,200.00", tone: "expense" },
  { date: "Sep 21", name: "Mike Johnson", detail: "Fall 2026 dues", category: "Dues", amount: "+$425.00", tone: "income" },
];

const budgetItems = [
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
        title="Overview"
        description="A live view of chapter cash, spending, collections, and upcoming obligations."
        action="Add transaction"
      />

      <section className="metric-grid">
        <article className="metric-card metric-primary">
          <div className="metric-topline">
            <p className="metric-label">Available cash</p>
            <span className="metric-dot" />
          </div>
          <p className="metric-value">$16,270.00</p>
          <div className="metric-bottomline">
            <span className="trend-positive">+17.7%</span>
            <span className="metric-note">vs. last month</span>
          </div>
        </article>

        <article className="metric-card">
          <p className="metric-label">Dues collected</p>
          <p className="metric-value">85%</p>
          <div className="compact-progress"><span style={{ width: "85%" }} /></div>
          <p className="metric-note">$52.4k of $61.2k assessed</p>
        </article>

        <article className="metric-card">
          <p className="metric-label">Outstanding dues</p>
          <p className="metric-value">$8,800</p>
          <p className="metric-note">18 members have a balance</p>
        </article>

        <article className="metric-card">
          <p className="metric-label">Budget remaining</p>
          <p className="metric-value">$13,800</p>
          <p className="metric-note">43% of semester budget</p>
        </article>
      </section>

      <section className="overview-grid">
        <article className="panel cashflow-panel">
          <div className="panel-header">
            <div>
              <p className="section-kicker">Cash flow</p>
              <h2>Income and expenses</h2>
            </div>
            <button className="ghost-button">Last 6 months</button>
          </div>

          <div className="cashflow-summary">
            <div>
              <span className="legend-dot income-dot" />
              <p>Income</p>
              <strong>$24,500</strong>
            </div>
            <div>
              <span className="legend-dot expense-dot" />
              <p>Expenses</p>
              <strong>$18,200</strong>
            </div>
            <div>
              <span className="legend-dot net-dot" />
              <p>Net</p>
              <strong>+$6,300</strong>
            </div>
          </div>

          <div className="chart" aria-label="Demo six month cash flow chart">
            <div className="chart-gridline line-one" />
            <div className="chart-gridline line-two" />
            <div className="chart-gridline line-three" />
            <svg viewBox="0 0 720 210" role="img" aria-label="Cash flow trend">
              <defs>
                <linearGradient id="cashArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="currentColor" stopOpacity="0.18" />
                  <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path
                className="chart-area"
                d="M20 170 C95 155 115 94 170 111 C230 130 265 63 325 82 C390 103 410 47 480 67 C540 83 585 41 700 30 L700 210 L20 210 Z"
              />
              <path
                className="chart-line"
                d="M20 170 C95 155 115 94 170 111 C230 130 265 63 325 82 C390 103 410 47 480 67 C540 83 585 41 700 30"
              />
            </svg>
            <div className="chart-labels">
              <span>Apr</span><span>May</span><span>Jun</span><span>Jul</span><span>Aug</span><span>Sep</span>
            </div>
          </div>
        </article>

        <article className="panel budget-panel">
          <div className="panel-header">
            <div>
              <p className="section-kicker">Budget health</p>
              <h2>Category usage</h2>
            </div>
            <Link className="text-link" href="/budget">View budget</Link>
          </div>

          <div className="budget-list">
            {budgetItems.map((category) => {
              const percent = Math.round((category.spent / category.budget) * 100);
              return (
                <div className="budget-item" key={category.name}>
                  <div className="budget-line">
                    <div>
                      <span className="row-title">{category.name}</span>
                      <small>{percent}% used</small>
                    </div>
                    <span className="mono-value">${category.spent.toLocaleString()}</span>
                  </div>
                  <div className="progress-track">
                    <div className="progress-fill" style={{ width: `${percent}%` }} />
                  </div>
                </div>
              );
            })}
          </div>

          <div className="budget-total">
            <span>Semester spend</span>
            <strong>$18,200 <small>/ $32,000</small></strong>
          </div>
        </article>
      </section>

      <section className="bottom-grid">
        <article className="panel transaction-panel">
          <div className="panel-header">
            <div>
              <p className="section-kicker">Activity</p>
              <h2>Recent transactions</h2>
            </div>
            <Link className="text-link" href="/transactions">View all</Link>
          </div>

          <div className="transaction-list">
            {recentTransactions.map((transaction) => (
              <div className="transaction-row" key={`${transaction.date}-${transaction.name}-${transaction.amount}`}>
                <div className="transaction-icon">{transaction.name.slice(0, 1)}</div>
                <div className="transaction-copy">
                  <div>
                    <p className="row-title">{transaction.name}</p>
                    <span className="category-chip">{transaction.category}</span>
                  </div>
                  <p className="transaction-detail">{transaction.detail} · {transaction.date}</p>
                </div>
                <strong className={`transaction-amount ${transaction.tone}`}>{transaction.amount}</strong>
              </div>
            ))}
          </div>
        </article>

        <article className="panel attention-panel">
          <div className="panel-header">
            <div>
              <p className="section-kicker">Next up</p>
              <h2>Upcoming</h2>
            </div>
          </div>

          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date"><strong>28</strong><span>SEP</span></div>
              <div>
                <p className="row-title">Venue payment</p>
                <p className="transaction-detail">Social · $1,200</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date"><strong>01</strong><span>OCT</span></div>
              <div>
                <p className="row-title">Insurance</p>
                <p className="transaction-detail">Operations · $850</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date"><strong>15</strong><span>OCT</span></div>
              <div>
                <p className="row-title">Dues deadline</p>
                <p className="transaction-detail">18 outstanding balances</p>
              </div>
            </div>
          </div>
        </article>
      </section>
    </div>
  );
}
