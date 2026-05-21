import './VehicleCard.css';

function VehicleCard({ car, onInterest }) {
  const isReserved = car.status === 'Reservado';

  return (
    <article className="vehicle-card">
      <div className="vehicle-card__media">
        <img src={car.image} alt={`${car.name} em ambiente premium`} loading="lazy" />
        <span className={`vehicle-card__status ${isReserved ? 'vehicle-card__status--reserved' : ''}`}>
          {car.status}
        </span>
      </div>

      <div className="vehicle-card__body">
        <div>
          <p className="vehicle-card__brand">{car.brand}</p>
          <h3>{car.name}</h3>
        </div>

        <dl className="vehicle-card__specs">
          <div>
            <dt>Ano</dt>
            <dd>{car.year}</dd>
          </div>
          <div>
            <dt>Motor</dt>
            <dd>{car.engine}</dd>
          </div>
          <div>
            <dt>Potência</dt>
            <dd>{car.power}</dd>
          </div>
        </dl>

        <div className="vehicle-card__footer">
          <strong>{car.price}</strong>
          <button
            className="button button--small"
            type="button"
            disabled={isReserved}
            onClick={() => onInterest(car.name)}
            aria-label={`Registrar interesse no veículo ${car.name}`}
          >
            {isReserved ? 'Reservado' : 'Tenho interesse'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default VehicleCard;
