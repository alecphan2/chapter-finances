type PageHeaderProps = {
  eyebrow?: string;
  title: string;
  description: string;
  action?: string;
};

export function PageHeader({ eyebrow, title, description, action }: PageHeaderProps) {
  return (
    <header className="page-header">
      <div>
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        <p className="page-description">{description}</p>
      </div>
      {action ? <button className="primary-button">{action}</button> : null}
    </header>
  );
}
