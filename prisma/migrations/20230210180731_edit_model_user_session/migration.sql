/*
  Warnings:

  - You are about to alter the column `ipv4` on the `User_Session` table. The data in that column could be lost. The data in that column will be cast from `VarChar(100)` to `VarChar(30)`.
  - Added the required column `fingerprint_id` to the `User_Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User_Session` ADD COLUMN `fingerprint_id` VARCHAR(30) NOT NULL,
    MODIFY `ipv4` VARCHAR(30) NOT NULL;
