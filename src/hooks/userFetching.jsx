import { gql, useQuery } from '@apollo/client';

const GET_USER_BY_ID = gql`
  query GetUserById($userId: ID!) {
    usersPermissionsUser(id: $userId) {
      data {
        attributes {
          firstName
          lastName
          email
          isTeacher
          reviewAvg
          picture {
            data {
              attributes {
                url
              }
            }
          }
        }
      }
    }
  }
`;

export const getUserById = (id) => {

  // Use the GET_USER_BY_ID query with useQuery
  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: { userId: id }, // Pass the ID as a variable
  });
  return { loading, error, data }
};

const GET_MEETINGS_FROM_USER = gql`
query GetMeetingsFromUserId($userId: ID!) {
  usersPermissionsUser(id: $userId) {
    data {
      attributes {
        meetings {
          data {
            id
            attributes {
              name
              location
              date
              subject
              beginningTime
              endTime
              users_permissions_user {
                data {
                  attributes {
                    firstName
                    lastName
                    picture {
                      data {
                        attributes {
                          url
                        }
                      }
                    }
                  }
                }
              }
              users_permissions_users {
                data {
                  id
                }
              }
            }
          }
        }
      }
    }
  }
}
`;

// count les id des users (c un array) et user, c'est le createur
export const getMeetingsFromUserId =  (id) => {

  const { loading, error, data } = useQuery(GET_MEETINGS_FROM_USER, {
    variables: { userId: id },
  });
  return { loading, error, data }
};

const USER_SEARCH_BY_STRENGHT = gql`
query GetUsersByStrenght($strName: String!) {
  usersPermissionsUsers(filters: {
    and: [
      { strengths: { name: { contains: $strName } } }   # Filter for strength name
    ]
  }) {
    data {
      id
      attributes {
        firstName
        lastName
        email
        isTeacher
        reviewAvg
        picture {
          data {
            attributes {
              url
            }
          }
        }
        strengths {
          data {
            attributes {
              name
              color
            }
          }
        }
      }
    }
  }
}

`;

// join FirstName et lastName pis check localement
export const getUsersByStrength =  (strengthName) => {

  const { loading, error, data } = useQuery(USER_SEARCH_BY_STRENGHT, {
    variables: { strName: strengthName },
  });
  return { loading, error, data }
};

const GET_REVIEW_NOTIF_FROM_USER = gql`
CODE POUR GET LES NOTIFS DES REVIEWS
`;

// count les id des users (c un array) et user, c'est le createur
export const getReviewNotifFromUserId =  (id) => {

  const { loading, error, data } = useQuery(GET_REVIEWNOTIF_FROM_USER, {
    variables: { userId: id },
  });
  return { loading, error, data }
};