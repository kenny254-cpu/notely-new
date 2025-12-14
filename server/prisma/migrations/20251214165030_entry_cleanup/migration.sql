/*
  Warnings:

  - You are about to drop the column `emailVerified` on the `Users` table. All the data in the column will be lost.
  - You are about to drop the column `emailVerifiedAt` on the `Users` table. All the data in the column will be lost.

*/
BEGIN TRY

BEGIN TRAN;

-- AlterTable
ALTER TABLE [dbo].[Users] DROP COLUMN [emailVerified],
[emailVerifiedAt];

-- CreateTable
CREATE TABLE [dbo].[Contacts] (
    [ContactId] NVARCHAR(1000) NOT NULL,
    [UserId] NVARCHAR(1000),
    [Name] NVARCHAR(1000) NOT NULL,
    [Email] NVARCHAR(1000) NOT NULL,
    [Subject] NVARCHAR(1000) NOT NULL,
    [Message] TEXT NOT NULL,
    [Date_Created] DATETIME2 NOT NULL CONSTRAINT [Contacts_Date_Created_df] DEFAULT CURRENT_TIMESTAMP,
    CONSTRAINT [Contacts_pkey] PRIMARY KEY CLUSTERED ([ContactId])
);

-- AddForeignKey
ALTER TABLE [dbo].[Contacts] ADD CONSTRAINT [Contacts_UserId_fkey] FOREIGN KEY ([UserId]) REFERENCES [dbo].[Users]([UserId]) ON DELETE SET NULL ON UPDATE CASCADE;

COMMIT TRAN;

END TRY
BEGIN CATCH

IF @@TRANCOUNT > 0
BEGIN
    ROLLBACK TRAN;
END;
THROW

END CATCH
