import { MenuItemInput, useCreateMenuItemMutation } from "@/packages/generated/graphql";
import { Spinner } from "@material-tailwind/react";

export default function Form() 
{
    const [createFood, { data, loading, error }] = useCreateMenuItemMutation({})
    
    const handleSubmit = function(event : any) : void
    {
        event.preventDefault();

        var formData = new FormData(event.target);

        const input : MenuItemInput = {
            Name : formData.get("name")!.toString(),
            Description : formData.get("description")!.toString(),
            Price : parseInt(formData.get("price")!.toString()),
            Country : formData.get("country")!.toString()
        }
        
        createFood({ variables: { input: input } });
    }

    if (loading)
    {
        return (
            <div className="absolute h-screen w-screen flex justify-center items-center">
                <div role="status">
                    <Spinner color="green" className="h-12 w-12" />
                </div>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col p-10 w-3/5">
            <input type="text" name="name" className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name" required />
            <input type="text" name="description" className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="description" required />
            <input type="text" name="country" className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="country" required />
            <input type="number" name="price" className="mb-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="price" required />
            <button className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 p-3.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Push</button>
        </form>
    );
}