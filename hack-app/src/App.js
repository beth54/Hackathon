
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <div className="fakeimg" style={{height:"200px"}}><img src={require('./picture.jpg')} alt='cat' style={{height: '100%', width: '100%', objectFit: 'contain'}} /></div><br></br>
        <p>
          peepee poo poo
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          infinite suffering
        </a>
      </header>
    </div>
  );
}

export default App;
