import { PageHeader } from "@/components/page-header";

const budgets = [
  ["Social", 8000, 5850],
  ["Recruitment", 5000, 4100],
  ["Brotherhood", 4000, 3200],
  ["Philanthropy", 3000, 1900],
  ["Formal", 10000, 7500],
  ["Operations", 4000, 2200],
] as const;

export default function BudgetPage() {
  return (
    <div className="page">
      <PageHeader
        eyebrow="Fall 2026"
        title="Budget vs. actual"
        description="See how much each category has spent and what remains available."
        action="Edit budget"
      />

      <section className="panel">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Category</th><th>Budget</th><th>Spent</th><th>Remaining</th><th>Usage</th></tr></thead>
            <tbody>
              {budgets.map(([name, budget, spent]) => {
                const remaining = budget - spent;
                const percent = Math.round((spent / budget) * 100);
                return (
                  <tr key={name}>
                    <td className="row-title">{name}</td>
                    <td>${budget.toLocaleString()}</td>
                    <td>${spent.toLocaleString()}</td>
                    <td>${remaining.toLocaleString()}</td>
                    <td className="usage-cell">
                      <div className="mini-progress"><span style={{ width: `${percent}%` }} /></div>
                      <span className="muted">{percent}%</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
