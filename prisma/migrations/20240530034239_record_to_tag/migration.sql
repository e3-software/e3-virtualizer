/*
  Warnings:

  - You are about to drop the `TagsOnRecord` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_RecordToTag` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "TagsOnRecord" DROP CONSTRAINT "TagsOnRecord_recordId_fkey";

-- DropForeignKey
ALTER TABLE "TagsOnRecord" DROP CONSTRAINT "TagsOnRecord_tagId_fkey";

-- DropForeignKey
ALTER TABLE "_RecordToTag" DROP CONSTRAINT "_RecordToTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_RecordToTag" DROP CONSTRAINT "_RecordToTag_B_fkey";

-- DropTable
DROP TABLE "TagsOnRecord";

-- DropTable
DROP TABLE "_RecordToTag";

-- CreateTable
CREATE TABLE "_RecordToTags" (
    "recordId" INTEGER NOT NULL,
    "tagId" INTEGER NOT NULL,
    "assignedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "_RecordToTags_pkey" PRIMARY KEY ("recordId","tagId")
);

-- AddForeignKey
ALTER TABLE "_RecordToTags" ADD CONSTRAINT "_RecordToTags_recordId_fkey" FOREIGN KEY ("recordId") REFERENCES "Record"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_RecordToTags" ADD CONSTRAINT "_RecordToTags_tagId_fkey" FOREIGN KEY ("tagId") REFERENCES "Tag"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
