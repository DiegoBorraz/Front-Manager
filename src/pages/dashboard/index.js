import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Dashboard() {
  const user = useSelector(state => state.user);
  console.log("USER ==== ", user);

  return (
    <div>
      {user.name} - {user.email}
      <hr></hr>
      DASHBOARD
    </div>
  );
}
