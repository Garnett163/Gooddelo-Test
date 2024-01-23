import './Home.css';
import Dushnila from '../Dushnila/Dushnila';
import Indicators from '../Indicators/Indicators';

function Home() {
  return (
    <section className="home">
      <h1 className="home__title">Душнила</h1>
      <div className="home__container">
        <div>
          <Dushnila />
        </div>
        <Indicators />
      </div>
    </section>
  );
}

export default Home;
