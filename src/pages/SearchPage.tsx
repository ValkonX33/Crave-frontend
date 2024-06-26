import { useSearchRestaurant } from "@/api/RestaurantApi"
import SearchBar, { SearchForm } from "@/components/SearchBar"
import SearchResultCard from "@/components/SearchResultCard"
import SearchResultsInfo from "@/components/SearchResultsInfo"
import { useState } from "react"
import { useParams } from "react-router-dom"

export type SearchState = {
  searchQuery: string;
}
const SearchPage = () => {
    const [searchState, setSearchState] = useState<SearchState>({
      searchQuery: ""
    })
    const {city} = useParams()
    const {results, isLoading} = useSearchRestaurant(city)
    console.log("results", results) 

    if(isLoading){
      return <span>Loading ....</span>
    }

    if(!results?.data || !city){
      return <span>No results found</span>
    }

  const setSearchQuery = (searchFormData: SearchForm) =>{
          setSearchState((prevState)=>({
            ...prevState, 
            searchQuery: searchFormData.searchQuery
          }))
  }


const resetSearch = () =>{
  setSearchState((prevState)=>({
    ...prevState, 
    searchQuery: ""
  }))
}



  return (

    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 ">
      <div id="cuisines-left">Insert Cuisines here:</div>

      <div id="main-content" className="flex flex-col gap-5 ">
        <SearchBar
        searchQuery={searchState.searchQuery}
        onSubmit={setSearchQuery} placeHolder="Search by Cuisine or Restaurant Name" onReset={resetSearch} />
        <SearchResultsInfo  city={city}  total={results.pagination.total} />
        {results.data.map((restaurant)=>(
                <SearchResultCard restaurant={restaurant}/>
        ))}
    </div>
    </div>
    
  )
}

export default SearchPage