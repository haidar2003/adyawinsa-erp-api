/*
  Warnings:

  - The `productId` column on the `track_id_object` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "track_id_object" DROP COLUMN "productId",
ADD COLUMN     "productId" INTEGER NOT NULL DEFAULT -1;
