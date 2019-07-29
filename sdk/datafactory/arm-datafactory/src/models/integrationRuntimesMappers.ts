/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is regenerated.
 */

export {
  discriminators,
  Activity,
  ActivityDependency,
  ActivityPolicy,
  AmazonMWSLinkedService,
  AmazonMWSObjectDataset,
  AmazonMWSSource,
  AmazonRedshiftLinkedService,
  AmazonRedshiftSource,
  AmazonS3Dataset,
  AmazonS3LinkedService,
  AmazonS3Location,
  AmazonS3ReadSettings,
  AppendVariableActivity,
  AvroFormat,
  AzureBatchLinkedService,
  AzureBlobDataset,
  AzureBlobFSDataset,
  AzureBlobFSLinkedService,
  AzureBlobFSLocation,
  AzureBlobFSReadSettings,
  AzureBlobFSSink,
  AzureBlobFSSource,
  AzureBlobFSWriteSettings,
  AzureBlobStorageLinkedService,
  AzureBlobStorageLocation,
  AzureBlobStorageReadSettings,
  AzureBlobStorageWriteSettings,
  AzureDatabricksLinkedService,
  AzureDataExplorerCommandActivity,
  AzureDataExplorerLinkedService,
  AzureDataExplorerSink,
  AzureDataExplorerSource,
  AzureDataExplorerTableDataset,
  AzureDataLakeAnalyticsLinkedService,
  AzureDataLakeStoreDataset,
  AzureDataLakeStoreLinkedService,
  AzureDataLakeStoreLocation,
  AzureDataLakeStoreReadSettings,
  AzureDataLakeStoreSink,
  AzureDataLakeStoreSource,
  AzureDataLakeStoreWriteSettings,
  AzureFunctionActivity,
  AzureFunctionLinkedService,
  AzureKeyVaultLinkedService,
  AzureKeyVaultSecretReference,
  AzureMLBatchExecutionActivity,
  AzureMLLinkedService,
  AzureMLUpdateResourceActivity,
  AzureMLWebServiceFile,
  AzureMySqlLinkedService,
  AzureMySqlSource,
  AzureMySqlTableDataset,
  AzurePostgreSqlLinkedService,
  AzurePostgreSqlSink,
  AzurePostgreSqlSource,
  AzurePostgreSqlTableDataset,
  AzureQueueSink,
  AzureSearchIndexDataset,
  AzureSearchIndexSink,
  AzureSearchLinkedService,
  AzureSqlDatabaseLinkedService,
  AzureSqlDWLinkedService,
  AzureSqlDWTableDataset,
  AzureSqlMILinkedService,
  AzureSqlMITableDataset,
  AzureSqlSink,
  AzureSqlSource,
  AzureSqlTableDataset,
  AzureStorageLinkedService,
  AzureTableDataset,
  AzureTableSink,
  AzureTableSource,
  AzureTableStorageLinkedService,
  BaseResource,
  BinaryDataset,
  BinarySink,
  BinarySource,
  BlobEventsTrigger,
  BlobSink,
  BlobSource,
  BlobTrigger,
  CassandraLinkedService,
  CassandraSource,
  CassandraTableDataset,
  CloudError,
  CommonDataServiceForAppsEntityDataset,
  CommonDataServiceForAppsLinkedService,
  CommonDataServiceForAppsSink,
  CommonDataServiceForAppsSource,
  ConcurLinkedService,
  ConcurObjectDataset,
  ConcurSource,
  ControlActivity,
  CopyActivity,
  CopySink,
  CopySource,
  CosmosDbLinkedService,
  CosmosDbMongoDbApiCollectionDataset,
  CosmosDbMongoDbApiLinkedService,
  CosmosDbMongoDbApiSink,
  CosmosDbMongoDbApiSource,
  CouchbaseLinkedService,
  CouchbaseSource,
  CouchbaseTableDataset,
  CreateLinkedIntegrationRuntimeRequest,
  CustomActivity,
  CustomActivityReferenceObject,
  CustomDataset,
  CustomDataSourceLinkedService,
  DatabricksNotebookActivity,
  DatabricksSparkJarActivity,
  DatabricksSparkPythonActivity,
  DataLakeAnalyticsUSQLActivity,
  Dataset,
  DatasetBZip2Compression,
  DatasetCompression,
  DatasetDeflateCompression,
  DatasetFolder,
  DatasetGZipCompression,
  DatasetLocation,
  DatasetReference,
  DatasetResource,
  DatasetStorageFormat,
  DatasetZipDeflateCompression,
  Db2LinkedService,
  Db2Source,
  DeleteActivity,
  DelimitedTextDataset,
  DelimitedTextReadSettings,
  DelimitedTextSink,
  DelimitedTextSource,
  DelimitedTextWriteSettings,
  DependencyReference,
  DistcpSettings,
  DocumentDbCollectionDataset,
  DocumentDbCollectionSink,
  DocumentDbCollectionSource,
  DrillLinkedService,
  DrillSource,
  DrillTableDataset,
  DynamicsAXLinkedService,
  DynamicsAXResourceDataset,
  DynamicsAXSource,
  DynamicsCrmEntityDataset,
  DynamicsCrmLinkedService,
  DynamicsCrmSink,
  DynamicsCrmSource,
  DynamicsEntityDataset,
  DynamicsLinkedService,
  DynamicsSink,
  DynamicsSource,
  EloquaLinkedService,
  EloquaObjectDataset,
  EloquaSource,
  EntityReference,
  ExecutePipelineActivity,
  ExecuteSSISPackageActivity,
  ExecutionActivity,
  Expression,
  Factory,
  FactoryGitHubConfiguration,
  FactoryIdentity,
  FactoryRepoConfiguration,
  FactoryVSTSConfiguration,
  FileServerLinkedService,
  FileServerLocation,
  FileServerReadSettings,
  FileServerWriteSettings,
  FileShareDataset,
  FileSystemSink,
  FileSystemSource,
  FilterActivity,
  ForEachActivity,
  FormatReadSettings,
  FormatWriteSettings,
  FtpReadSettings,
  FtpServerLinkedService,
  FtpServerLocation,
  GetMetadataActivity,
  GoogleAdWordsLinkedService,
  GoogleAdWordsObjectDataset,
  GoogleAdWordsSource,
  GoogleBigQueryLinkedService,
  GoogleBigQueryObjectDataset,
  GoogleBigQuerySource,
  GreenplumLinkedService,
  GreenplumSource,
  GreenplumTableDataset,
  HBaseLinkedService,
  HBaseObjectDataset,
  HBaseSource,
  HdfsLinkedService,
  HdfsLocation,
  HdfsReadSettings,
  HdfsSource,
  HDInsightHiveActivity,
  HDInsightLinkedService,
  HDInsightMapReduceActivity,
  HDInsightOnDemandLinkedService,
  HDInsightPigActivity,
  HDInsightSparkActivity,
  HDInsightStreamingActivity,
  HiveLinkedService,
  HiveObjectDataset,
  HiveSource,
  HttpDataset,
  HttpLinkedService,
  HttpReadSettings,
  HttpServerLocation,
  HttpSource,
  HubspotLinkedService,
  HubspotObjectDataset,
  HubspotSource,
  IfConditionActivity,
  ImpalaLinkedService,
  ImpalaObjectDataset,
  ImpalaSource,
  InformixLinkedService,
  InformixSink,
  InformixSource,
  InformixTableDataset,
  IntegrationRuntime,
  IntegrationRuntimeAuthKeys,
  IntegrationRuntimeComputeProperties,
  IntegrationRuntimeConnectionInfo,
  IntegrationRuntimeCustomSetupScriptProperties,
  IntegrationRuntimeDataProxyProperties,
  IntegrationRuntimeListResponse,
  IntegrationRuntimeMonitoringData,
  IntegrationRuntimeNodeMonitoringData,
  IntegrationRuntimeReference,
  IntegrationRuntimeRegenerateKeyParameters,
  IntegrationRuntimeResource,
  IntegrationRuntimeSsisCatalogInfo,
  IntegrationRuntimeSsisProperties,
  IntegrationRuntimeStatus,
  IntegrationRuntimeStatusResponse,
  IntegrationRuntimeVNetProperties,
  JiraLinkedService,
  JiraObjectDataset,
  JiraSource,
  JsonFormat,
  LinkedIntegrationRuntime,
  LinkedIntegrationRuntimeKeyAuthorization,
  LinkedIntegrationRuntimeRbacAuthorization,
  LinkedIntegrationRuntimeRequest,
  LinkedIntegrationRuntimeType,
  LinkedService,
  LinkedServiceReference,
  LinkedServiceResource,
  LogStorageSettings,
  LookupActivity,
  MagentoLinkedService,
  MagentoObjectDataset,
  MagentoSource,
  ManagedIntegrationRuntime,
  ManagedIntegrationRuntimeError,
  ManagedIntegrationRuntimeNode,
  ManagedIntegrationRuntimeOperationResult,
  ManagedIntegrationRuntimeStatus,
  MariaDBLinkedService,
  MariaDBSource,
  MariaDBTableDataset,
  MarketoLinkedService,
  MarketoObjectDataset,
  MarketoSource,
  MicrosoftAccessLinkedService,
  MicrosoftAccessSink,
  MicrosoftAccessSource,
  MicrosoftAccessTableDataset,
  MongoDbCollectionDataset,
  MongoDbCursorMethodsProperties,
  MongoDbLinkedService,
  MongoDbSource,
  MongoDbV2CollectionDataset,
  MongoDbV2LinkedService,
  MongoDbV2Source,
  MultiplePipelineTrigger,
  MySqlLinkedService,
  MySqlSource,
  MySqlTableDataset,
  NetezzaLinkedService,
  NetezzaPartitionSettings,
  NetezzaSource,
  NetezzaTableDataset,
  ODataLinkedService,
  ODataResourceDataset,
  ODataSource,
  OdbcLinkedService,
  OdbcSink,
  OdbcSource,
  OdbcTableDataset,
  Office365Dataset,
  Office365LinkedService,
  Office365Source,
  OracleLinkedService,
  OraclePartitionSettings,
  OracleServiceCloudLinkedService,
  OracleServiceCloudObjectDataset,
  OracleServiceCloudSource,
  OracleSink,
  OracleSource,
  OracleTableDataset,
  OrcFormat,
  ParameterSpecification,
  ParquetDataset,
  ParquetFormat,
  ParquetSink,
  ParquetSource,
  PaypalLinkedService,
  PaypalObjectDataset,
  PaypalSource,
  PhoenixLinkedService,
  PhoenixObjectDataset,
  PhoenixSource,
  PipelineFolder,
  PipelineReference,
  PipelineResource,
  PolybaseSettings,
  PostgreSqlLinkedService,
  PostgreSqlSource,
  PostgreSqlTableDataset,
  PrestoLinkedService,
  PrestoObjectDataset,
  PrestoSource,
  QuickBooksLinkedService,
  QuickBooksObjectDataset,
  QuickBooksSource,
  RecurrenceSchedule,
  RecurrenceScheduleOccurrence,
  RedirectIncompatibleRowSettings,
  RedshiftUnloadSettings,
  RelationalSource,
  RelationalTableDataset,
  RerunTriggerResource,
  RerunTumblingWindowTrigger,
  Resource,
  ResponsysLinkedService,
  ResponsysObjectDataset,
  ResponsysSource,
  RestResourceDataset,
  RestServiceLinkedService,
  RestSource,
  RetryPolicy,
  SalesforceLinkedService,
  SalesforceMarketingCloudLinkedService,
  SalesforceMarketingCloudObjectDataset,
  SalesforceMarketingCloudSource,
  SalesforceObjectDataset,
  SalesforceServiceCloudLinkedService,
  SalesforceServiceCloudObjectDataset,
  SalesforceServiceCloudSink,
  SalesforceServiceCloudSource,
  SalesforceSink,
  SalesforceSource,
  SapBwCubeDataset,
  SapBWLinkedService,
  SapBwSource,
  SapCloudForCustomerLinkedService,
  SapCloudForCustomerResourceDataset,
  SapCloudForCustomerSink,
  SapCloudForCustomerSource,
  SapEccLinkedService,
  SapEccResourceDataset,
  SapEccSource,
  SapHanaLinkedService,
  SapHanaSource,
  SapHanaTableDataset,
  SapOpenHubLinkedService,
  SapOpenHubSource,
  SapOpenHubTableDataset,
  SapTableLinkedService,
  SapTablePartitionSettings,
  SapTableResourceDataset,
  SapTableSource,
  ScheduleTrigger,
  ScheduleTriggerRecurrence,
  ScriptAction,
  SecretBase,
  SecureString,
  SelfDependencyTumblingWindowTriggerReference,
  SelfHostedIntegrationRuntime,
  SelfHostedIntegrationRuntimeNode,
  SelfHostedIntegrationRuntimeStatus,
  ServiceNowLinkedService,
  ServiceNowObjectDataset,
  ServiceNowSource,
  SetVariableActivity,
  SftpLocation,
  SftpReadSettings,
  SftpServerLinkedService,
  ShopifyLinkedService,
  ShopifyObjectDataset,
  ShopifySource,
  SparkLinkedService,
  SparkObjectDataset,
  SparkSource,
  SqlDWSink,
  SqlDWSource,
  SqlMISink,
  SqlMISource,
  SqlServerLinkedService,
  SqlServerSink,
  SqlServerSource,
  SqlServerStoredProcedureActivity,
  SqlServerTableDataset,
  SqlSink,
  SqlSource,
  SquareLinkedService,
  SquareObjectDataset,
  SquareSource,
  SSISAccessCredential,
  SSISExecutionCredential,
  SSISExecutionParameter,
  SSISLogLocation,
  SSISPackageLocation,
  SSISPropertyOverride,
  StagingSettings,
  StoredProcedureParameter,
  StoreReadSettings,
  StoreWriteSettings,
  SubResource,
  SybaseLinkedService,
  SybaseSource,
  SybaseTableDataset,
  TeradataLinkedService,
  TeradataPartitionSettings,
  TeradataSource,
  TeradataTableDataset,
  TextFormat,
  Trigger,
  TriggerDependencyReference,
  TriggerPipelineReference,
  TriggerReference,
  TriggerResource,
  TumblingWindowTrigger,
  TumblingWindowTriggerDependencyReference,
  UntilActivity,
  UpdateIntegrationRuntimeRequest,
  UserProperty,
  ValidationActivity,
  VariableSpecification,
  VerticaLinkedService,
  VerticaSource,
  VerticaTableDataset,
  WaitActivity,
  WebActivity,
  WebActivityAuthentication,
  WebAnonymousAuthentication,
  WebBasicAuthentication,
  WebClientCertificateAuthentication,
  WebHookActivity,
  WebLinkedService,
  WebLinkedServiceTypeProperties,
  WebSource,
  WebTableDataset,
  XeroLinkedService,
  XeroObjectDataset,
  XeroSource,
  ZohoLinkedService,
  ZohoObjectDataset,
  ZohoSource
} from "../models/mappers";
