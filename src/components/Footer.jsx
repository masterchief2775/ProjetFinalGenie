import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import HomeIcon from '~icons/heroicons/home-20-solid';
import HeroiconsStarSolid from '~icons/heroicons/star-solid';
import HeroiconsMagnifyingGlass16Solid from '~icons/heroicons/magnifying-glass-16-solid';
import ProfileIcon from '~icons/heroicons/user-16-solid';
import LogoutIcon from '~icons/heroicons/arrow-right-start-on-rectangle-16-solid';
import checkUserData from '../hooks/checkConnection';

function Footer() {
  const [shouldNavigate, setShouldNavigate] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const shouldHideFooter = location.pathname === '/login' || location.pathname === '/signin';
  const isOnSelf = location.pathname === '/Profile/me'
  useEffect(() => {
    var isConnected = checkUserData()
    setShouldNavigate(!isConnected)
  }, []);

  useEffect(() => {
    if (shouldNavigate) {
      navigate('/login');
    }
  }, [shouldNavigate]); // Navigate only when shouldNavigate changes

  function handleLogout() {
    if (isOnSelf) {
      try {
       localStorage.clear()
      } catch (error) {
        console.error('Error clearing local data:', error);
        // Handle errors appropriately (e.g., display an error message)
      }
    }
  }
  return (
    !shouldHideFooter && (
      <div className="fixed bottom-0 z-50 w-full h-[9vh] border-t-2 border-gray-500 bg-neutral-900">

        <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
          <Link to="/" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group">
            <HomeIcon className="w-7 h-7 mb-.5 text-gray-500 dark:text-gray-400 group-hover:text-customColor dark:group-hover:text-customColor" />
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-customColor dark:group-hover:text-customColor">Accueil</span>
          </Link>

          <Link to="/rencontre" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group">
            <HeroiconsMagnifyingGlass16Solid className="w-7 h-7 mb-.5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Rencontre</span>
          </Link>

          <Link to="/avis" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group">

            <HeroiconsStarSolid className="w-7 h-7 mb-.5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Avis</span>
          </Link>

          <Link to={isOnSelf ? "/login" : "/Profile/me"} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group" onClick={handleLogout}>
            {isOnSelf ? <LogoutIcon className="w-7 h-7 mb-.5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" /> : <ProfileIcon className="w-7 h-7 mb-.5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" /> }
            <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">{isOnSelf ? "Déconnexion" : "Profil"}</span>
          </Link>
        </div>
      </div>
    )
  )
}

export default Footer