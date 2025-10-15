/*
  Warnings:

  - You are about to drop the column `address` on the `alumni` table. All the data in the column will be lost.
  - You are about to drop the column `amphure` on the `alumni` table. All the data in the column will be lost.
  - You are about to drop the column `email1` on the `alumni` table. All the data in the column will be lost.
  - You are about to drop the column `email2` on the `alumni` table. All the data in the column will be lost.
  - You are about to drop the column `facebook` on the `alumni` table. All the data in the column will be lost.
  - You are about to drop the column `phone1` on the `alumni` table. All the data in the column will be lost.
  - You are about to drop the column `phone2` on the `alumni` table. All the data in the column will be lost.
  - You are about to drop the column `province` on the `alumni` table. All the data in the column will be lost.
  - You are about to drop the column `tambon` on the `alumni` table. All the data in the column will be lost.
  - You are about to drop the column `zipcode` on the `alumni` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."alumni" DROP COLUMN "address",
DROP COLUMN "amphure",
DROP COLUMN "email1",
DROP COLUMN "email2",
DROP COLUMN "facebook",
DROP COLUMN "phone1",
DROP COLUMN "phone2",
DROP COLUMN "province",
DROP COLUMN "tambon",
DROP COLUMN "zipcode";

-- CreateTable
CREATE TABLE "public"."alumni_contract" (
    "id" SERIAL NOT NULL,
    "alumniId" TEXT,
    "phone1" TEXT,
    "phone2" TEXT,
    "email1" TEXT,
    "email2" TEXT,
    "facebook" TEXT,
    "address" TEXT,
    "tambon" TEXT,
    "amphure" TEXT,
    "province" TEXT,
    "zipcode" TEXT,
    "createtAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "alumni_contract_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "alumni_contract_alumniId_key" ON "public"."alumni_contract"("alumniId");

-- AddForeignKey
ALTER TABLE "public"."alumni_contract" ADD CONSTRAINT "alumni_contract_alumniId_fkey" FOREIGN KEY ("alumniId") REFERENCES "public"."alumni"("alumni_id") ON DELETE SET NULL ON UPDATE CASCADE;
