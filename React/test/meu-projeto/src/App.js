import './App.css';
import HelloWorld from './components/HelloWorld';
import Frase from './components/Frase';

function App() {

  const url = 'https://picsum.photos/200'
  return (
    <div className='App'>
      <h1>Aleterando o JSX</h1>
      <p>Testando o primeiro desenvolvimento</p>
      <img src={url} alt= "Minha Imagem" />
      <HelloWorld/>
      <Frase/>
    </div>
  )
}
export default App;
