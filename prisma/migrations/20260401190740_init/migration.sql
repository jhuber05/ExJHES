-- CreateTable
CREATE TABLE "Project" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "baseColor" TEXT NOT NULL,
    "secondaryColor" TEXT NOT NULL,
    "flakeType" TEXT NOT NULL,
    "flakeDensity" INTEGER NOT NULL,
    "flakeSize" TEXT NOT NULL,
    "glossLevel" INTEGER NOT NULL,
    "metallicEffect" BOOLEAN NOT NULL,
    "texture" TEXT NOT NULL,
    "roomType" TEXT NOT NULL,
    "originalImage" TEXT,
    "generatedImage" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
