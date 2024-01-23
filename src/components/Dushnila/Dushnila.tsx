import './Dushnila.css';
import Logo from '../Logo/Logo';
import { useAppSelector } from '../../hooks/redux';

function Dushnila() {
  const data = useAppSelector(state => state.duchnila.status);
  const dushnilaClass = `dushnila ${data ? 'dushnila_active' : ''}`;
  return (
    <>
      <div className={dushnilaClass}>
        <h2 className="dushnila__title">{data ? 'Душнила не доволен вами' : 'Душнила доволен вами'}</h2>
        <p className="dushnila__text">{data ? 'CO2 превышает норму' : 'Все показатели в норме'}</p>
      </div>
      <div className="dushnila__box-flex">
        <div className="dushnila__history">
          <p className="dushnila__count">Дней без душноты 0</p>
          <button className="dushnila__btn-history">История</button>
        </div>
        <Logo />
      </div>
    </>
  );
}

export default Dushnila;
