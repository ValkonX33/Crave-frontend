import { Link } from "react-router-dom"
import MobileNav from "./MobileNav"
import { useAuth0 } from "@auth0/auth0-react"
import UsernameMenu from "./UsernameMenu"


const Header = () => {
  const {loginWithRedirect, isAuthenticated} = useAuth0()

  return (
    <div>
   
<header className="flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm">
  <nav className="   sticky top-0 flex-row   mt-6  max-w-[85rem] w-full bg-white  mx-2 py-3 px-4 md:flex md:items-center md:justify-between md:py-0 md:px-6 lg:px-8 xl:mx-auto " aria-label="Global">
    <div className="flex items-center justify-between w-1/3">
      <Link className="flex-none text-3xl font-semibold dark:text-white text-orange-500 "  to="/" aria-label="Brand">Crave</Link>


    </div>
    <div  className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow md:block">
      <div className="flex flex-col gap-y-4 gap-x-0 mt-5 md:flex-row md:items-center md:justify-end md:gap-y-0 md:gap-x-7 md:mt-0 md:ps-7">
        {/* <a className="font-medium text-black  hover:text-orange-600 md:py-6" href="#" aria-current="page">Landing</a>
        <a className="font-medium text-black hover:text-orange-600 md:py-6" href="#">Offers</a>
        <a className="font-medium text-black hover:text-orange-600 md:py-6" href="#">Account</a>
        <a className="font-medium text-black hover:text-orange-600 md:py-6 " href="#">Help</a> */}

        
 

        <span className="flex-space-x-2 items-center">
          {isAuthenticated? ( <UsernameMenu/>):(
             <button className="flex items-center gap-x-2 font-medium text-gray-700 hover:text-blue-600 md:border-s md:border-gray-300 md:my-6 md:ps-6 dark:border-gray-700 dark:text-gray-400 dark:hover:text-blue-500" onClick={async ()=> await loginWithRedirect()} >
             <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
             Log in
           </button>
          )}
        </span>
       









      </div>
    </div>
    {/* Mobile Navbar */}
    <div className="md:hidden w-full relative">
  <div className="absolute right-2 bottom-[-5px]">
    <MobileNav/>
  </div>
</div>


  </nav>
</header>





    </div>
  )
}

export default Header