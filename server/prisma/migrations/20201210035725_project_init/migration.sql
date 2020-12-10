/*
  Warnings:

  - Added the required column `confirm` to the `Appointment` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Appointment` ADD COLUMN     `confirm` BOOLEAN NOT NULL;
