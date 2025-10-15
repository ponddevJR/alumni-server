-- AlterTable
ALTER TABLE "public"."alumni_contract" ADD COLUMN     "professorProfessor_id" TEXT;

-- AddForeignKey
ALTER TABLE "public"."alumni_contract" ADD CONSTRAINT "alumni_contract_professorProfessor_id_fkey" FOREIGN KEY ("professorProfessor_id") REFERENCES "public"."professor"("professor_id") ON DELETE SET NULL ON UPDATE CASCADE;
