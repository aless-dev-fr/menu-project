import { createPrismaService } from "./prisma.service";

export const prismaService = createPrismaService({
    isDevelopment: true
})