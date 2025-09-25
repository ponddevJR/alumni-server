/*
  Warnings:

  - Made the column `isInThai` on table `work_expreriences` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "public"."work_expreriences" ALTER COLUMN "isInThai" SET NOT NULL;
