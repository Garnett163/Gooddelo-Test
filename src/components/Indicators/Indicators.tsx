import './Indicators.css';
import { useAppSelector } from '../../hooks/redux';

function Indicators() {
  const data = useAppSelector(state => state.duchnila);
  const indicatorsClass = `indicators ${data?.status ? 'indicators_active' : ''}`;
  return (
    <div className={indicatorsClass}>
      <span className="indicators__degrees">{data?.temp} ℃</span>
      <p className="indicators__degrees-text">Температура</p>
      <div className="indicators__box-pt">
        <span className="indicators__ppm">{data?.co2} ppm</span>
        <p className="indicators__co2">CO2</p>
      </div>
    </div>
  );
}

export default Indicators;
