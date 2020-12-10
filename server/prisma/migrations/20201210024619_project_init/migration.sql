-- CreateTable
CREATE TABLE `User` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `first_name` VARCHAR(191) NOT NULL,
    `last_name` VARCHAR(191) NOT NULL,
    `street_address` VARCHAR(191) NOT NULL,
    `city` VARCHAR(191) NOT NULL,
    `postal_code` VARCHAR(191) NOT NULL,
    `phone` INT NOT NULL,
    `email` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Event` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `type_of_event` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Appointment` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `datetime` DATETIME(3) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `message` VARCHAR(191) NOT NULL,
    `userId` INT NOT NULL,
    `eventId` INT NOT NULL,
UNIQUE INDEX `Appointment.userId_unique`(`userId`),
UNIQUE INDEX `Appointment.eventId_unique`(`eventId`),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Appointment` ADD FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Appointment` ADD FOREIGN KEY (`eventId`) REFERENCES `Event`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
