import React from "react";
import { connect } from "react-redux";

function ResultList(props) {
  return (
    <div style={{ textAlign: "center" }}>
      <br></br>
      <button
        onClick={() => props.onAdd(props.ctrss55)}
        className="glow-on-hover"
      >
        Store current counter
      </button>
      <h1>These are results you saved.</h1>
      <ul
        style={{
          width: "123px",
          margin: "0 auto",
          fontSize: "23px",
          fontWeight: "bold",
          listStyleType: "square",
          color: "darkkhaki",
        }}
      >
        {props.rlss55.map(({ id, result }) => (
          <li style={{listStyle: "none",}}key={id}>
            <div style={{display:"flex", justifyContent:"between", width: "200px",}}>
              {result}
              <button onClick={() => props.onDelete(id)}>Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    rlss55: state.resultList,
    ctrss55: state.counter,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onAdd: (value) => dispatch({ type: "STORE_RESULT", counter: value }),
    onDelete: (id) => dispatch({ type: "DELETE_RESULT", id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ResultList);
