import { PageHeader } from "@/components/page-header";

const transactions = [
  ["Sep 23", "HEB", "Social", "Checking", "-$286.42", "expense"],
  ["Sep 23", "Member dues", "Dues", "Venmo import", "+$850.00", "income"],
  ["Sep 22", "Barge rental", "Brotherhood", "Checking", "-$1,200.00", "expense"],
  ["Sep 21", "Member dues", "Dues", "Cash App import", "+$425.00", "income"],
  ["Sep 19", "Printing", "Recruitment", "Checking", "-$132.18", "expense"],
];

export default function TransactionsPage() {
  return (
    <div className="page">
      <PageHeader
        title="Transactions"
        description="The chapter ledger. Every imported or manual transaction will flow through here."
        action="Add transaction"
      />

      <div className="toolbar">
        <button className="secondary-button">All sources</button>
        <button className="secondary-button">All categories</button>
        <button className="secondary-button">Import CSV</button>
      </div>

      <section className="panel">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Date</th><th>Description</th><th>Category</th><th>Source</th><th className="amount-cell">Amount</th></tr></thead>
            <tbody>
              {transactions.map(([date, description, category, source, amount, tone]) => (
                <tr key={`${date}-${description}-${amount}`}>
                  <td className="muted">{date}</td>
                  <td className="row-title">{description}</td>
                  <td><span className="category-chip">{category}</span></td>
                  <td className="muted">{source}</td>
                  <td className={`amount-cell ${tone}`}>{amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
