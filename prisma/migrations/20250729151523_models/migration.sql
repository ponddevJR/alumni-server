/*
  Warnings:

  - Added the required column `fname` to the `alumni` table without a default value. This is not possible if the table is not empty.
  - Added the required column `lname` to the `alumni` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prefix` to the `alumni` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "alumni" ADD COLUMN     "address" TEXT,
ADD COLUMN     "amphure" TEXT,
ADD COLUMN     "createtAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "departmentId" INTEGER,
ADD COLUMN     "edu_levelId" INTEGER,
ADD COLUMN     "email1" TEXT,
ADD COLUMN     "email2" TEXT,
ADD COLUMN     "facebook" TEXT,
ADD COLUMN     "facultyId" INTEGER,
ADD COLUMN     "fname" TEXT NOT NULL,
ADD COLUMN     "lname" TEXT NOT NULL,
ADD COLUMN     "phone1" TEXT,
ADD COLUMN     "phone2" TEXT,
ADD COLUMN     "prefix" TEXT NOT NULL,
ADD COLUMN     "profile" TEXT,
ADD COLUMN     "province" TEXT,
ADD COLUMN     "tambon" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "zipcode" TEXT;

-- CreateTable
CREATE TABLE "professor" (
    "professor_id" TEXT NOT NULL,
    "prefix" TEXT NOT NULL,
    "fname" TEXT NOT NULL,
    "lname" TEXT NOT NULL,
    "profile" TEXT,
    "phone1" TEXT,
    "phone2" TEXT,
    "email1" TEXT,
    "email2" TEXT,
    "facebook" TEXT,
    "address" TEXT,
    "tambon" TEXT,
    "amphure" TEXT,
    "province" TEXT,
    "zipcode" TEXT,
    "facultyId" INTEGER,
    "departmentId" INTEGER,
    "edu_levelId" INTEGER,
    "createtAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "professor_pkey" PRIMARY KEY ("professor_id")
);

-- CreateTable
CREATE TABLE "work_expreriences" (
    "id" SERIAL NOT NULL,
    "job_position" TEXT NOT NULL,
    "company_name" TEXT NOT NULL,
    "company_place" TEXT NOT NULL,
    "start_date" TEXT NOT NULL,
    "end_date" TEXT NOT NULL,
    "job_detail" TEXT NOT NULL,
    "job_resonsibility" TEXT NOT NULL,
    "job_skills" TEXT NOT NULL,
    "createtAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "alumniId" TEXT NOT NULL,

    CONSTRAINT "work_expreriences_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "user_privacy" (
    "id" SERIAL NOT NULL,
    "seeEmail" BOOLEAN NOT NULL DEFAULT false,
    "seePhone" BOOLEAN NOT NULL DEFAULT false,
    "seeFacebook" BOOLEAN NOT NULL DEFAULT false,
    "seeAddress" BOOLEAN NOT NULL DEFAULT false,
    "seeWorkExprerience" BOOLEAN DEFAULT false,
    "allowedAlumniSendEmail" BOOLEAN NOT NULL DEFAULT false,
    "allowedProfessorSendEmail" BOOLEAN DEFAULT true,
    "alumniId" TEXT,
    "professorId" TEXT,
    "createtAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "user_privacy_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "professor_professor_id_key" ON "professor"("professor_id");

-- CreateIndex
CREATE UNIQUE INDEX "user_privacy_alumniId_key" ON "user_privacy"("alumniId");

-- CreateIndex
CREATE UNIQUE INDEX "user_privacy_professorId_key" ON "user_privacy"("professorId");

-- AddForeignKey
ALTER TABLE "work_expreriences" ADD CONSTRAINT "work_expreriences_alumniId_fkey" FOREIGN KEY ("alumniId") REFERENCES "alumni"("alumni_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_privacy" ADD CONSTRAINT "user_privacy_alumniId_fkey" FOREIGN KEY ("alumniId") REFERENCES "alumni"("alumni_id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_privacy" ADD CONSTRAINT "user_privacy_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professor"("professor_id") ON DELETE SET NULL ON UPDATE CASCADE;
