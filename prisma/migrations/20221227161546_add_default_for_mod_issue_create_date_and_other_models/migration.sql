-- AlterTable
ALTER TABLE `modissue` MODIFY `createDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `modissuepost` MODIFY `createDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);

-- AlterTable
ALTER TABLE `modversion` MODIFY `releaseDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3);
