/*
  Warnings:

  - You are about to drop the column `job_resonsibility` on the `work_expreriences` table. All the data in the column will be lost.
  - Added the required column `job_responsibility` to the `work_expreriences` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "work_expreriences" DROP COLUMN "job_resonsibility",
ADD COLUMN     "job_responsibility" TEXT NOT NULL;
