/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

export {
  discriminators,
  FileList,
  ProjectFile,
  Resource,
  BaseResource,
  ProjectFileProperties,
  ApiError,
  ODataError,
  FileStorageInfo,
  TrackedResource,
  ProjectTask,
  ProjectTaskProperties,
  CommandProperties,
  DataMigrationService,
  ServiceSku,
  Project,
  ConnectionInfo,
  DatabaseInfo,
  ConnectToSourceMySqlTaskProperties,
  ConnectToSourceMySqlTaskInput,
  MySqlConnectionInfo,
  ConnectToSourceNonSqlTaskOutput,
  ServerProperties,
  ReportableException,
  MigrateSchemaSqlServerSqlDbTaskProperties,
  MigrateSchemaSqlServerSqlDbTaskInput,
  SqlMigrationTaskInput,
  SqlConnectionInfo,
  MigrateSchemaSqlServerSqlDbDatabaseInput,
  SchemaMigrationSetting,
  MigrateSchemaSqlServerSqlDbTaskOutput,
  MigrateSchemaSqlServerSqlDbTaskOutputMigrationLevel,
  MigrateSchemaSqlServerSqlDbTaskOutputDatabaseLevel,
  MigrateSchemaSqlServerSqlDbTaskOutputError,
  MigrateSchemaSqlTaskOutputError,
  MongoDbCancelCommand,
  MongoDbCommandInput,
  MongoDbFinishCommandInput,
  MongoDbFinishCommand,
  MongoDbRestartCommand,
  MigrateMISyncCompleteCommandProperties,
  MigrateMISyncCompleteCommandInput,
  MigrateMISyncCompleteCommandOutput,
  MigrateSyncCompleteCommandProperties,
  MigrateSyncCompleteCommandInput,
  MigrateSyncCompleteCommandOutput,
  MiSqlConnectionInfo,
  PostgreSqlConnectionInfo,
  MongoDbConnectionInfo,
  GetTdeCertificatesSqlTaskProperties,
  GetTdeCertificatesSqlTaskInput,
  FileShare,
  SelectedCertificateInput,
  GetTdeCertificatesSqlTaskOutput,
  ValidateMongoDbTaskProperties,
  MongoDbMigrationSettings,
  MongoDbDatabaseSettings,
  MongoDbCollectionSettings,
  MongoDbShardKeySetting,
  MongoDbShardKeyField,
  MongoDbThrottlingSettings,
  MongoDbMigrationProgress,
  MongoDbProgress,
  MongoDbError,
  MongoDbDatabaseProgress,
  MongoDbCollectionProgress,
  ValidateMigrationInputSqlServerSqlMISyncTaskProperties,
  ValidateMigrationInputSqlServerSqlMISyncTaskInput,
  SqlServerSqlMISyncTaskInput,
  MigrateSqlServerSqlMIDatabaseInput,
  AzureActiveDirectoryApp,
  ValidateMigrationInputSqlServerSqlMISyncTaskOutput,
  ValidateMigrationInputSqlServerSqlMITaskProperties,
  ValidateMigrationInputSqlServerSqlMITaskInput,
  BlobShare,
  ValidateMigrationInputSqlServerSqlMITaskOutput,
  DatabaseBackupInfo,
  ValidateMigrationInputSqlServerSqlDbSyncTaskProperties,
  ValidateSyncMigrationInputSqlServerTaskInput,
  MigrateSqlServerSqlDbSyncDatabaseInput,
  ValidateSyncMigrationInputSqlServerTaskOutput,
  MigratePostgreSqlAzureDbForPostgreSqlSyncTaskProperties,
  MigratePostgreSqlAzureDbForPostgreSqlSyncTaskInput,
  MigratePostgreSqlAzureDbForPostgreSqlSyncDatabaseInput,
  MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutput,
  MigrateMySqlAzureDbForMySqlSyncTaskProperties,
  MigrateMySqlAzureDbForMySqlSyncTaskInput,
  MigrateMySqlAzureDbForMySqlSyncDatabaseInput,
  MigrateMySqlAzureDbForMySqlSyncTaskOutput,
  MigrateSqlServerSqlDbSyncTaskInput,
  MigrationValidationOptions,
  MigrateSqlServerSqlDbSyncTaskProperties,
  MigrateSqlServerSqlDbSyncTaskOutput,
  MigrateSqlServerSqlDbTaskInput,
  MigrateSqlServerSqlDbDatabaseInput,
  MigrateSqlServerSqlDbTaskProperties,
  MigrateSqlServerSqlDbTaskOutput,
  MigrateSqlServerSqlMISyncTaskInput,
  MigrateSqlServerSqlMISyncTaskProperties,
  MigrateSqlServerSqlMISyncTaskOutput,
  MigrateSqlServerSqlMITaskInput,
  MigrateSqlServerSqlMITaskProperties,
  MigrateSqlServerSqlMITaskOutput,
  MigrateMongoDbTaskProperties,
  ConnectToTargetAzureDbForMySqlTaskProperties,
  ConnectToTargetAzureDbForMySqlTaskInput,
  ConnectToTargetAzureDbForMySqlTaskOutput,
  ConnectToTargetSqlMISyncTaskProperties,
  ConnectToTargetSqlMISyncTaskInput,
  ConnectToTargetSqlMISyncTaskOutput,
  ConnectToTargetSqlMITaskProperties,
  ConnectToTargetSqlMITaskInput,
  ConnectToTargetSqlMITaskOutput,
  GetUserTablesSqlSyncTaskProperties,
  GetUserTablesSqlSyncTaskInput,
  GetUserTablesSqlSyncTaskOutput,
  DatabaseTable,
  GetUserTablesSqlTaskProperties,
  GetUserTablesSqlTaskInput,
  GetUserTablesSqlTaskOutput,
  ConnectToTargetAzureDbForPostgreSqlSyncTaskProperties,
  ConnectToTargetAzureDbForPostgreSqlSyncTaskInput,
  ConnectToTargetAzureDbForPostgreSqlSyncTaskOutput,
  ConnectToTargetSqlSqlDbSyncTaskProperties,
  ConnectToTargetSqlSqlDbSyncTaskInput,
  ConnectToTargetSqlDbTaskOutput,
  ConnectToTargetSqlDbTaskProperties,
  ConnectToTargetSqlDbTaskInput,
  ConnectToSourcePostgreSqlSyncTaskProperties,
  ConnectToSourcePostgreSqlSyncTaskInput,
  ConnectToSourcePostgreSqlSyncTaskOutput,
  ConnectToSourceSqlServerSyncTaskProperties,
  ConnectToSourceSqlServerTaskInput,
  ConnectToSourceSqlServerTaskOutput,
  ConnectToSourceSqlServerTaskProperties,
  ConnectToMongoDbTaskProperties,
  MongoDbClusterInfo,
  MongoDbDatabaseInfo,
  MongoDbObjectInfo,
  MongoDbCollectionInfo,
  MongoDbShardKeyInfo,
  MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputDatabaseError,
  SyncMigrationDatabaseErrorEvent,
  MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputError,
  MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputTableLevel,
  MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputDatabaseLevel,
  MigratePostgreSqlAzureDbForPostgreSqlSyncTaskOutputMigrationLevel,
  MigrateMySqlAzureDbForMySqlSyncTaskOutputDatabaseError,
  MigrateMySqlAzureDbForMySqlSyncTaskOutputError,
  MigrateMySqlAzureDbForMySqlSyncTaskOutputTableLevel,
  MigrateMySqlAzureDbForMySqlSyncTaskOutputDatabaseLevel,
  MigrateMySqlAzureDbForMySqlSyncTaskOutputMigrationLevel,
  MigrateSqlServerSqlDbSyncTaskOutputDatabaseError,
  MigrateSqlServerSqlDbSyncTaskOutputError,
  MigrateSqlServerSqlDbSyncTaskOutputTableLevel,
  MigrateSqlServerSqlDbSyncTaskOutputDatabaseLevel,
  MigrateSqlServerSqlDbSyncTaskOutputMigrationLevel,
  MigrateSqlServerSqlDbTaskOutputError,
  MigrateSqlServerSqlDbTaskOutputTableLevel,
  MigrateSqlServerSqlDbTaskOutputDatabaseLevel,
  DataItemMigrationSummaryResult,
  DatabaseSummaryResult,
  MigrateSqlServerSqlDbTaskOutputMigrationLevel,
  MigrationValidationResult,
  MigrationValidationDatabaseSummaryResult,
  MigrationReportResult,
  MigrateSqlServerSqlMISyncTaskOutputError,
  MigrateSqlServerSqlMISyncTaskOutputDatabaseLevel,
  BackupSetInfo,
  BackupFileInfo,
  MigrateSqlServerSqlMISyncTaskOutputMigrationLevel,
  MigrateSqlServerSqlMITaskOutputError,
  MigrateSqlServerSqlMITaskOutputLoginLevel,
  MigrateSqlServerSqlMITaskOutputAgentJobLevel,
  MigrateSqlServerSqlMITaskOutputDatabaseLevel,
  MigrateSqlServerSqlMITaskOutputMigrationLevel,
  StartMigrationScenarioServerRoleResult,
  OrphanedUserInfo,
  ConnectToSourceSqlServerTaskOutputAgentJobLevel,
  MigrationEligibilityInfo,
  ConnectToSourceSqlServerTaskOutputLoginLevel,
  ConnectToSourceSqlServerTaskOutputDatabaseLevel,
  DatabaseFileInfo,
  ConnectToSourceSqlServerTaskOutputTaskLevel
} from "../models/mappers";

