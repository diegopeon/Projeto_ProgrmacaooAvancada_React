import './ProgressBar.css';

function ProgressBar({ value, label }) {
  const safeValue = Math.min(Math.max(value, 0), 100);

  return (
    <div className="progress" aria-label={label}>
      <div className="progress__header">
        <span>{label}</span>
        <strong>{safeValue}%</strong>
      </div>
      <div className="progress__track" role="progressbar" aria-valuenow={safeValue} aria-valuemin="0" aria-valuemax="100">
        <div className="progress__bar" style={{ width: `${safeValue}%` }} />
      </div>
      <ol className="progress__steps">
        <li>Curadoria</li>
        <li>Visita</li>
        <li>Documentação</li>
        <li>Proposta</li>
        <li>Entrega</li>
      </ol>
    </div>
  );
}

export default ProgressBar;
