import React from 'react'
import './CounterPanal.css'
import { connect } from 'react-redux'

function CounterPanal(props) {
    return (
        <div>
            <button 
            onClick={props.onIncrementCounter}
            className="button-codecamp">INCREASE</button>
            <button 
            onClick={props.onDecreaseCounter} 
            className="button-codecamp">DECREASE</button>

            <button className="button-codecamp">ADD</button>
            <button 
            onClick={props.onSubtractCounter}
            className="button-codecamp">SUBTRACT</button>
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: () => dispatch({ type: "INCREMENT"}),
        onDecreaseCounter: () => dispatch({ type: "DECREASE"}),
        onSubtractCounter: () => dispatch({ type: "SUBTRACT"})
    }
}


export default connect(null, mapDispatchToProps)(CounterPanal);
