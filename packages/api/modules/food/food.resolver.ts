import { prismaService } from "../../services";

export const foods = async () => {
    
    return await prismaService.menuItem.findMany();
}