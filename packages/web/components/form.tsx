import { useCreateMenuItemMutation } from "@/packages/generated/graphql";
import { Spinner } from "@material-tailwind/react";

export default function Form() 
{
    const [createFood, { data, loading, error }] = useCreateMenuItemMutation({})
    
    const handleSubmit = function(event : any) : void
    {
        event.preventDefault();
        
        createFood({ variables: { input: { Name : "test", Description : "test", Price : 120, Country : "NZ" } } });
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
        <form onSubmit={handleSubmit}>
            <button type="submit">add menu</button>
        </form>
    );
}