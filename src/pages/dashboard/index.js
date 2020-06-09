import React from "react";
import { useSelector } from "react-redux";

export default function Dashboard() {
  const user = useSelector(state => state.userLogged.user);
  const teste = useSelector(state => state);
  console.log("STATE === ", teste);
  console.log("USER ==== ", user);

  return (
    <div>
      {user.name} - {user.email}
      <hr></hr>
      DASHBOARD
    </div>
  );
}
