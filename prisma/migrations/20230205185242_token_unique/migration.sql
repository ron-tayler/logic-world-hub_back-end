/*
  Warnings:

  - A unique constraint covering the columns `[token]` on the table `User_Token` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `User_Token_token_key` ON `User_Token`(`token`);
