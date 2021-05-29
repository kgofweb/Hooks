// import { useState, useEffect } from 'react';
import { useEffect } from 'react';
import useIncrement from './useIncrement';

const useAutoInc = (initValue = 0, step = 1) => {
  // const [count, setInc] = useState(initValue);
  
  // useEffect(() => {
  //   // Timer au montage
  //   const timer = window.setInterval(() => {
  //     setInc(count + step);
  //   }, 1000);

  //   // Netoyer le timer
  //   return () => {
  //     clearInterval(timer);
  //   }
  // });

  // return count;

  // Appel a un autre Hook personnalisé
  const [count, increment] = useIncrement(initValue, step);

  useEffect(() => {
    const timer = window.setInterval(() => {
      increment();
    }, 1000);

    return () => {
      clearInterval(timer);
    }
  });

  return count;
}

export default useAutoInc;