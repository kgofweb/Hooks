// import useIncrement from './useIncrement';
import useAutoInc from './useAutoInc';

const Counter = () => {
  // const [count, increment] = useIncrement(10);
  const count = useAutoInc(0, 10);

  return (
    <div className="list-group-item">
      {/* <p> {count} </p> */}
      <p> {count} </p>

      <button
        className="btn btn-secondary"
        // onClick={increment}
      >
        Ajouter
      </button>
    </div>
  )
}

export default Counter;