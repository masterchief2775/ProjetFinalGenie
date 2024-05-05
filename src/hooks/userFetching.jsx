import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';
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

const GET_SELF = gql`
  query Me {
    me {
      id
    }
  }
`;

export const getUserById = (id) => {
  if (id == 'me') {
    console.log("id is me")
    id = useGetSelf()
    console.log(id)
    id = id.data?.id
  }

  console.log(id)
  const { loading, error, data } = useQuery(GET_USER_BY_ID, {
    variables: { userId: id },
  });

  return { loading, error, data }
};

export const useGetSelf = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { refetch } = useQuery(GET_SELF, {
    context: { headers: { Authorization: `Bearer ${localStorage.getItem('jwtToken')}` } },
    onError: (err) => setError(err),
    onCompleted: (data) => {
      setData(data.me);
      setLoading(false);
    },
  });

  return { loading, error, data, refetch }; // Expose loading, error, data, and refetch functionality
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
export const getMeetingsFromUserId = (id) => {

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
export const getUsersByStrength = (strengthName) => {

  const { loading, error, data } = useQuery(USER_SEARCH_BY_STRENGHT, {
    variables: { strName: strengthName },
  });
  return { loading, error, data }
};