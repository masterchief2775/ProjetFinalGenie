const GRAPHQL_URL = 'http://52.242.29.209:1337/graphql';

async function fetchGreeting() {
    const response = await fetch(GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: `
          query {
            test
          }
        `,
      }),
    });
  
    const responseBody = await response.json();
    console.log(responseBody);
  }

export default function() {
    fetchGreeting()
    return (
        <>
            <h2> About Page </h2>
            
        </>
    )
}