import './App.css';
import {
  BrowserRouter,
  Link,
  Switch,
  Route
} from 'react-router-dom';
import Home from './home';
import Register from './register';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div>
          <Link to="/home">Home</Link>
          <Link to="/register">Register</Link>
        </div>
        <div>
          <Switch>
            <Route path="/home" exact={true}>
              <Home />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
          </Switch>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
