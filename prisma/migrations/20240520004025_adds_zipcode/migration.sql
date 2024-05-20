-- CreateTable
CREATE TABLE "ZipCode" (
    "zip" TEXT NOT NULL,
    "type" TEXT,
    "primaryCity" TEXT,
    "acceptableCities" TEXT,
    "state" TEXT,
    "county" TEXT,
    "timezone" TEXT,
    "areaCodes" TEXT,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,
    "worldRegion" TEXT,
    "country" TEXT,
    "decommissioned" TEXT,
    "estimatedPopulation" TEXT,
    "notes" TEXT,

    CONSTRAINT "ZipCode_pkey" PRIMARY KEY ("zip")
);
