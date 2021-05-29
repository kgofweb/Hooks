import { useReducer } from 'react';

// Init state
const initialState = {
  countOne: 0,
  countTwo: 0
};

// return new state
const reducer = (state, action) => {
  switch(action.type) {
    case 'increment':
      return {
        ...state, countOne: state.countOne + action.value,
      };
    case 'decrement':
      return { ...state, countOne: state.countOne - action.value };
    case 'incrementTwo':
      return {
        ...state, countTwo: state.countTwo + action.value,
      };
    case 'decrementTwo':
      return { ...state, countTwo: state.countTwo - action.value };
    
    case 'reset':
      return initialState;
    default:
      return state;
  }
}

const Counts = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      <div className="col-6">
        <h3>{ count.countOne }</h3>
        <button 
          className="btn btn-success"
          onClick={() => dispatch({ type: 'increment', value: 1 })}
        >
          Add +1
        </button>
        <button 
          className="btn btn-secondary m-3"
          onClick={() => dispatch({ type: 'decrement', value: 1 })}
        >
          Min -1
        </button>
      </div>

      {/* ========================== */}

      <div className="col-6">
        <h3>{ count.countTwo }</h3>
        <button 
          className="btn btn-success"
          onClick={() => dispatch({ type: 'incrementTwo', value: 2 })}
        >
          Add +1
        </button>
        <button 
          className="btn btn-secondary m-3"
          onClick={() => dispatch({ type: 'decrementTwo', value: 2 })}
        >
        Min -1
        </button>
      </div>

      <div>
        <button 
          className="btn btn-danger"
          onClick={() => dispatch({ type: 'reset'})}
        >
          Reset
        </button>
      </div>
    </>
  )
}

export default Counts;