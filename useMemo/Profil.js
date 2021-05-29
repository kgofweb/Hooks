import React from 'react';

const Profil = ({ count, profil }) => {
  console.log('Je suis dans Profil');

  return (
    <div>
      <ul className="list-group mt-5">
        <li className="list-group-item"><p className="h2">User ID: {count} </p></li>
        <li className="list-group-item"><b>Name:</b> {profil.name} </li>
        <li className="list-group-item"><b>Pseudo:</b> {profil.username} </li>
        <li className="list-group-item"><b>Email:</b> {profil.email} </li>
      </ul>
    </div>
  )
}

export default React.memo(Profil);