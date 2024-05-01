import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from "@nextui-org/react";
import { getUserById } from '../hooks/userFetching';

function LogoutComponent({ userId, id }) {
  if (userId === id) {
    let lienMod = "/ModProfile/" + id
    return (
      <div className="LogOut flex mr-3 pt-[2vh] h-[10vh] justify-between">
        <Link to={lienMod}>
          <Button radius="full" className="bg-gradient-to-tr ml-[2vw] from-blue-600 to-green-700 text-white shadow-lg">
            Modifier Profil
          </Button>
        </Link>
        <Link to="/login">
          <Button radius="full" className="bg-customColor text-white shadow-lg">
            Déconnexion
          </Button>
        </Link>
      </div>
    );
  } else {
    return (
      <div className="LogOut flex mr-3 pt-[2vh] justify-end h-[10vh]">
        <Link to="/login">
          <Button radius="full" className="bg-customColor text-white shadow-lg">
            Déconnexion
          </Button>
        </Link>
      </div>
    );
  }
}

export default LogoutComponent;