import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import Home from './page/Home'

function App() {
  return (
    <div className="app">
         <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

export default App;
