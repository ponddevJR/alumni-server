-- CreateTable
CREATE TABLE "alumni" (
    "alumni_id" TEXT NOT NULL,

    CONSTRAINT "alumni_pkey" PRIMARY KEY ("alumni_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "alumni_alumni_id_key" ON "alumni"("alumni_id");
