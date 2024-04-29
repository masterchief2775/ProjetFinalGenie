import { Link } from 'react-router-dom'
import HomeIcon from '~icons/heroicons/home-20-solid'
import HeroiconsStarSolid from '~icons/heroicons/star-solid';
import HeroiconsMagnifyingGlass16Solid from '~icons/heroicons/magnifying-glass-16-solid'
import ProfileIcon from '~icons/heroicons/user-16-solid'


const Footer = () => {
  const userId = localStorage.getItem('userId');
  console.log('User ID:', userId);
  return (
    

    <div className="fixed bottom-0 z-50 w-full h-[9vh] border-t-2 border-gray-500 bg-neutral-900">
      
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <Link to="/" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group">
          <HomeIcon className="w-7 h-7 mb-.5 text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-500">Accueil</span>
        </Link>
        
        <Link to="/rencontre" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group">
          <HeroiconsMagnifyingGlass16Solid className="w-7 h-7 mb-.5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Rencontre</span>
        </Link>

        <Link to="/avis" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group">

          <HeroiconsStarSolid className="w-7 h-7 mb-.5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Avis</span>
        </Link>
        
        <Link to={"/Profile/" + localStorage.getItem('userId')} className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group">
          <ProfileIcon className="w-7 h-7 mb-.5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Profil</span>
        </Link>
      </div>
    </div>

  )
}

export default Footer