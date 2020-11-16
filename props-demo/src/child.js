import React from 'react';

class Child extends React.Component{
    render(){
        return(
            <div>
                <h2>Child</h2>
        <h3>{this.props.title}</h3> 
            </div>
        );
    }
}
export default Child;