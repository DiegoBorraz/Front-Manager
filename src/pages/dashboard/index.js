import React from "react";

import { actions } from "../../redux/actions";
import { useDispatch, useSelector } from "react-redux";

export default function Dashboard() {
  const dispatch = useDispatch();
  const counter = useSelector(state => state);
  return (
    <div>
      <p>Clique: {counter} times!</p>
      <button onClick={() => dispatch(actions.incrementAsync)}>Incremento asincrono</button>
      <hr></hr>
      DASHBOARD
    </div>
  );
}
