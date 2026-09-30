export default function SectionHead({ title, lead }: { title: string; lead?: string }) {
  return (
    <div className="section-head">
      <h2 className="title-lg">{title}</h2>
      {lead && <p className="lead">{lead}</p>}
    </div>
  );
}
