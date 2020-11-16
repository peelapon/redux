import React from 'react'
import CounterDisplay from '../../component/CounterDisplay/CounterDisplay'
import CounterPanal from '../../component/CounterPanal/CounterPanal.js'

function Counter() {
    return (
        <div className="App">
            <h1 style={{
                color: 'black', 
                margin: "30px", 
                fontWeight: "bold",
                }}>WELCOME TO MY WORLD</h1>
            <CounterDisplay />
            <CounterPanal />
            
        </div>
    )
}

export default Counter
