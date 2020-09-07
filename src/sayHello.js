import React from 'react'

function sayHello() {
    const printHello=()=>{
        console.log("Hello From Say HEllo");
        
    }
    return (
        <div>
            <button onClick={printHello}>Hello</button>
        </div>
    )
}

export default sayHello;
