/*
  Warnings:

  - You are about to drop the column `userAgentDevice` on the `User_Session` table. All the data in the column will be lost.
  - You are about to drop the column `userAgentOS` on the `User_Session` table. All the data in the column will be lost.
  - You are about to drop the column `userAgentType` on the `User_Session` table. All the data in the column will be lost.
  - Added the required column `deviceName` to the `User_Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `User_Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `osName` to the `User_Session` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userAgentName` to the `User_Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `User_Session` DROP COLUMN `userAgentDevice`,
    DROP COLUMN `userAgentOS`,
    DROP COLUMN `userAgentType`,
    ADD COLUMN `deviceName` TEXT NOT NULL,
    ADD COLUMN `name` TEXT NOT NULL,
    ADD COLUMN `osName` TEXT NOT NULL,
    ADD COLUMN `userAgentName` TEXT NOT NULL;
