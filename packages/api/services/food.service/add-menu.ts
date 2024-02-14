import { prismaService } from ".."

type IaddMenuProps = {
    name : string,
    description : string,
    price : number,
    country : string
}

export const addMenu = () => async ({ name , description, price, country } : IaddMenuProps) => {
    const menu = await prismaService.menuItem.create({
        data : {
            "Name" :name,
            "Description" : description,
            "Country" : country,
            "Price" : price   
        }
    });
    return (menu);
}
