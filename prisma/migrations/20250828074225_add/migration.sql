-- CreateTable
CREATE TABLE "public"."news_donatios" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "short_detail" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "target_money" INTEGER,
    "current_money" INTEGER,
    "donate_end" TEXT,
    "isPublish" BOOLEAN NOT NULL,
    "date" TEXT NOT NULL,
    "month" TEXT NOT NULL,
    "year" TEXT NOT NULL,
    "view" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "news_donatios_pkey" PRIMARY KEY ("id")
);
