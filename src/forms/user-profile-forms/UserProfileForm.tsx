import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormField, FormMessage } from "@/components/ui/form";
import LoadingButton from "@/components/LoadingButton";
import { User } from "@/types";
import { useEffect } from "react";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "name is required"),
  addressLine1: z.string().min(1, " Address is required"),
  city: z.string().min(1, " city is required"),
  country: z.string().min(1, " Country is required"),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
  currentUser:User
};

const UserProfileForm = ({ onSave, isLoading, currentUser }: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues:currentUser,
  });

  useEffect(()=>{
      form.reset(currentUser)
  }, [currentUser, form])

  return (
    <Form {...form}>
      <div className="flex items-center justify-center p-12">
        <div className="mx-auto w-full max-w-[550px] bg-white">
          <form onSubmit={form.handleSubmit(onSave)}>
            <div className="my-4">
              <span className="font-bold text-3xl my-4 ">
                User Profile Form
              </span>
              <p className="font-semibold text-normal mt-1 ">
                View and change your profile information here
              </p>
            </div>
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <div className="mb-5 mt-10">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Full Name"
                    {...field}
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#141619] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                  <FormMessage/>
                </div>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <div className="mb-5 mt-10">
                  <label className="mb-3 block text-base font-medium text-[#07074D]">
                    Email
                  </label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Email"
                    {...field}
                    disabled
                    className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#141619] outline-none focus:border-[#6A64F1] focus:shadow-md"
                  />
                   <FormMessage/>
                </div>
              )}
            />

            <div className="mb-5 pt-3">
              <label className="mb-5 block text-base font-semibold text-[#07074D] sm:text-xl">
                Address Details
              </label>
              <FormField
                control={form.control}
                name="addressLine1"
                render={({ field }) => (
                  <div className="mb-5 mt-5">
                    <label className="mb-3 block text-base font-medium text-[#07074D]">
                      Address
                    </label>
                    <input
                      type="text"
                      placeholder="Address Line 1"
                      {...field}
                      className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#141619] outline-none focus:border-[#6A64F1] focus:shadow-md"
                    />
                     <FormMessage/>
                  </div>
                )}
              />
              <div className="-mx-3 flex flex-wrap">
                <div className="w-full px-3 sm:w-1/2">
                  <FormField
                    control={form.control}
                    name="city"
                    render={({ field }) => (
                      <div className="mb-1 mt-1">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          City
                        </label>
                        <input
                          type="text"
                          placeholder="City"
                          {...field}
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#141619] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                         <FormMessage/>
                      </div>
                    )}
                  />
                </div>

                <div className="w-full px-3 sm:w-1/2">
                  <FormField
                    control={form.control}
                    name="country"
                    render={({ field }) => (
                      <div className="mb-1 mt-1">
                        <label className="mb-3 block text-base font-medium text-[#07074D]">
                          Country
                        </label>
                        <input
                          type="text"
                          placeholder="Country"
                          {...field}
                          className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-medium text-[#141619] outline-none focus:border-[#6A64F1] focus:shadow-md"
                        />
                         <FormMessage/>
                      </div>
                    )}
                  />
                </div>
              </div>
            </div>

           {isLoading? <LoadingButton/>:    <button className="hover:shadow-form w-full rounded-md bg-[#6A64F1] py-3 px-8 text-center text-base font-semibold text-white outline-none">
                Submit
              </button> }
          </form>
        </div>
      </div>
    </Form>
  );
};
export default UserProfileForm;
