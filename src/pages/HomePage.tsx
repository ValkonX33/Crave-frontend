import landing from "../assets/landing.png"
import appDownload from "../assets/appDownload.png"
import SearchBar, { SearchForm } from "@/components/SearchBar"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()
  const handleSearchSubumit = (searchFormValues:SearchForm) =>{
      navigate({
        pathname: `/search/${searchFormValues.searchQuery}`
      })
  }
  return (
    <>
  
<br/>
<br/>
<br/>
<br/>
<div className=" md:px-28">
<SearchBar placeHolder="Search by City Name or Town" onSubmit={handleSearchSubumit} searchQuery="Search" />
</div>
<br/>
<br/>
<br/>
<br/>
    <div className="flex felx-col gap-12 mt-10" >
    
  

    <div className="grid md:grid-cols-2 gap-5">

        <img src={landing} alt="" />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
            <span className="font-semibold text-5xl text-orange-500 tracking-tighter"> Order takeaway even faster 
            </span>
               <span className="text-[20px] text-slate-800 mt-2">
                    Download the Crave App for faster ordering and personalised recommendations
               </span>

               <img src={appDownload} alt="" />
        </div>

    </div>








    </div>
    </>
  )
}

export default HomePage