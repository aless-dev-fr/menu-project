import { ReactNode, createContext, useState } from "react"
import { MenuItem, SeleteFoodMutation, useSeleteFoodMutation } from "../generated/graphql";

interface MyContextFunction
{
    deleteMenuItem : Function
    addItemToMenu : Function
}

interface MyContextData
{
    menu : MenuItem[]
    deleted : SeleteFoodMutation[]
}

interface MyContextType
{
    data : MyContextData
    functions : MyContextFunction
}

const InitContextFunctions : MyContextFunction =  {
    deleteMenuItem : () => {},
    addItemToMenu: () => {}
}

const InitContextData : MyContextData =  {
    menu : [],
    deleted : []
}

const InitContext : MyContextType = {
    data : InitContextData,
    functions : InitContextFunctions
}

export const MyMenuItemContext = createContext<MyContextType>(InitContext);

export function MenuItemContext({ children } : { children : ReactNode })
{
    const [menu, setMenu] = useState<MenuItem[]>([]);
    const [deleted, setDeleted] = useState<SeleteFoodMutation[]>([]);

    const [deleteFood, { data: deleteFoodsData, loading: deleteFoodLoading, error: deleteFoodError }] = useSeleteFoodMutation();
      
    const deleteMenuItem = async function(id : string) : Promise<void>
    {
        const response = await deleteFood({ variables: { id: id }});

        if (response.errors || !response.data)
        {
            console.log(response.errors);
            return;
        }

        setDeleted([...deleted, response.data]);
    }

    const addItemToMenu = function() : void
    {
        fetch("http://localhost:3000/api/food", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name: "name", description: "description", price: 120, country: "country" }),
        })
        .then(response => response.json())
        .then(data => setMenu([...menu, data]))
        .catch(error => console.error('Error adding food:', error));
    }

    const contextData = {
        data : {
            deleted : deleted,
            menu : menu
        },
        functions : {
            deleteMenuItem,
            addItemToMenu
        }
    };

    return (
        <MyMenuItemContext.Provider value={contextData}>
            { children }
        </MyMenuItemContext.Provider>
    );
}