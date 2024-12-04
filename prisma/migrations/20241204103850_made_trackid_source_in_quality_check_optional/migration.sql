-- DropForeignKey
ALTER TABLE "quality_check" DROP CONSTRAINT "quality_check_track_id_fkey";

-- AlterTable
ALTER TABLE "quality_check" ALTER COLUMN "track_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "quality_check" ADD CONSTRAINT "quality_check_track_id_fkey" FOREIGN KEY ("track_id") REFERENCES "track_id_object"("track_id") ON DELETE SET NULL ON UPDATE CASCADE;
