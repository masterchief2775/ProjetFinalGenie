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

export const UPDATE_MEETING_STATUS = gql`
mutation UpdateMeetingStatus ($id: ID!, $data:  MeetingEntityResponse!) {
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

export const updateMeetingStatus = async (meetingId) => {
  const { data } = await client.mutate({
    mutation: UPDATE_MEETING_STATUS, // Assuming you have REGISTER_MUTATION defined
    variables: {
      id: meetingId,
      data:{
        isFinished: true
      }
    },
  });
  // Handle response data and errors
};

export const CREATE_NOTIFREVIEW = gql`
  mutation CreateNotifReview($data:  NotifReviewEntityResponse!) {
    createNotifReview(data: $data) {
      data {
          id
        }	
      }
    }
`;

export const createNotifReview = async (users_permissions_reviewer, users_permissions_revieweds) => {
  const { data } = await client.mutate({
    mutation: CREATE_NOTIFREVIEW, 
    variables: {
      users_permissions_reviewer,
      users_permissions_revieweds
    },
  });
  // Handle response data and errors
};

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
