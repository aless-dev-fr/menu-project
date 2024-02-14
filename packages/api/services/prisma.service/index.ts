import { PrismaClient } from "@prisma/client"

declare global {
  // eslint-disable-next-line no-var, vars-on-top
  var prisma: PrismaClient | undefined
}

// eslint-disable-next-line no-empty-pattern
export function createPrismaService({ isDevelopment }: { isDevelopment?: boolean }) {
  // eslint-disable-next-line functional/no-let
  let prisma: PrismaClient

  // PrismaClient is attached to the `global` object in development to prevent  database connection limit.
  // https://pris.ly/d/help/next-js-best-practices
  if (isDevelopment) {
    if (!(global.prisma instanceof PrismaClient)) {
      global.prisma = new PrismaClient()
    }

    const { prisma: globalPrisma } = global

    prisma = globalPrisma
  } else {
    prisma = new PrismaClient()
  }

  return prisma
}

export type TPrismaService = ReturnType<typeof createPrismaService>