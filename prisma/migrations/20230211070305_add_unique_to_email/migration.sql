/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `User_Auth` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `User_Auth_email_key` ON `User_Auth`(`email`);
