-- AlterTable
ALTER TABLE "material_receive_draft" ADD COLUMN     "vendor_id" INTEGER NOT NULL DEFAULT -1;

-- AlterTable
ALTER TABLE "shipment_draft" ADD COLUMN     "vendor_id" INTEGER NOT NULL DEFAULT -1;
