import { FoodsQueryHookResult, useFoodsQuery } from "@/packages/generated/graphql";
import { MyMenuItemContext } from "@/packages/hooks/use-data-context";
import { useContext } from "react";
import { Spinner } from "@material-tailwind/react";

export default function Home() {

    const { data, functions } = useContext(MyMenuItemContext);

    const { data: foodsData, loading: foodsLoading, error: foodsError } : FoodsQueryHookResult = useFoodsQuery({});

    if (foodsLoading)
    {
        return (
            <div className="flex justify-center items-center h-screen">
                <div role="status">
                    <Spinner color="green" className="h-12 w-12" />
                </div>
            </div>
        );
    }

    return (
        <div className="flex h-screen">
            <div className="w-screen h-full flex justify-center items-center">
                
            </div>
            <div className="w-screen h-full flex justify-center items-center">
               
            </div>
        </div>
    );
}
