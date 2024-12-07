/*
  Warnings:

  - A unique constraint covering the columns `[imove_main_id]` on the table `production_single_product_draft` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "production_single_product_draft" ADD COLUMN     "imove_main_id" INTEGER;

-- CreateIndex
CREATE UNIQUE INDEX "production_single_product_draft_imove_main_id_key" ON "production_single_product_draft"("imove_main_id");

-- AddForeignKey
ALTER TABLE "production_single_product_draft" ADD CONSTRAINT "production_single_product_draft_imove_main_id_fkey" FOREIGN KEY ("imove_main_id") REFERENCES "inventory_move_draft"("movement_id") ON DELETE SET NULL ON UPDATE CASCADE;
