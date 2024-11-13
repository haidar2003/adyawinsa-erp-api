-- CreateTable
CREATE TABLE "track_id_object" (
    "track_id" TEXT NOT NULL,
    "track_type" TEXT NOT NULL,
    "creation_date_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "source_data" JSON NOT NULL,
    "object_data" JSON NOT NULL,

    CONSTRAINT "track_id_object_pkey" PRIMARY KEY ("track_id")
);

-- CreateTable
CREATE TABLE "track_id_history" (
    "track_id" TEXT NOT NULL,
    "update_date_time" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL DEFAULT '',
    "data" JSON NOT NULL,

    CONSTRAINT "track_id_history_pkey" PRIMARY KEY ("track_id","update_date_time")
);

-- CreateTable
CREATE TABLE "track_id_stock" (
    "locator_id" TEXT NOT NULL,
    "key23" TEXT NOT NULL,
    "product_id" TEXT NOT NULL,
    "track_id" TEXT NOT NULL,
    "quantity" DOUBLE PRECISION NOT NULL,
    "data" JSON NOT NULL,

    CONSTRAINT "track_id_stock_pkey" PRIMARY KEY ("locator_id","key23")
);

-- CreateIndex
CREATE UNIQUE INDEX "track_id_object_creation_date_time_key" ON "track_id_object"("creation_date_time" DESC);

-- CreateIndex
CREATE UNIQUE INDEX "track_id_history_update_date_time_key" ON "track_id_history"("update_date_time" DESC);

-- AddForeignKey
ALTER TABLE "track_id_history" ADD CONSTRAINT "track_id_history_track_id_fkey" FOREIGN KEY ("track_id") REFERENCES "track_id_object"("track_id") ON DELETE RESTRICT ON UPDATE CASCADE;
