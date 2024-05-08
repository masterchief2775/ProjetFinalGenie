import { gql, useLazyQuery, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  // Provide required constructor fields
  cache: new InMemoryCache(),
  uri: 'http://52.242.29.209:1337/graphql'
});

const SEARCH_USER_BY_NAME_AND_STRENGTH = gql`query SearchByNameAndStrenght($firstName: String!, $lastName: String!, $strengthName: String!) {
	usersPermissionsUsers(pagination: { page: 1, pageSize: 15 }, filters: {and: [{firstName: {containsi: $firstName}}, {lastName: {containsi: $lastName}}, {strengths: {name: {containsi: $strengthName}}}]}){
    data {
      id
      attributes {
        firstName
        lastName
        strengths(filters: {name: {containsi: $strengthName}}) {
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

export async function getUserByNameAndStrength(firstName, lastName, strength) {
  try {
    const { data, error } = await client.query({
      query: SEARCH_USER_BY_NAME_AND_STRENGTH,
      variables: { firstName, lastName, strengthName: strength },
    });

    if (error) {
      console.error('Error fetching data:', error);
      return { loading: false, error }; // Handle error
    }

    return { loading: false, data };
  } catch (error) {
    console.error('Unexpected error:', error);
    return { loading: false, error }; // Handle error
  }
}



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

export async function getUserById(id) {
  try {
    if (id == 'me') {
      console.log("id is me")
      const selfData = await useGetSelf()
      console.log(selfData)
      id = selfData.me.id
    }
    console.log(id)
    const { data, error } = await client.query({
      query: GET_USER_BY_ID,
      variables: { userId: id },
    });

    if (error) {
      console.error('Error fetching data:', error);
      return { loading: false, error }; // Handle error
    }

    return { loading: false, data };
  } catch (error) {
    console.error('Unexpected error:', error);
    return { loading: false, error }; // Handle error
  }
}

async function useGetSelf() {
  try {
    const { data, error } = await client.query({
      query: GET_SELF,
      context: { headers: { Authorization: `Bearer ${localStorage.getItem('jwtToken')}`}},
    });

    if (error) {
      console.error('Error fetching data:', error);
      return { loading: false, error }; // Handle error
    }

    return data;
  } catch (error) {
    console.error('Unexpected error:', error);
    return { loading: false, error }; // Handle error
  }
}