import React from 'react'
import { connect } from 'react-redux'

function CounterDisplay(props) {

    return (
        <div style={{
            backgroundColor: "#e1e3f5",
            width: "400px",
            border: "1px solid blue",
            height: "250px",
            margin: "0 auto",
            borderRadius: "3px",
            display: "flex",
            justifyContent: "center",
            alignItems:"center",
            fontSize: "50px",
            color: "WHITE",
            

            
                    
        }}>
           
            <h1>{props.ctr}</h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        ctr: state.counter 
    }
}

export default connect(mapStateToProps)(CounterDisplay);
