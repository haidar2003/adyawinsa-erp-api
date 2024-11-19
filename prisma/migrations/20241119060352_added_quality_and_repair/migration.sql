/*
  Warnings:

  - A unique constraint covering the columns `[track_id]` on the table `production_single_product_draft` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[imove_scrap_id]` on the table `production_single_product_draft` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[repair_job_id]` on the table `production_single_product_draft` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `total_ng_repair` to the `production_single_product_draft` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_ng_scrap` to the `production_single_product_draft` table without a default value. This is not possible if the table is not empty.
  - Added the required column `total_ok` to the `production_single_product_draft` table without a default value. This is not possible if the table is not empty.
  - Added the required column `track_id` to the `production_single_product_draft` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "production_single_product_draft" ADD COLUMN     "imove_scrap_id" INTEGER,
ADD COLUMN     "repair_job_id" TEXT,
ADD COLUMN     "repair_reason" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "scrap_reason" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "total_ng_repair" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_ng_scrap" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "total_ok" DOUBLE PRECISION NOT NULL,
ADD COLUMN     "track_id" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "repair_job" (
    "org_id" INTEGER NOT NULL,
    "creation_date_time" TIMESTAMPTZ(6) NOT NULL,
    "track_id" TEXT NOT NULL,
    "starting_locator_id" INTEGER NOT NULL DEFAULT -1,
    "imove_repair_id" INTEGER,
    "repair_status" TEXT NOT NULL,

    CONSTRAINT "repair_job_pkey" PRIMARY KEY ("org_id","creation_date_time")
);

-- CreateTable
CREATE TABLE "quality_check" (
    "org_id" INTEGER NOT NULL,
    "creation_date_time" TIMESTAMPTZ(6) NOT NULL,
    "locator_id" INTEGER NOT NULL DEFAULT -1,
    "track_id" TEXT NOT NULL,
    "checker_name" TEXT NOT NULL,
    "customer" TEXT NOT NULL,
    "total_ok" DOUBLE PRECISION NOT NULL,
    "scrap_reason" TEXT NOT NULL DEFAULT '',
    "total_ng_scrap" DOUBLE PRECISION NOT NULL,
    "imove_scrap_id" INTEGER,
    "repair_reason" TEXT NOT NULL DEFAULT '',
    "total_ng_repair" DOUBLE PRECISION NOT NULL,
    "repair_job_id" TEXT,

    CONSTRAINT "quality_check_pkey" PRIMARY KEY ("org_id","creation_date_time")
);

-- CreateIndex
CREATE UNIQUE INDEX "repair_job_track_id_key" ON "repair_job"("track_id");

-- CreateIndex
CREATE UNIQUE INDEX "repair_job_imove_repair_id_key" ON "repair_job"("imove_repair_id");

-- CreateIndex
CREATE UNIQUE INDEX "quality_check_imove_scrap_id_key" ON "quality_check"("imove_scrap_id");

-- CreateIndex
CREATE UNIQUE INDEX "production_single_product_draft_track_id_key" ON "production_single_product_draft"("track_id");

-- CreateIndex
CREATE UNIQUE INDEX "production_single_product_draft_imove_scrap_id_key" ON "production_single_product_draft"("imove_scrap_id");

-- CreateIndex
CREATE UNIQUE INDEX "production_single_product_draft_repair_job_id_key" ON "production_single_product_draft"("repair_job_id");

-- AddForeignKey
ALTER TABLE "production_single_product_draft" ADD CONSTRAINT "production_single_product_draft_track_id_fkey" FOREIGN KEY ("track_id") REFERENCES "track_id_object"("track_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "production_single_product_draft" ADD CONSTRAINT "production_single_product_draft_imove_scrap_id_fkey" FOREIGN KEY ("imove_scrap_id") REFERENCES "inventory_move_draft"("movement_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "production_single_product_draft" ADD CONSTRAINT "production_single_product_draft_repair_job_id_fkey" FOREIGN KEY ("repair_job_id") REFERENCES "repair_job"("track_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_job" ADD CONSTRAINT "repair_job_track_id_fkey" FOREIGN KEY ("track_id") REFERENCES "track_id_object"("track_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "repair_job" ADD CONSTRAINT "repair_job_imove_repair_id_fkey" FOREIGN KEY ("imove_repair_id") REFERENCES "inventory_move_draft"("movement_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quality_check" ADD CONSTRAINT "quality_check_track_id_fkey" FOREIGN KEY ("track_id") REFERENCES "track_id_object"("track_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quality_check" ADD CONSTRAINT "quality_check_imove_scrap_id_fkey" FOREIGN KEY ("imove_scrap_id") REFERENCES "inventory_move_draft"("movement_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "quality_check" ADD CONSTRAINT "quality_check_repair_job_id_fkey" FOREIGN KEY ("repair_job_id") REFERENCES "repair_job"("track_id") ON DELETE SET NULL ON UPDATE CASCADE;
