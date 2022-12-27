-- CreateTable
CREATE TABLE `ModsCollection` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `avatar` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_active` BOOLEAN NOT NULL DEFAULT false,
    `author_id` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Mod` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `avatar` VARCHAR(191) NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `createDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `is_active` BOOLEAN NOT NULL DEFAULT false,
    `collection_id` INTEGER NOT NULL,
    `views` INTEGER NOT NULL,
    `readme_type` INTEGER NOT NULL,
    `readme` VARCHAR(191) NOT NULL,
    `change_list_type` INTEGER NOT NULL,
    `change_list` VARCHAR(191) NOT NULL,
    `repository` VARCHAR(191) NOT NULL,
    `docs_url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModAuthor` (
    `mod_id` INTEGER NOT NULL,
    `user_id` INTEGER NOT NULL,
    `type` INTEGER NOT NULL,

    UNIQUE INDEX `ModAuthor_mod_id_user_id_key`(`mod_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModImage` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mod_id` INTEGER NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModTag` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModVersion` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mod_id` INTEGER NOT NULL,
    `version` VARCHAR(191) NOT NULL,
    `game_version` VARCHAR(191) NOT NULL,
    `releaseDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModIssue` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mod_id` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `type` INTEGER NOT NULL,
    `author_id` INTEGER NOT NULL,
    `createDate` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModIssuePost` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `issue_id` INTEGER NOT NULL,
    `author_id` INTEGER NOT NULL,
    `createDate` DATETIME(3) NOT NULL,
    `text` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModsList` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `author_id` INTEGER NOT NULL,
    `is_public` BOOLEAN NOT NULL,
    `name` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModsFavorits` (
    `user_id` INTEGER NOT NULL,
    `mod_id` INTEGER NOT NULL,

    UNIQUE INDEX `ModsFavorits_mod_id_user_id_key`(`mod_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModSubscribers` (
    `user_id` INTEGER NOT NULL,
    `mod_id` INTEGER NOT NULL,

    UNIQUE INDEX `ModSubscribers_mod_id_user_id_key`(`mod_id`, `user_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ModDownload` (
    `user_id` INTEGER NOT NULL,
    `mod_id` INTEGER NOT NULL,
    `version_id` INTEGER NOT NULL,

    UNIQUE INDEX `ModDownload_user_id_mod_id_key`(`user_id`, `mod_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ModToModTag` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ModToModTag_AB_unique`(`A`, `B`),
    INDEX `_ModToModTag_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ModToModsList` (
    `A` INTEGER NOT NULL,
    `B` INTEGER NOT NULL,

    UNIQUE INDEX `_ModToModsList_AB_unique`(`A`, `B`),
    INDEX `_ModToModsList_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `ModsCollection` ADD CONSTRAINT `ModsCollection_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Mod` ADD CONSTRAINT `Mod_collection_id_fkey` FOREIGN KEY (`collection_id`) REFERENCES `ModsCollection`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModAuthor` ADD CONSTRAINT `ModAuthor_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModAuthor` ADD CONSTRAINT `ModAuthor_mod_id_fkey` FOREIGN KEY (`mod_id`) REFERENCES `Mod`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModImage` ADD CONSTRAINT `ModImage_mod_id_fkey` FOREIGN KEY (`mod_id`) REFERENCES `Mod`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModVersion` ADD CONSTRAINT `ModVersion_mod_id_fkey` FOREIGN KEY (`mod_id`) REFERENCES `Mod`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModIssue` ADD CONSTRAINT `ModIssue_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModIssue` ADD CONSTRAINT `ModIssue_mod_id_fkey` FOREIGN KEY (`mod_id`) REFERENCES `Mod`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModIssuePost` ADD CONSTRAINT `ModIssuePost_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModIssuePost` ADD CONSTRAINT `ModIssuePost_issue_id_fkey` FOREIGN KEY (`issue_id`) REFERENCES `ModIssue`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModsList` ADD CONSTRAINT `ModsList_author_id_fkey` FOREIGN KEY (`author_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModsFavorits` ADD CONSTRAINT `ModsFavorits_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModsFavorits` ADD CONSTRAINT `ModsFavorits_mod_id_fkey` FOREIGN KEY (`mod_id`) REFERENCES `Mod`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModSubscribers` ADD CONSTRAINT `ModSubscribers_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModSubscribers` ADD CONSTRAINT `ModSubscribers_mod_id_fkey` FOREIGN KEY (`mod_id`) REFERENCES `Mod`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModDownload` ADD CONSTRAINT `ModDownload_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModDownload` ADD CONSTRAINT `ModDownload_mod_id_fkey` FOREIGN KEY (`mod_id`) REFERENCES `Mod`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ModDownload` ADD CONSTRAINT `ModDownload_version_id_fkey` FOREIGN KEY (`version_id`) REFERENCES `ModVersion`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ModToModTag` ADD CONSTRAINT `_ModToModTag_A_fkey` FOREIGN KEY (`A`) REFERENCES `Mod`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ModToModTag` ADD CONSTRAINT `_ModToModTag_B_fkey` FOREIGN KEY (`B`) REFERENCES `ModTag`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ModToModsList` ADD CONSTRAINT `_ModToModsList_A_fkey` FOREIGN KEY (`A`) REFERENCES `Mod`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ModToModsList` ADD CONSTRAINT `_ModToModsList_B_fkey` FOREIGN KEY (`B`) REFERENCES `ModsList`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
