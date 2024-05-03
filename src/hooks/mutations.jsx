import { gql, useMutation } from '@apollo/client';

export const LOGIN_MUTATION = gql`
  mutation Login($input: UsersPermissionsLoginInput!) {
    login(input: $input) {
      jwt
      user {
        id
        email
        confirmed
        blocked
        role {
          id
          name
          description
          type
        }
      }
    }
  }
`;  

export const REGISTER_EXTRA_MUTATION = gql`
mutation registerExtra($id: ID!, $data: UsersPermissionsUserInput!) {
  updateUsersPermissionsUser(id: $id, data: $data) {
    data {
      id
    }
  } 
}`;

export const REGISTER_MUTATION = gql`
mutation register($input: UsersPermissionsRegisterInput!) {
  register(input: $input) {
    user {
      id
    }
  } 
}`;