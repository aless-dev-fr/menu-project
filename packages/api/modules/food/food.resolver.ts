import { prismaService } from "../../services";

export interface MenuItemInput
{
    Name: string
    Description: string
    Country: string
    Price: number
}

export const foods = async () => {
    return await prismaService.menuItem.findMany();
}

export const createMenuItem = async (input : MenuItemInput) => {
    return await prismaService.menuItem.create({
        data : {
            Name : input.Name,
            Description : input.Description,
            Country : input.Country,
            Price : input.Price
        }
    });
}