import React, { useState } from 'react';
import Childfunc from './childfunc';
function Parentfunc(){
    const [title,setTitle]=React.useState("parent 1");
    return(
        <div>
            <h2>Parent</h2>
            <Childfunc title={title}/>
        </div>
    );
}
export default Parentfunc;