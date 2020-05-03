import gql from "graphql-tag";

export const ADD_USER = gql`
  mutation addUser($name: String!, $email: String!, $password: String!, $date_of_birth: Date!) {
    addUser(name: $name, email: $email, password: $password, date_of_birth: $date_of_birth) {
      name
      email
      password
      date_of_birth
      id
    }
  }
`;

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password)
  }
`;

export const GET_USER = gql`
  query User($id: Int!) {
    getUser(id: $id) {
      id
      name
      password
      email
      date_of_birth
    }
  }
`;
