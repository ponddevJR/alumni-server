-- AlterTable
ALTER TABLE "public"."alumni" ADD COLUMN     "canUse" BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE "public"."professor" ADD COLUMN     "canUse" BOOLEAN NOT NULL DEFAULT true;
