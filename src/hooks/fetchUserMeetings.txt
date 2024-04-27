import { gql, useQuery } from '@apollo/client';

const GET_UserMeetingsQuery = gql`
query GetUserMeetings($userId: ID!) {
    usersPermissionsUser(id: $userId) {
      data {
        attributes {
          username
          meetings {
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
  }
`;


function GetMeetingsByUserID(id : Int16Array) {
    const { loading, error, data } = useQuery(GET_UserMeetingsQuery);
  
    if (loading) return 'Loading...';
    if (error) return `Error! ${error.message}`;
  
    return data
  }

export default GetMeetingsByUserID



  