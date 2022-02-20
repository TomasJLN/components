import './App.css';
import { Accordion } from './components/accordion/Accordion';

function App() {
  const accordeonData = [
    { id: 1, title: 'Título 1', description: 'Descipción del item 1' },
    { id: 2, title: 'Título 2', description: 'Descipción del item 2' },
    { id: 3, title: 'Título 3', description: 'Descipción del item 3' },
    { id: 4, title: 'Título 4', description: 'Descipción del item 4' },
  ];

  return (
    <div className="App">
      <h1>Un acordeon simple</h1>
      {accordeonData.map((item) => (
        <Accordion
          key={item.id}
          title={item.title}
          content={item.description}
        />
      ))}
    </div>
  );
}

export default App;
