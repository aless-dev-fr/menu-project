import { prismaService } from "../../services";

export interface MenuItemInput
{
    Name: string
    Description: string
    Country: string
    Price: number
}

export const foods = async (input : string, limit : number, offset : number) => {
    return await prismaService.menuItem.findMany({
        where : {
            OR: [
                { Name: { contains: input } },
                { Description: { contains: input } }
            ]
        },
        take: limit,
        skip: offset
    });
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

export const count = async (input : string) => {
    return await prismaService.menuItem.count({
        where : {
            OR: [
                { Name: { contains: input } },
                { Description: { contains: input } }
            ]
        }
    });
}