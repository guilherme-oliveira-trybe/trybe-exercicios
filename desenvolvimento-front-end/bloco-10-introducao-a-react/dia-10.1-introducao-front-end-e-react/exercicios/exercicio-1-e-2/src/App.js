import './App.css';

const tasks = ['Lavar Banheiro', 'Limpar a casa', 'Lavar Vasilhas', 'Jogar o Lixo Fora'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

function App() {
  return <ol>{tasks.map((value) => {return Task(value)})}</ol>;
}

export default App;
