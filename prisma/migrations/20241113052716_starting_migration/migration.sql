-- CreateTable
CREATE TABLE "inventory_move_draft" (
    "org_id" INTEGER NOT NULL,
    "creation_date_time" TIMESTAMPTZ(6) NOT NULL,
    "movement_id" INTEGER NOT NULL,
    "data" JSON NOT NULL,

    CONSTRAINT "inventory_move_draft_pkey" PRIMARY KEY ("org_id","creation_date_time")
);

-- CreateTable
CREATE TABLE "shipment_draft" (
    "org_id" INTEGER NOT NULL,
    "creation_date_time" TIMESTAMPTZ(6) NOT NULL,
    "erp_id" INTEGER NOT NULL,
    "data" JSON NOT NULL,

    CONSTRAINT "shipment_draft_pkey" PRIMARY KEY ("org_id","creation_date_time")
);

-- CreateTable
CREATE TABLE "production_single_product_draft" (
    "org_id" INTEGER NOT NULL,
    "creation_date_time" TIMESTAMPTZ(6) NOT NULL,
    "erp_id" INTEGER NOT NULL,
    "data" JSON NOT NULL,

    CONSTRAINT "production_single_product_draft_pkey" PRIMARY KEY ("org_id","creation_date_time")
);

-- CreateIndex
CREATE UNIQUE INDEX "inventory_move_draft_movement_id_key" ON "inventory_move_draft"("movement_id");

-- CreateIndex
CREATE UNIQUE INDEX "shipment_draft_erp_id_key" ON "shipment_draft"("erp_id");

-- CreateIndex
CREATE UNIQUE INDEX "production_single_product_draft_erp_id_key" ON "production_single_product_draft"("erp_id");
