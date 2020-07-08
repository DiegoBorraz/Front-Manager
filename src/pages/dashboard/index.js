import React, { useState, useEffect } from "react";
import { logout } from "../../services/Auth";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { encryptJSON, decryptJSON } from "../../services/hash";

const teste = {
  nome: "Diego",
  sobrenome: "Borraz de Avila"
};
export default function Dashboard() {
  const [state, setState] = useState("");
  const {
    UserReducer: { userLoged, permission }
  } = useSelector(state => state);
  const batata = useSelector(state => state);
  let history = useHistory();

  console.log("STATE === ", batata);
  // console.log(userLoged);
  console.log(permission);
  return (
    <div>
      <h1>OLA!</h1>
      <p>Bem vindo: {userLoged.name} times!</p>
      <br />
      <p>email: {userLoged.email}</p> *
      <button
        onClick={() => {
          logout();
          history.push("/login");
        }}
      >
        Logout
      </button>
      <hr></hr>
      DASHBOARD
    </div>
  );
}
