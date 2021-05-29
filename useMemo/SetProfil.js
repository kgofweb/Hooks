import React, { useState, useEffect, useMemo } from 'react';
import axios from 'axios';
import Profil from './Profil';

const SetProfil = () => {
  const [count, setCount] = useState(1);
  const [user, setUser] = useState({});
  const [dark, setDark] = useState(false);

  // Seulement au chargement du DOM
  useEffect(() => {
    // Pour aller chercher les données
    axios.get(`https://jsonplaceholder.typicode.com/users/${count}`)
    .then(response => {
      setUser(response.data);
      // console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })
    // [count] Recharge toi slmt quand je modifie le count
  }, [count]);

  // ===== Gerer l'erreur ===== //
  // const isOverTen = () => {
  //   console.log('Je suis dans isOverTen');
  //   return count > 10;
  // }

  const memorizeValue = useMemo(() => {
    console.log('Je suis dans isOverTen');
    return count > 10;
    // Si le count change
  }, [count]);

  // ===== Dark mode func ===== //
  const darkMode = () => {
    setDark(!dark);

    if (!dark) {
      document.body.classList.add('bg-secondary');
    } else {
      document.body.classList.remove('bg-secondary');
    }
  }

  const btnTheme = dark ? 'btn-light' : 'btn-dark';
  const btnText = dark ? 'Light' : 'Dark';

  return (
    <div>
      <p className="text-center h4 mb-5">useMemo()</p>

      { memorizeValue && <div className="alert alert-danger">Not User !!!</div> }

      <div className="d-flex justify-content-between align-items-center">
        <button 
          className="btn btn-primary mb-3"
          onClick={() => setCount(count + 1)}>Increment {count}
        </button>
          
        <button
          className={`btn ${btnTheme} mb-3`}
          onClick={darkMode}
        >{ btnText }
        </button>
      </div>

      <Profil count={count} profil={user} />
    </div>
  )
}

export default React.memo(SetProfil);
