import React, { useState } from "react";
import Routes from "./routes";
//import { useQuery } from '@apollo/react-hooks';
//import { useApolloClient, useMutation } from '@apollo/react-hooks';

//import { gql } from 'apollo-boost';

const App = () => <Routes />;

// const EXCHANGE_RATES = gql`
//   query {
//   fetchUser(id: 3){
//     id,
//     name,
//     password,
//     email,
//     dateOfBirth
//   }
// }
// `;

// const LOGIN = gql`
//     mutation {
//   login(
//     email: "diego@gmail.com",
//     password: "123456"
//   ) {
//     user{
//     id name email dateOfBirth created_at updated_at
//     } token
//   }
// }
// `;

// const App = () => {
//     let input;
//     const [login, result] = useMutation(LOGIN)
//     console.log(result)
//     //   const { loading, error, data } = useQuery(EXCHANGE_RATES);
//     //const { loading, error, data } = useMutation(LOGIN);
//     //if (loading) return null;
//     //if (error) return `Error! ${error}`;

//     //console.log(error)
//     //console.log(data.fetchUser)
//     //console.log("TESTE", data)
//     return (

//         <div>
//             {/* <h1>{data.fetchUser.id}</h1>
//       <h1>{data.fetchUser.name}</h1>
//       <h1>{data.fetchUser.password}</h1>
//       <h1>{data.fetchUser.email}</h1>
//       <h1>{data.fetchUser.dateOfBirth}</h1> */}

//             <button onClick={() => login({ variables: { email: "diego@gmail.com", password: "123456" } })}>Add Todo</button>

//         </div>
//     )

// }
export default App;
