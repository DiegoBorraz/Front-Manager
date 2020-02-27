import { useQuery } from '@apollo/react-hooks';
import { useMutation } from '@apollo/react-hooks';
import { gql } from 'apollo-boost';

const LOGIN = gql`
  mutation(
  $email: String!
  $password: String!
  ) {
  login(
    email: $email,
    password: $password
  ) 
  
}
`;

const login = ({ params }) => {

}