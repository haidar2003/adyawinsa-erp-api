-- CreateTable
CREATE TABLE "material_receive_draft" (
    "org_id" INTEGER NOT NULL,
    "creation_date_time" TIMESTAMPTZ(6) NOT NULL,
    "erp_id" INTEGER NOT NULL,
    "data" JSON NOT NULL,

    CONSTRAINT "material_receive_draft_pkey" PRIMARY KEY ("org_id","creation_date_time")
);

-- CreateIndex
CREATE UNIQUE INDEX "material_receive_draft_erp_id_key" ON "material_receive_draft"("erp_id");
