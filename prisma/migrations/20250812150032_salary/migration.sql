/*
  Warnings:

  - The `salary` column on the `work_expreriences` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "work_expreriences" DROP COLUMN "salary",
ADD COLUMN     "salary" DOUBLE PRECISION;
