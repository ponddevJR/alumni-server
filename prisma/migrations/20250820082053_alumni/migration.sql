-- DropForeignKey
ALTER TABLE "work_expreriences" DROP CONSTRAINT "work_expreriences_alumniId_fkey";

-- AlterTable
ALTER TABLE "alumni" ADD COLUMN     "year_start" INTEGER;

-- AlterTable
ALTER TABLE "work_expreriences" ALTER COLUMN "alumniId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "work_expreriences" ADD CONSTRAINT "work_expreriences_alumniId_fkey" FOREIGN KEY ("alumniId") REFERENCES "alumni"("alumni_id") ON DELETE SET NULL ON UPDATE CASCADE;
