import './App.css';
import Home from './Components/Home';
import Register from './Components/Register';
import Header from './Components/Header';
import List from './Components/List';
import Add from './Components/Add';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
      <Header/>
          <Route path = "/" exact component={Home} />
          <Route path = "/register" exact component={Register}/>
          <Route path = "/list" exact component={List} />
          <Route path = "/add" exact component={Add} />
        </div>
    </Router>
  );
}

export default App;
