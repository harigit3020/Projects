import React from 'react';
import Child from './child';

class Parent extends React.Component{
    state={
        title:"Parent 1"
    }
    render(){
        return(
            <div>
                <h2>Parent</h2>
                <Child title={this.state.title}/>
            </div>
        );
    }
}
export default Parent;