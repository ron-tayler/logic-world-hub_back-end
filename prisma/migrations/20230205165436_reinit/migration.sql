-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `nick` TEXT NOT NULL,
    `createDate` DATETIME(0) NOT NULL DEFAULT CURRENT_TIMESTAMP(0),
    `is_active` BOOLEAN NOT NULL DEFAULT false,
    `avatar` VARCHAR(255) NOT NULL DEFAULT '',

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_Auth` (
    `userId` INTEGER NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `User_Auth_userId_key`(`userId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mods_Collection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `avatar` VARCHAR(255) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `description` TEXT NOT NULL,
    `createDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_active` BOOLEAN NOT NULL DEFAULT false,
    `author_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mod` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `avatar` VARCHAR(255) NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `description` TEXT NOT NULL,
    `createDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_active` BOOLEAN NOT NULL DEFAULT false,
    `collection_id` INTEGER NOT NULL,
    `views` INTEGER NOT NULL,
    `readme_type` INTEGER NOT NULL,
    `readme` TEXT NOT NULL,
    `change_list_type` INTEGER NOT NULL,
    `change_list` TEXT NOT NULL,
    `repository` VARCHAR(255) NOT NULL,
    `docs_url` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mod_Author` (
    `mod_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `type` INTEGER NOT NULL,

    UNIQUE INDEX `Mod_Author_mod_id_user_id_key`(`mod_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mod_Image` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mod_id` INTEGER NOT NULL,
    `url` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mod_Tag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mod_Version` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mod_id` INTEGER NOT NULL,
    `version` VARCHAR(30) NOT NULL,
    `game_version` VARCHAR(30) NOT NULL,
    `releaseDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mod_Issue` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mod_id` INTEGER NOT NULL,
    `name` VARCHAR(100) NOT NULL,
    `type` ENUM('GENERAL', 'BUGS', 'ANNOUNCEMENTS', 'IDEAS') NOT NULL,
    `author_id` INTEGER NOT NULL,
    `createDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mod_Issue_Post` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `issue_id` INTEGER NOT NULL,
    `author_id` INTEGER NOT NULL,
    `createDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `text` TEXT NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mods_List` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `author_id` INTEGER NOT NULL,
    `is_public` BOOLEAN NOT NULL,
    `name` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mods_Favorits` (
    `user_id` INTEGER NOT NULL,
    `mod_id` INTEGER NOT NULL,

    UNIQUE INDEX `Mods_Favorits_mod_id_user_id_key`(`mod_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mod_Subscribers` (
    `user_id` INTEGER NOT NULL,
    `mod_id` INTEGER NOT NULL,

    UNIQUE INDEX `Mod_Subscribers_mod_id_user_id_key`(`mod_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mod_Download` (
    `user_id` INTEGER NOT NULL,
    `mod_id` INTEGER NOT NULL,
    `version_id` INTEGER NOT NULL,

    INDEX `ModDownload_mod_id_fkey`(`mod_id`),
    INDEX `ModDownload_version_id_fkey`(`version_id`),
    UNIQUE INDEX `Mod_Download_user_id_mod_id_key`(`user_id`, `mod_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ModToMod_Tag` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ModToMod_Tag_AB_unique`(`A`, `B`),
    INDEX `_ModToMod_Tag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ModToMods_List` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ModToMods_List_AB_unique`(`A`, `B`),
    INDEX `_ModToMods_List_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User_Auth` ADD CONSTRAINT `User_Auth_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mods_Collection` ADD CONSTRAINT `Mods_Collection_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mod` ADD CONSTRAINT `Mod_collection_id_fkey` FOREIGN KEY (`collection_id`) REFERENCES `Mods_Collection`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mod_Author` ADD CONSTRAINT `Mod_Author_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mod_Author` ADD CONSTRAINT `Mod_Author_mod_id_fkey` FOREIGN KEY (`mod_id`) REFERENCES `Mod`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mod_Image` ADD CONSTRAINT `Mod_Image_mod_id_fkey` FOREIGN KEY (`mod_id`) REFERENCES `Mod`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mod_Version` ADD CONSTRAINT `Mod_Version_mod_id_fkey` FOREIGN KEY (`mod_id`) REFERENCES `Mod`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mod_Issue` ADD CONSTRAINT `Mod_Issue_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mod_Issue` ADD CONSTRAINT `Mod_Issue_mod_id_fkey` FOREIGN KEY (`mod_id`) REFERENCES `Mod`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mod_Issue_Post` ADD CONSTRAINT `Mod_Issue_Post_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mod_Issue_Post` ADD CONSTRAINT `Mod_Issue_Post_issue_id_fkey` FOREIGN KEY (`issue_id`) REFERENCES `Mod_Issue`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mods_List` ADD CONSTRAINT `Mods_List_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mods_Favorits` ADD CONSTRAINT `Mods_Favorits_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mods_Favorits` ADD CONSTRAINT `Mods_Favorits_mod_id_fkey` FOREIGN KEY (`mod_id`) REFERENCES `Mod`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mod_Subscribers` ADD CONSTRAINT `Mod_Subscribers_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mod_Subscribers` ADD CONSTRAINT `Mod_Subscribers_mod_id_fkey` FOREIGN KEY (`mod_id`) REFERENCES `Mod`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mod_Download` ADD CONSTRAINT `Mod_Download_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mod_Download` ADD CONSTRAINT `ModDownload_mod_id_fkey` FOREIGN KEY (`mod_id`) REFERENCES `Mod`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mod_Download` ADD CONSTRAINT `ModDownload_version_id_fkey` FOREIGN KEY (`version_id`) REFERENCES `Mod_Version`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ModToMod_Tag` ADD CONSTRAINT `_ModToMod_Tag_A_fkey` FOREIGN KEY (`A`) REFERENCES `Mod`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ModToMod_Tag` ADD CONSTRAINT `_ModToMod_Tag_B_fkey` FOREIGN KEY (`B`) REFERENCES `Mod_Tag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ModToMods_List` ADD CONSTRAINT `_ModToMods_List_A_fkey` FOREIGN KEY (`A`) REFERENCES `Mod`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ModToMods_List` ADD CONSTRAINT `_ModToMods_List_B_fkey` FOREIGN KEY (`B`) REFERENCES `Mods_List`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
