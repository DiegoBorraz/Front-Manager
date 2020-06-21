import React from "react";

import { useSelector } from "react-redux";

export default function Dashboard() {
  const {
    userLoged: { user, permission }
  } = useSelector(state => state);

  console.log(user);
  console.log(permission);
  return (
    <div>
      <h1>OLA!</h1>
      <p>Bem vindo: {user.name} times!</p>
      <br />
      <p>email: {user.email}</p> *
      <button
        onClick={() => {
          // dispatch(actions.incrementAsync);
          // dispatch(actions.testeAsync);
        }}
      >
        Incremento asincrono
      </button>
      <hr></hr>
      DASHBOARD
    </div>
  );
}
