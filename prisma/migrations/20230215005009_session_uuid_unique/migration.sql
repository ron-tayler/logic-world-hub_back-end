/*
  Warnings:

  - A unique constraint covering the columns `[uuid]` on the table `User_Session` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `User_Session_uuid_key` ON `User_Session`(`uuid`);
