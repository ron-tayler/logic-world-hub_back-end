/*
  Warnings:

  - You are about to drop the column `token` on the `User_Token` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `User_Token` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[access_token]` on the table `User_Token` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[refresh_token]` on the table `User_Token` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `access_token` to the `User_Token` table without a default value. This is not possible if the table is not empty.
  - Added the required column `refresh_token` to the `User_Token` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `User_Token_token_key` ON `User_Token`;

-- AlterTable
ALTER TABLE `User_Token`
    DROP COLUMN `type`,
    RENAME COLUMN `token` TO `access_token`,
    ADD COLUMN `is_super_access` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `refresh_token` VARCHAR(100) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `User_Token_access_token_key` ON `User_Token`(`access_token`);

-- CreateIndex
CREATE UNIQUE INDEX `User_Token_refresh_token_key` ON `User_Token`(`refresh_token`);
