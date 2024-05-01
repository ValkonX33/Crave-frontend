import { RestaurnatSearchResponse } from "@/types";
import { useQuery } from "react-query";

const API_BASE_URL  = import.meta.env.VITE_API_BASE_URL
export const useSearchRestaurant = (city?:string) =>{

const createSearchRequest = async ():Promise<RestaurnatSearchResponse>  =>{
    const response = await fetch(`${API_BASE_URL}/api/restaurant/search/${city}`,);

      if(!response.ok){
          throw new Error("Failed to get restaurant")
      }

      return response.json()
}


  const {data:results, isLoading} = useQuery(["searchRestaurant"], createSearchRequest,
    {enabled:!!city}
  )

  return {
      results, isLoading
  } 


}







