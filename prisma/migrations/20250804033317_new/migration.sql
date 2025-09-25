-- AlterTable
ALTER TABLE "work_expreriences" ADD COLUMN     "isCurrent" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "end_date" DROP NOT NULL;
