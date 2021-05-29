import { useState } from "react";

const useIncrement = (initValue = 0, step = 1) => {
  const [count, setCount] = useState(initValue);

  // La function qui permet d'incrémenter
  const increment = () => {
    setCount(count + step);
  }

  return [count, increment];
}

export default useIncrement;