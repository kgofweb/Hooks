import { useState } from 'react'

const useToggle = (initValue = false) => {
  const [show, setShow] = useState(initValue);

  const toggle = () => {
    // setShow nous retourne un callback
    setShow(!show);
  }

  return [show, toggle];
}

export default useToggle;