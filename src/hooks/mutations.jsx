import { gql } from '@apollo/client';

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


const REGISTER_MUTATION = gql`
mutation register($username: String!, $email: String!, $password: String!) {
  register(input: { username: $username, email: $email, password: $password }) {
    jwt
    user {
      id
      username
      email
      role {
        name
      }
    }
  }
}`;

export const createUser = async (username, email, password) => {
  const { data } = await client.mutate({
    mutation: REGISTER_MUTATION, // Assuming you have REGISTER_MUTATION defined
    variables: {
      username,
      email,
      password,
    },
  });
  // Handle response data and errors
};

