/*
  Warnings:

  - You are about to drop the column `address` on the `professor` table. All the data in the column will be lost.
  - You are about to drop the column `amphure` on the `professor` table. All the data in the column will be lost.
  - You are about to drop the column `email1` on the `professor` table. All the data in the column will be lost.
  - You are about to drop the column `email2` on the `professor` table. All the data in the column will be lost.
  - You are about to drop the column `facebook` on the `professor` table. All the data in the column will be lost.
  - You are about to drop the column `phone1` on the `professor` table. All the data in the column will be lost.
  - You are about to drop the column `phone2` on the `professor` table. All the data in the column will be lost.
  - You are about to drop the column `province` on the `professor` table. All the data in the column will be lost.
  - You are about to drop the column `tambon` on the `professor` table. All the data in the column will be lost.
  - You are about to drop the column `zipcode` on the `professor` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "public"."professor" DROP COLUMN "address",
DROP COLUMN "amphure",
DROP COLUMN "email1",
DROP COLUMN "email2",
DROP COLUMN "facebook",
DROP COLUMN "phone1",
DROP COLUMN "phone2",
DROP COLUMN "province",
DROP COLUMN "tambon",
DROP COLUMN "zipcode";
