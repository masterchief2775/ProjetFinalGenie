import { gql, useQuery, useLazyQuery } from '@apollo/client';
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
          bankedTime
          picture {
            data {
              attributes {
                url
              }
            }
          }
          strengths {
            data {
              id
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
  console.log(data)
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
query GetMeetingsFromUserId($userId : ID!) {
  usersPermissionsUser(id: $userId) {
    data {
      attributes {
        meetings {
          data {
            id
            attributes {
              isFinished
              name
              location
              date
              subject{
                data{
                  attributes{
                    name
                  }
                }
              }
              beginningTime
              endTime
              users_permissions_user {
                data {
                  id
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
  meetings(filters: {
    users_permissions_user: {id: {eq: $userId}}
  }){
      data {
        id
        attributes {
          isFinished
          name
          location
          date
          subject{
                data{
                  attributes{
                    name
                  }
                }
              }
          beginningTime
          endTime
          users_permissions_user {
            data {
              id
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
`;

// count les id des users (c un array) et user, c'est le createur
export const getMeetingsFromUserId = (id) => {

  const { loading, error, data } = useQuery(GET_MEETINGS_FROM_USER, {
    variables: { userId: id },
  });
  return { loading, error, data }
};

const GET_NOTIFREVIEW_FROM_USER = gql`
query GetNotifReviewFromUserId ($userId : ID!) {
  notifReviews(filters :{
   users_permissions_reviewer: {id: {eq: $userId}}
   }){
     data{
      id
       attributes{
         users_permissions_revieweds{
           data{
             id
             attributes{
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
         meetingID{
           data{
             id
             attributes{
               date
               beginningTime
               name
             }
           }
         }
       }
     }
   }
 }
`;

export const getNotifReviewFromUserId = (id) => {

  const { loading, error, data } = useQuery(GET_NOTIFREVIEW_FROM_USER, {
    variables: { userId: id },
  });
  return { loading, error, data }
};

const GET_NOTIFREVIEW_FROM_ID = gql`
query GetNotifReviewFromId ($id :ID!) {
  notifReview(id: $id){
    data{
       attributes{
         users_permissions_revieweds{
           data{
             id
             attributes{
               firstName
               lastName
             }
           }
         }
         meetingID{
           data{
             id
             attributes{
               name
             }
           }
         }
       }
     }
   }
 }
`;

export const getNotifReviewFromId = (idNotif) => {

  const { loading, error, data } = useQuery(GET_NOTIFREVIEW_FROM_ID, {
    variables: { id: idNotif },
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

const SEARCH_USER_BY_NAME_AND_STRENGTH = gql`query SearchByNameAndStrength($firstName: String!, $lastName: String!, $strengthName: String!) {
	usersPermissionsUsers(filters: {and: [{firstName: {containsi: $firstName}}, {lastName: {containsi: $lastName}}, {strengths: {name: {containsi: $strengthName}}}]}){
    data {
      id
      attributes {
        firstName
        lastName
        strengths {
          data {
            id
            attributes {
              name
            }
          }
        }
      }
    }
  }
}`

export function getUserByNameAndStrength(firstName, lastName, strength) {
  const { loading, error, data } = useQuery(SEARCH_USER_BY_NAME_AND_STRENGTH, {
    variables: { firstName: firstName, lastName: lastName, strengthName: strength },
  });
  return { loading, error, data }
};
/*
const GET_REVIEW_NOTIF_FROM_USER = gql`
CODE POUR GET LES NOTIFS DES REVIEWS
`;*/

// count les id des users (c un array) et user, c'est le createur
export const getReviewNotifFromUserId =  (id) => {

  const { loading, error, data } = useQuery(GET_REVIEWNOTIF_FROM_USER, {
    variables: { userId: id },
  });
  return { loading, error, data }
};


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

export const getMatieresFromStrenghtArray = (_strengths) => {

  const { loading, error, data } = useQuery(GET_MATIERES_DISPO, {
    variables: { strengths: _strengths },
  });
  return { loading, error, data }
};