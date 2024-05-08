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
    mutation: REGISTER_MUTATION, 
    variables: {
      username,
      email,
      password,
    },
  });
};

export const CREATE_MEETING = gql`
  mutation CreateMeeting($data: MeetingInput!) {
    createMeeting(data: $data) {
      data {
          id
        }	
      }
    }
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

export const CREATE_NOTIFREVIEW = gql`
  mutation CreateNotifReview($data:  NotifReviewInput!) {
    createNotifReview(data: $data) {
      data {
          id
        }	
      }
    }
`;

export const UPDATE_MEETING_STATUS = gql`
mutation UpdateMeetingStatus ($id: ID!, $data:   MeetingInput!) {
  updateMeeting(id: $id, data: $data) {
   data{
     id
     attributes{
       isFinished
     }
   }
 }
}
`;

export const DELETE_NOTIFREVIEW = gql`
mutation deleteNotifReview ($id: NotifReviewEntityResponse) {
  deleteNotifReview(id: $id){
    data{
      id
    }
  }
}
`;

export const CREATE_REVIEW = gql`
  mutation CreateReview($data: ReviewEntityResponse!) {
    createReview(data: $data) {
      data {
          id
        }	
      }
    }
`;

export const CREATE_MATIERE = gql`
  mutation CreateMatiere($data: SubjectEntityResponse!) {
    createSubject(data: $data) {
      data {
          id
        }	
      }
    }
`;

export const UPDATE_MATIERE = gql`
  mutation CreateMatiere($id: ID!, $strengths: [ID!]) {
    updateUsersPermissionsUser(id: $id, data: {strengths: $strengths}) {
      data {
        id
        attributes {  # Add the user to the relationship field
          strengths {
            data {
              attributes {
                name
              }
            }
          }
        }
      }
    }
  }
`;

export const GET_MATIERES_DISPO = gql`
query GetAvailableSubjects($strengths: [ID!]) {
  subjects(filters: { not: { id: { in: $strengths } } }) {
    data {
      id
      attributes {
        name
      }
    }
  }
}
`;
