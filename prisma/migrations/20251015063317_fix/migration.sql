/*
  Warnings:

  - You are about to drop the column `createtAt` on the `professor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."professor" DROP COLUMN "createtAt",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
