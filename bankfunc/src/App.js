import React from 'react';
import './App.css';
import Login from './login';
import Home from './home';
import{
  BrowserRouter,
  Switch,
  Link,
  Route
}from 'react-router-dom';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <div>
        <Link to="/login">Login</Link>
        <Link to="/home">Home</Link>
      </div>
      <Switch>
        <Route path="/home">
          <Home/> 

        </Route>
        <Route path="/login">
          <Login/>
        </Route>
      </Switch>
      </BrowserRouter>
 
    </div>
  );
}
export default App;
