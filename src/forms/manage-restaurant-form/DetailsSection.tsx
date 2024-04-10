import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useFormContext } from "react-hook-form"

export const DetailsSection = () => {
    const {control} = useFormContext()
  return (
    <div className="space-y-3 w-[50%]">
    
    <div>
        <h2 className="text-2xl font-bold">Details</h2>
        <FormDescription className="flex-nowraprap w-screen">
            Enter the details about your restaurant
        </FormDescription>
    </div>
    <FormField control={control} name="restaurantName" render={({field})=>(<FormItem>
        <FormLabel>Name</FormLabel>
        <FormControl>
            <Input {...field} className="bg-white w-[260px]  md:w-[62%]"/>
        </FormControl>
        <FormMessage/>
    </FormItem>)}/>


    <div className="flex gap-6">
    <FormField control={control} name="city" render={({field})=>(<FormItem>
        <FormLabel>City</FormLabel>
        <FormControl>
            <Input {...field} className="bg-white w-[110px] md:w-[180px] "/>
        </FormControl>
        <FormMessage/>
    </FormItem>)}/>

    <FormField control={control} name="country" render={({field})=>(<FormItem>
        <FormLabel>Country</FormLabel>
        <FormControl>
            <Input {...field} className="bg-white w-[120px] md:w-[190px]"/>
        </FormControl>
        <FormMessage/>
    </FormItem>)}/>
    </div>
    <div className="flex md:flex-row w-screen gap-8 md:gap-6 ">
    <FormField control={control} name="deliveryPrice" render={({field})=>(<FormItem className="mb-5 max-w-[30%]">
        <FormLabel className="text-nowrap w-52 ">Delivery Price (₹) </FormLabel>
        <FormControl>
            <Input {...field} className="bg-white" placeholder="₹ 50" />
        </FormControl>
        <FormMessage/>
    </FormItem>)}/>
    <FormField control={control} name="estimatedDeliveryTime" render={({field})=>(<FormItem className=" max-w-[30%]">
        <FormLabel className="text-nowrap" >ETA Delivery (min) </FormLabel>
        <FormControl>
            <Input {...field} className="bg-white" placeholder="30 minutes" />
        </FormControl>
        <FormMessage/>
    </FormItem>)}/>
    </div>



    </div>
  )
}
