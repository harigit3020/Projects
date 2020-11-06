
import './App.css';
import React from 'react';
import Counter from './counter';
import Header from './header';
class App extends React.Component{
  render(){
    return(
    <div className="App">
      <header className="App-header">
       <Header/>
       <Counter/>
      </header>
    </div>
  );
}

}

export default App;
