import { FoodsQueryHookResult, useFoodsQuery } from "@/packages/generated/graphql";
import { Spinner } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Pagination from '@mui/material/Pagination';
  
export default function Visualiser() 
{
    const [searchInput, setSeachInput] = useState<string>("");
    
    const { data, loading, error, refetch } : FoodsQueryHookResult = useFoodsQuery({
        variables : { input : "", limit : 5, offset : 0 }
    });

    const handlePageChangedEvent = function(nextPage : number)
    {
        refetch({ input : searchInput, offset : (nextPage - 1) * 5 });
    }
    
    const handleSearchEvent = function(event : any)
    {
        event.preventDefault();

        refetch({ input : searchInput });
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
        <div className="flex justify-center w-items-center p-10 w-3/5 flex-col">
           <form onSubmit={handleSearchEvent} className="max-w-md mx-auto w-full">
                <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                        <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="none" viewBox="0 0 20 20">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                        </svg>
                    </div>
                    <input value={searchInput} onChange={(e) => setSeachInput(e.target.value)} type="search" id="default-search" className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." />
                    <button className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                </div>
            </form>
            { data?.foods?.map((menu) => <div key={menu?.id} className="max-w-md mx-auto w-full p-3 border-gray-700 border-2 rounded-lg mt-3">
                <p className="text-white">{ menu?.Name }</p>
            </div>)}
            <div className="max-w-md mx-auto w-full rounded-lg mt-3 flex justify-center w-items-center">
                <Pagination count={Math.ceil((data?.foodsCount ?? 0) / 5)} shape="rounded" color="primary" size="medium" onChange={(e, p) => handlePageChangedEvent(p)} />
            </div>
        </div>
    );
}