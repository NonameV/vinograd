//import Header from './components/Header/Header'
import {Route} from 'react-router-dom'
import Home from './components/Home/Home'
import './App.css';

function App() {
  return (
    <div className="App">
      {/* <Header /> */}
      <Route exact path='/' render={() => <Home/>}/>
    </div>
  );
}

export default App;
