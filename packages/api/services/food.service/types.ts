import type { TPrismaService } from "../prisma.service"

export type TCreateFoodServiceOptions = {
  prismaService: TPrismaService
}

// eslint-disable-next-line @typescript-eslint/ban-types
export type TCreateFoodServiceOptionsWithExtras = TCreateFoodServiceOptions & {}