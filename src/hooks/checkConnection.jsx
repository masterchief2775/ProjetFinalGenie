import { useState, useEffect } from 'react';

function checkUserData() {
  const [isConnected, setIsConnected] = useState(true);  // Store connection state

  useEffect(() => {
    const storedToken = localStorage.getItem('jwtToken');

    if (storedToken && storedToken !== null) {
      try {
        const fetchData = async () => { // Async function to fetch data
          const response = await fetch('http://52.242.29.209:1337/api/users/me', {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });

          if (response.ok) {
            console.log("User is connected");
            setIsConnected(true); // Set state based on successful response
          } else {
            console.error('Error fetching user data:', response.statusText);
            setIsConnected(false); // Set to false on error
          }
        };

        fetchData(); // Call the function to fetch data
      } catch (error) {
        console.error('Error checking user connection:', error);
        setIsConnected(false); // Set to false on error
      }
    } else {
      setIsConnected(false);
    }
  }, []); // Empty dependency array to run only once on mount

  return isConnected;
}

export default checkUserData;
