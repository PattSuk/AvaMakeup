/*
  Warnings:

  - Made the column `eventId` on table `Appointment` required. The migration will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE `Appointment` MODIFY `eventId` INT NOT NULL;
