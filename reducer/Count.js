import { useReducer } from 'react';

// Init state
const initialState = 0;

// return new state
const reducer = (state, action) => {
  switch(action) {
    case 'Increment':
      return state + 1;
    case 'Decrement':
      return state - 1;
    case 'Reset':
      return initialState;
    default:
      return state;
  }
}

const Count = () => {
  const [count, dispatch] = useReducer(reducer, initialState);
  
  return (
    <>
      <div className="col-6">
        <h3>{ count }</h3>
        <button 
          className="btn btn-success"
          onClick={() => dispatch('Increment')}
        >
          Add +1
        </button>

        <button 
          className="btn btn-secondary m-3"
          onClick={() => dispatch('Decrement')}
        >
        Min -1
        </button>

        <button 
          className="btn btn-danger"
          onClick={() => dispatch('Reset')}
        >
          Reset
        </button>
      </div>
    </>
  )
}

export default Count;







// import { useState } from 'react';

// const Count = () => {
//   const [count, setCount] = useState(0);

//   return (
//     <>
//       <h1> {count} </h1>
//       <button
//         className="btn btn-secondary"
//         onClick={() => setCount(count + 1)}
//       >
//         +1
//       </button>
//       <button
//         className="btn btn-secondary m-3"
//         onClick={() => setCount(count - 1)}
//       >
//         -1
//       </button>
//       <button
//         className="btn btn-danger m-3"
//         onClick={() => setCount(0)}
//       >
//         Reset
//       </button>
//     </>
//   )
// }

// export default Count;