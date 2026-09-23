type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  action?: string;
};

export function PageHeader({ eyebrow, title, description, action }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div className="page-heading">
        <div className="heading-line">
          <h1>{title}</h1>
          {eyebrow ? <span className="context-pill">{eyebrow}</span> : null}
        </div>
        <p className="page-description">{description}</p>
      </div>
      {action ? <button className="primary-button">{action}</button> : null}
    </header>
  );
}
