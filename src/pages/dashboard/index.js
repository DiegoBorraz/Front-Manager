import React from "react";

import { useSelector } from "react-redux";

export default function Dashboard() {
  const counter = useSelector(state => state);

  console.log(counter);
  return (
    <div>
      <p>Clique: {counter.user} times!</p>
      <br />
      <p>TESTE = {counter.permission}</p>
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
