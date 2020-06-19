import React from "react";

import { actions } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Dashboard() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state);

  console.log(counter);
  return (
    <div>
      <p>Clique: {counter.contador} times!</p>
      <br />
      <p>TESTE = {counter.mensagem}</p>
      <button
        onClick={() => {
          dispatch(actions.incrementAsync);
          dispatch(actions.testeAsync);
        }}
      >
        Incremento asincrono
      </button>
      <hr></hr>
      DASHBOARD
    </div>
  );
}
