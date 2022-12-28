/*
  Warnings:

  - You are about to alter the column `name` on the `mod` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `name` on the `modissue` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `name` on the `modscollection` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `name` on the `modslist` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `name` on the `modtag` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `version` on the `modversion` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(30)`.
  - You are about to alter the column `game_version` on the `modversion` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(30)`.
  - You are about to alter the column `email` on the `userauth` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.
  - You are about to alter the column `password` on the `userauth` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `VarChar(100)`.

*/
-- AlterTable
ALTER TABLE `mod` MODIFY `avatar` VARCHAR(255) NOT NULL,
    MODIFY `name` VARCHAR(100) NOT NULL,
    MODIFY `description` TEXT NOT NULL,
    MODIFY `readme` TEXT NOT NULL,
    MODIFY `change_list` TEXT NOT NULL,
    MODIFY `repository` VARCHAR(255) NOT NULL,
    MODIFY `docs_url` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `modimage` MODIFY `url` VARCHAR(255) NOT NULL;

-- AlterTable
ALTER TABLE `modissue` MODIFY `name` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `modissuepost` MODIFY `text` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `modscollection` MODIFY `avatar` VARCHAR(255) NOT NULL,
    MODIFY `name` VARCHAR(100) NOT NULL,
    MODIFY `description` TEXT NOT NULL;

-- AlterTable
ALTER TABLE `modslist` MODIFY `name` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `modtag` MODIFY `name` VARCHAR(100) NOT NULL;

-- AlterTable
ALTER TABLE `modversion` MODIFY `version` VARCHAR(30) NOT NULL,
    MODIFY `game_version` VARCHAR(30) NOT NULL;

-- AlterTable
ALTER TABLE `user` MODIFY `avatar` VARCHAR(255) NOT NULL DEFAULT '';

-- AlterTable
ALTER TABLE `userauth` MODIFY `email` VARCHAR(100) NOT NULL,
    MODIFY `password` VARCHAR(100) NOT NULL;
