/*
  Warnings:

  - Added the required column `thumnail` to the `news_donatios` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "public"."news_donatios" ADD COLUMN     "thumnail" TEXT NOT NULL;
