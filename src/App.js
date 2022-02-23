import { Carousel } from 'react-responsive-carousel';
import './App.css';
import { Accordion } from './components/accordion/Accordion';
import './components/carousel/carousel.css';

function App() {
  const accordeonData = [
    {
      id: 1,
      title: 'Título 1',
      description: 'Descipción del item 1',
      photo: 'imgs/cerveza.jpg',
    },
    {
      id: 2,
      title: 'Título 2',
      description: 'Descipción del item 2',
      photo: 'imgs/senderismo2.jpg',
    },
    {
      id: 3,
      title: 'Título 3',
      description: 'Descipción del item 3',
      photo: 'imgs/snorkel1.jpg',
    },
    {
      id: 4,
      title: 'Título 4',
      description: 'Descipción del item 4',
      photo: 'imgs/NA.png',
    },
  ];

  return (
    <div className="App">
      <h2>Un acordeon simple</h2>
      {accordeonData.map((item) => (
        <Accordion
          key={item.id}
          title={item.title}
          content={item.description}
        />
      ))}
      <br />
      <hr />
      <br />
      <div>
        <h2>Un carousel simple</h2>
        <Carousel dynamicHeight={true} showIndicators={false}>
          {accordeonData.map((s, index) => (
            <div key={index} className="slider-container">
              {s.photo ? (
                <img src={`${s.photo}`} alt={s.title} className="exp-picture" />
              ) : (
                <img
                  src={'imgs/NA.png'}
                  alt={s.title}
                  className="exp-picture"
                />
              )}
              <span className="legend" id="laetiqueta">
                <p id="title-carousel-card"> {s.title}</p>
                <p id="price-carousel-card">{s.description}</p>
              </span>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default App;
