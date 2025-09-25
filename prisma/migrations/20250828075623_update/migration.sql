/*
  Warnings:

  - Added the required column `detail` to the `news_donatios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."news_donatios" ADD COLUMN     "detail" TEXT NOT NULL;
