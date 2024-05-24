-- CreateTable
CREATE TABLE "ZipCode" (
    "zip" TEXT NOT NULL,
    "primaryCity" TEXT,
    "state" TEXT,
    "timezone" TEXT,
    "latitude" DOUBLE PRECISION NOT NULL,
    "longitude" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "ZipCode_pkey" PRIMARY KEY ("zip")
);
