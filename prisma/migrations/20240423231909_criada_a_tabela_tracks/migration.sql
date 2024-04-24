-- CreateTable
CREATE TABLE "Track" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "lenght" INTEGER NOT NULL,

    CONSTRAINT "Track_pkey" PRIMARY KEY ("id")
);
