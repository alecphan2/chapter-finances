import { PageHeader } from "@/components/page-header";

const members = [
  ["John Smith", "$850", "$850", "$0", "Paid"],
  ["Mike Johnson", "$850", "$425", "$425", "Partial"],
  ["Ryan Lee", "$850", "$0", "$850", "Unpaid"],
  ["Robert Brown", "$850", "$850", "$0", "Paid"],
];

export default function MembersPage() {
  return (
    <div className="page">
      <PageHeader
        eyebrow="72 active members"
        title="Members & dues"
        description="Track assessed dues, payments received, and outstanding member balances."
        action="Add member"
      />

      <section className="metric-grid three">
        <article className="metric-card featured-card">
          <p className="metric-label">Collected</p>
          <p className="metric-value">$52,400</p>
          <p className="metric-note positive">85% collection rate</p>
        </article>
        <article className="metric-card">
          <p className="metric-label">Outstanding</p>
          <p className="metric-value">$8,800</p>
          <p className="metric-note">18 member balances</p>
        </article>
        <article className="metric-card">
          <p className="metric-label">Fully paid</p>
          <p className="metric-value">54</p>
          <p className="metric-note">of 72 active members</p>
        </article>
      </section>

      <section className="panel">
        <div className="table-wrap">
          <table>
            <thead><tr><th>Member</th><th>Assessed</th><th>Paid</th><th>Balance</th><th>Status</th></tr></thead>
            <tbody>
              {members.map(([name, assessed, paid, balance, status]) => (
                <tr key={name}>
                  <td className="row-title">{name}</td>
                  <td>{assessed}</td>
                  <td>{paid}</td>
                  <td>{balance}</td>
                  <td>
                    <span className={`status ${status === "Paid" ? "status-success" : status === "Partial" ? "status-warning" : "status-danger"}`}>
                      {status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
