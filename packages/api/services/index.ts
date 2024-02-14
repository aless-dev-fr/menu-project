import { createFoodService } from "./food.service";
import { createPrismaService } from "./prisma.service";

export const prismaService = createPrismaService({
    isDevelopment: true
})

export const foodService = createFoodService({
    prismaService
})