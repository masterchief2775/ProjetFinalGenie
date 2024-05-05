import { useState, useEffect } from 'react';

const checkUserData = async () => {
  const [isConnected, setIsConnected] = useState(false); // Initial state

  useEffect(() => {
    const storedToken = localStorage.getItem('jwtToken');

    const fetchData = async () => {
      if (storedToken) {
        try {
          const response = await fetch('http://52.242.29.209:1337/api/users/me', {
            headers: {
              Authorization: `Bearer ${storedToken}`,
            },
          });

          if (response.ok) { // Check for successful response (status code 200)
            console.log("User is connected")
            setIsConnected(true); // Set isConnected based on data existence
          } else {
            console.error('Error fetching user data:', response.statusText);
            setIsConnected(false); // Set to false on error
          }
        } catch (error) {
          console.error('Error checking user connection:', error);
          setIsConnected(false); // Set to false on error
        }
      } else {
        setIsConnected(false); // Set to false if no token is found
      }
    };

    fetchData(); // Execute the function on component mount
  }, []); // Empty dependency array to run only once on mount

  return isConnected;
};

export default checkUserData;
