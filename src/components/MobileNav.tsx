import { useAuth0 } from "@auth0/auth0-react"
import MobileNavLinks from "./MobileNavLinks"
import { Button } from "./ui/button"
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet"
import {CircleUserRound, Menu} from "lucide-react"

const MobileNav = () => {
  const {isAuthenticated, loginWithRedirect, user} = useAuth0()
  return (
    <Sheet>
        <SheetTrigger>
        <Menu className="text-orange-500"/>

        </SheetTrigger>
        <SheetContent>
                <SheetTitle className="text-center font-bold  ">
                  {isAuthenticated ? (<span className="flex items-center font-semibold gap-2" >
                              <CircleUserRound className="text-orange-500"/>
                              {user?.email}
                  </span>) :(  <span>Welcome to Crave</span>)}
                   
                </SheetTitle>
        <div className="flex flex-row w-full bg-black h-[1px] opacity-25 my-5"></div>
    <SheetDescription className="flex flex-col gap-4 mt-5">
          {isAuthenticated ? (<MobileNavLinks/>):( <Button onClick={()=>loginWithRedirect()} className="flex-1 font-bold bg-orange-500 hover:bg-orange-600">Log In</Button>)}
       

    </SheetDescription>


        </SheetContent>
    </Sheet>
  )
} 

export default MobileNav