import './App.css';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Hero from './Hero.jsx';
import Squads from './Squad.jsx';
import Fixtures from './Fixtures.jsx';

function Legend({ things }) {
  return (
    <div className="legend-container">
      <img
        className="Legend"
        src={getUrl(things)}
        alt={getAltText(things)}
        width={500}
        height={300}
      />
      <h3>{getAltText(things)}</h3>
    </div>
  );
}

function getAltText(things) {
  return `${things.name} #${things.jerseyNumber}`;
}

function getUrl(things) {
  return `/legends/${things.id}.jpg`;
}

export default function Gallery() {
  return (
    <>
      <Header />
      <Hero
        title="Welcome to Manchester United FC"
        subtitle="The Past & Present Of The Theatre of Dreams"
        buttonText="Learn More"
        buttonLink="#legends"
      />

      <div className='mainSquad'>
        <h1 id='players'>Current Squad</h1>
        <Squads />
      </div>
       
        <div className='mainLegends'>
          <h1 id='legends'>Legends</h1>
       
        
        <div className="gallery-grid">
          <Legend things={{ name: 'Sir Alex Ferguson', jerseyNumber: 'The Boss', id: 'siralex' }} />
          <Legend things={{ name: 'Roy Keane', jerseyNumber: '16', id: 'keane' }} />
          <Legend things={{ name: 'Gary Neville', jerseyNumber: '2', id: 'neville' }} />
          <Legend things={{ name: 'Eric Cantona', jerseyNumber: '7', id: 'cantona' }} />
          <Legend things={{ name: 'Peter Schmeichel', jerseyNumber: '1', id: 'schemeical' }} />
          <Legend things={{ name: 'Andy Cole', jerseyNumber: '12', id: 'cole' }} />
          <Legend things={{ name: 'David Beckham', jerseyNumber: '7', id: 'beckham' }} />
          <Legend things={{ name: 'Ryan Giggs', jerseyNumber: '11', id: 'giggs' }} />
          <Legend things={{ name: 'Ole Gunnar Solskjaer', jerseyNumber: '21', id: 'ole' }} />
          <Legend things={{ name: 'Ruud Van Nistelrooy', jerseyNumber: '9', id: 'ruud' }} />
          <Legend things={{ name: 'Paul Scholes', jerseyNumber: '18', id: 'scholes' }} />
          <Legend things={{ name: 'Patrice Evra', jerseyNumber: '3', id: 'evra' }} />
          <Legend things={{ name: 'Wayne Rooney', jerseyNumber: '10', id: 'Rooney' }} />
          <Legend things={{ name: 'Rio Ferdinand', jerseyNumber: '5', id: 'rio' }} />
          <Legend things={{ name: 'Edwin Van Der Sar', jerseyNumber: '32', id: 'edwin' }} />
          <Legend things={{ name: 'Nemanja Vidic', jerseyNumber: '4', id: 'vidic' }} />
          <Legend things={{ name: 'David De Gea', jerseyNumber: '1', id: 'DDG' }} />
          <Legend things={{ name: 'Cristiano Ronaldo', jerseyNumber: '7', id: 'cr7' }} />
        </div>
        </div>
        <div className='mainFixtures'>
        <h1 id='fixtures'><img src="/epl.png" alt="hublot watch" />Fixtures</h1>
                <Fixtures />
        </div>
        


      <Footer />
    </>
  );
}

