/*
  Warnings:

  - You are about to alter the column `type` on the `modissue` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Enum("ModIssue_type")`.

*/
-- AlterTable
ALTER TABLE `modissue` MODIFY `type` ENUM('GENERAL', 'BUGS', 'ANNOUNCEMENTS', 'IDEAS') NOT NULL;
