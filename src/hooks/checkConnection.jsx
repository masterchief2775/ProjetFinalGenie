import { useState, useEffect } from 'react';

function checkUserData() {
  var isConnected = false;

  const storedToken = localStorage.getItem('jwtToken');
  const fetchData = async () => {
    if (storedToken && storedToken != null) {
      try {
        const response = await fetch('http://52.242.29.209:1337/api/users/me', {
          headers: {
            Authorization: `Bearer ${storedToken}`,
          },
        });

        if (response.ok) { // Check for successful response (status code 200)
          console.log("User is connected")
          isConnected = true // Set isConnected based on data existence
        } else {
          console.error('Error fetching user data:', response.statusText);
          isConnected = false // Set to false on error
        }
      } catch (error) {
        console.error('Error checking user connection:', error);
        isConnected = false // Set to false on error
      }
    } else {
      isConnected = false // Set to false if no token is found
    }
  };
  fetchData(); // Execute the function on component mount

  return isConnected;
};

export default checkUserData;
