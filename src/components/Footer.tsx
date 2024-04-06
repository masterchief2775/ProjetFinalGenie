import { Link } from 'react-router-dom'
import HomeIcon from '~icons/heroicons/home-20-solid'
import SettingsIcon from '~icons/heroicons/adjustments-vertical-20-solid'
import AboutIcon from '~icons/heroicons/information-circle-20-solid'
import ProfileIcon from '~icons/heroicons/user-16-solid'


const Footer = () => {

  return (
    

    <div className="fixed bottom-0 z-50 w-full h-[9vh] border-t-2 border-gray-500 bg-neutral-900">
      
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        <Link to="/" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group">
          <HomeIcon className="w-7 h-7 mb-.5 text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-orange-600 dark:group-hover:text-orange-500">Home</span>
        </Link>
        
        <Link to="/about" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group">
          <AboutIcon className="w-7 h-7 mb-.5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">About</span>
        </Link>

        <Link to="/Settings" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group">

          <SettingsIcon className="w-7 h-7 mb-.5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Settings</span>
        </Link>

        <Link to="/Profile" className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-800 group">
          <ProfileIcon className="w-7 h-7 mb-.5 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500" />
          <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">Profile</span>
        </Link>
      </div>
    </div>

  )
}

export default Footer