import { prismaService } from "../../services";

export const foods = async () => {
    return await prismaService.menuItem.findMany();
}

export const deleteFood = async (parent : any, _arguments : any, context : any) => {
    return await prismaService.menuItem.delete({ where: { id: parseInt(_arguments.id) } });
}