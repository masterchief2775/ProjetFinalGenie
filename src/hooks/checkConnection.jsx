import { useState, useEffect } from 'react';

export default function checkUserData(setToken) {
  const [hasData, setHasData] = useState(false);
  const [userId, setUserId] = useState(null);

  const fetchData = (callback) => {
    try {
      console.log(localStorage.getItem("jwtToken"))
      fetch('http://52.242.29.209:1337/api/users/me', {
        headers: {
          Authorization: `Bearer ${setToken}`,
        },
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error('API request failed');
          }
          return response.json();
        })
        .then((data) => {
          setHasData(data.hasOwnProperty('id'));
          setUserId(data.id);
          callback(data); // Call the callback function with data
        })
        .catch((error) => {
          console.error('Error fetching user data:', error);
        });
    } catch (error) {
      console.error('Couldn\'t fetch, returning to login');
    }
  };

  useEffect(() => {
    fetchData((data) => {
      // You can potentially use the data argument here if needed
      console.log('Data from fetchData:', data); // Example usage
    });
  }, [setToken]); // Only re-run fetchData when setToken changes

  return hasData;
}
