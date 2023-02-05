-- CreateTable
CREATE TABLE `User_Session` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `userAgent` TEXT NOT NULL,
    `userAgentType` ENUM('WEBKIT', 'OPERA', 'IE', 'CHROME', 'SAFARI', 'MOBILE_SAFARI', 'FIREFOX', 'MOZILLA', 'ANDROID', 'OTHER') NOT NULL,
    `userAgentOS` ENUM('WINDOWS', 'LINUX', 'IOS', 'ANDROID', 'OTHER') NOT NULL,
    `userAgentDevice` TEXT NOT NULL,
    `uuid` VARCHAR(100) NOT NULL,
    `ipv4` VARCHAR(100) NOT NULL,
    `is_active` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_Token` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sessionId` INTEGER NOT NULL,
    `type` ENUM('AUTH', 'REFRESH', 'ACCESS') NOT NULL,
    `token` VARCHAR(100) NOT NULL,
    `createDate` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `is_enable` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User_Session` ADD CONSTRAINT `User_Session_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Token` ADD CONSTRAINT `User_Token_sessionId_fkey` FOREIGN KEY (`sessionId`) REFERENCES `User_Session`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
