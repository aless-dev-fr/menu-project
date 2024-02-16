import { FoodsQueryHookResult, useFoodsQuery } from "@/packages/generated/graphql";
import { Spinner } from "@material-tailwind/react";

export default function Visualiser() 
{
    const { data, loading, error } : FoodsQueryHookResult = useFoodsQuery({});

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
        <div className="flex justify-center items-center flex-col">
            { data?.foods?.map((menu) => <p>{ menu?.Name }</p>)}
        </div>
    );
}