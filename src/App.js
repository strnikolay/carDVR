import './App.css';
import "./reset.css"
import First from './components/first';
import Second from './components/second';
import Third from './components/third';
import Fourth from './components/fourth';
import Menu from './components/menu';

function App() {


  return (
    <div className="App">
      {/*<header className="App-header">*/}
      <Menu />

      <div id="fullpage">
        <First />
        <Second />
        <Third />
        <Fourth />
      </div>
       
      {/*</header>*/}
    </div>
  );
}

export default App;
