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

export const CREATE_MEETING = gql`
  mutation CreateMeeting($data: MeetingInput!) {
    createMeeting(data: $data) {
      data {
          id
        }	
      }
    }
;
`;

/*DATA DOIS AVOIR UNE LIISTE D'ID DES PERSONNE DÉJÀ DANS LE GROUPE + LA NOUVELLE*/
export const JOIN_MEETING = gql`
mutation joinMeeting($data: MeetingEntityResponse!) {
  updateMeeting(data: $data) {
    data {
      id
    }
  }
}
`;

/*
export const DELETE_NOTIFREVIEW = gql`
mutation deleteNotifReview ($id: NotifReviewEntityResponse) {
  deleteNotifReview(id: $id){
    data{
      id
    }
  }
}
`;*/

/*IL FAUT AVOIR DES PERMITIONS APPAREMENT*/

export const CREATE_REVIEW = gql`
  mutation CreateReview($data: MeetingEntityResponse!) {
    createReview(data: $data) {
      data {
          id
        }	
      }
    }
;
`;

