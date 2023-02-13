/*
  Warnings:

  - Added the required column `is_active` to the `User_Auth` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User_Auth` ADD COLUMN `is_active` BOOLEAN NOT NULL;
