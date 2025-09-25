-- AlterTable
ALTER TABLE "professor" ADD COLUMN     "academic_rank" TEXT,
ADD COLUMN     "univercity_position" TEXT;

-- AlterTable
ALTER TABLE "user_privacy" ADD COLUMN     "seeProfile" BOOLEAN NOT NULL DEFAULT false;
