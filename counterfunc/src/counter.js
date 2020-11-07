import React from  'react';


function Counter(){ //fuctional based
      const[count,setCount]=React.useState(0); //0 is the default value intilizaion
      const[title,setTitle]=React.useState("Counter");
      const increment=()=>{
          setCount(count+1);
      }
      const decrement=()=>{
          setCount(count-1);
      }
    return (
    <div>
        {title}<br/>
        Counter: {count}
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
    </div>);
    
}
export default Counter;