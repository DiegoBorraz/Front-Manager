import React from "react";
import { logout } from "../../services/Auth";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

export default function Dashboard() {
  let history = useHistory();
  const {
    UserReducer: { userLoged, permission }
  } = useSelector(state => state);

  console.log(userLoged);
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
