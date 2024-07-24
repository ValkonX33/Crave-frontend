import { useSearchRestaurants } from "@/api/RestaurantApi"
import CuisineFilter from "@/components/CuisineFilter"
import PaginationSelector from "@/components/PaginationSelector"
import SearchBar, { SearchForm } from "@/components/SearchBar"
import SearchResultCard from "@/components/SearchResultCard"
import SearchResultsInfo from "@/components/SearchResultsInfo"
import SortOptionDropdown from "@/components/SortOptionDropdown"
import { useState } from "react"
import { useParams } from "react-router-dom"

export type SearchState = {
  searchQuery: string;
  page: number;
  selectedCuisines: string[]
  sortOption: string
}
const SearchPage = () => {
    const [searchState, setSearchState] = useState<SearchState>({
      searchQuery: "",
      page:1,
      selectedCuisines:[],
      sortOption: "bestMatch",
    })
    const {city} = useParams()
    const {results, isLoading} = useSearchRestaurants(searchState,city)
    const [isExpanded, setIsExpanded] = useState<boolean>(false)
    console.log("results", results) 

    if(isLoading){
      return <span>Loading ....</span>
    }

    if(!results?.data || !city){
      return <span>No results found</span>
    }

    const setSelectedCuisines = (selectedCuisines: string[]) =>{

        setSearchState((prevState)=>({
              ...prevState, selectedCuisines,
              page:1
        }))

    }



    const setPage = (page:number) =>{
      setSearchState((prevState)=>({
        ...prevState,
        page
      }))
    }

  const setSearchQuery = (searchFormData: SearchForm) =>{
          setSearchState((prevState)=>({
            ...prevState, 
            searchQuery: searchFormData.searchQuery,
            page:1
          }))
  }


const resetSearch = () =>{
  setSearchState((prevState)=>({
    ...prevState, 
    searchQuery: "",
    page:1
  }))
}

const setSortOption =(sortOption:string)=>{
  setSearchState((prevState)=>({
    ...prevState,
    sortOption, 
    page:1,
  }))
}

  return (

    <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5 ">
      <div id="cuisines-left"><CuisineFilter 
      isExpanded = {isExpanded} 
      onExpandedClick={()=> setIsExpanded((prevIsExpranded)=> !prevIsExpranded)}
      selectedCuisines={searchState.selectedCuisines} onChange={setSelectedCuisines}/></div>

      <div id="main-content" className="flex flex-col gap-5 ">
        <SearchBar
        searchQuery={searchState.searchQuery}
        onSubmit={setSearchQuery} placeHolder="Search by Cuisine or Restaurant Name" onReset={resetSearch} />
        <div className="flex justify-between flex-col gap-3 lg:flex-row">
        <SearchResultsInfo  city={city}  total={results.pagination.total} />
        <SortOptionDropdown sortOption={searchState.sortOption} onChange={(value)=> setSortOption(value)} />
        </div>
        {results.data.map((restaurant)=>(
                <SearchResultCard restaurant={restaurant}/>
        ))}
        <PaginationSelector page={results.pagination.page} pages={results.pagination.pages} onPageChange={setPage} />
    </div>
    </div>
    
  )
}

export default SearchPage