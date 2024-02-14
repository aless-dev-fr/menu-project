-- CreateTable
CREATE TABLE "menuItem" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "Name" TEXT NOT NULL,
    "Description" TEXT,
    "Country" TEXT,
    "Price" INTEGER NOT NULL,

    CONSTRAINT "menuItem_pkey" PRIMARY KEY ("id")
);
