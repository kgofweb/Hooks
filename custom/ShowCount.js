import Counter from './Counter';
import useToggle from './useToggle';

const ShowCount = () => {
  const [show, toggle] = useToggle(false);

  // Pour toggle le nom du button
  const toggleName = show ? ('Masquer') : ('Afficher');

  return (
    <div>
      { show && <Counter /> }

      <button 
        className="btn btn-success mt-4"
        onClick={toggle}
      >
        { toggleName }
      </button>
    </div>
  )
}

export default ShowCount;