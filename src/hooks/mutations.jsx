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

export const createUser = async (username, email, password) => {
  const emailParts = email.split('.');
  const firstName = emailParts[0];
  const lastName = emailParts.slice(1, -1).join(' '); // Join middle and last name
  const isTeacher = !email.includes('@edu'); // True if not edu email

  var { loading, error, data } = await useMutation({
    mutation: REGISTER_MUTATION,
    variables: {
      username,
      email,
      password,
    },
  });
  if (data == null) {
    return {loading, error, data}
  }
  const userId = data.id;
  var { loading, error, data } = await useMutatione({
    mutation: REGISTER_EXTRA_MUTATION,
    variables: {
      userId,
      firstName,
      lastName,
      isTeacher,
    },
  });

  return {loading, error, data}
};

export const useCreateUserMutation = () => {
  return useMutation(REGISTER_MUTATION);
};

export const useCreateUserExtraMutation = () => {
  return useMutation(REGISTER_EXTRA_MUTATION);
};
