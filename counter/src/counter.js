import React from 'react';
import logo from './logo.svg';
import './counter.css';
class Counter extends React.Component{
    state={//Create variable
        count:0
      }
      increment=()=>{
        this.setState({ //Changing variable
          count:this.state.count+1
    
        })
      }
      decrement=()=>{
        this.setState({
          count:this.state.count-1
        })
      }
      render(){
        return(
        <div className="App">
          <header className="App-header">
       
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Count:{this.state.count}
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
            <button className="btn" onClick={this.increment}>
              Increment
            </button>
            <button className="btn" onClick={this.decrement}>
              Decrement
            </button>
          </header>
        </div>
      );
    }
    
    }
export default Counter;