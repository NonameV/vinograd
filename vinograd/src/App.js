//import Header from './components/Header/Header'
import {Route} from 'react-router-dom'
import Home from './components/Home/Home'
import Hero from './components/Hero/Hero'
import './App.css';

function App() {
  return (
    <div className="App">
        <Hero />
        <Route exact path='/' render={() => <Home/>}/>
    </div>
  );
}

export default App;
