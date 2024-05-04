/*
  Warnings:

  - Added the required column `external_id` to the `Organization` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Organization" ADD COLUMN     "external_id" TEXT NOT NULL;
