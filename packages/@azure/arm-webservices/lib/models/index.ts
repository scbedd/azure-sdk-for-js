/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "ms-rest-azure-js";
import * as msRest from "ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing Resource.
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] Specifies the resource ID.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Specifies the name of the resource.
   */
  name?: string;
  /**
   * @member {string} location Specifies the location of the resource.
   */
  location: string;
  /**
   * @member {string} [type] Specifies the type of the resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Contains resource tags
   * defined as key/value pairs.
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing WebServiceKeys.
 * Access keys for the web service calls.
 *
 */
export interface WebServiceKeys {
  /**
   * @member {string} [primary] The primary access key.
   */
  primary?: string;
  /**
   * @member {string} [secondary] The secondary access key.
   */
  secondary?: string;
}

/**
 * @interface
 * An interface representing RealtimeConfiguration.
 * Holds the available configuration options for an Azure ML web service
 * endpoint.
 *
 */
export interface RealtimeConfiguration {
  /**
   * @member {number} [maxConcurrentCalls] Specifies the maximum concurrent
   * calls that can be made to the web service. Minimum value: 4, Maximum
   * value: 200.
   */
  maxConcurrentCalls?: number;
}

/**
 * @interface
 * An interface representing DiagnosticsConfiguration.
 * Diagnostics settings for an Azure ML web service.
 *
 */
export interface DiagnosticsConfiguration {
  /**
   * @member {DiagnosticsLevel} level Specifies the verbosity of the diagnostic
   * output. Valid values are: None - disables tracing; Error - collects only
   * error (stderr) traces; All - collects all traces (stdout and stderr).
   * Possible values include: 'None', 'Error', 'All'
   */
  level: DiagnosticsLevel;
  /**
   * @member {Date} [expiry] Specifies the date and time when the logging will
   * cease. If null, diagnostic collection is not time limited.
   */
  expiry?: Date;
}

/**
 * @interface
 * An interface representing StorageAccount.
 * Access information for a storage account.
 *
 */
export interface StorageAccount {
  /**
   * @member {string} [name] Specifies the name of the storage account.
   */
  name?: string;
  /**
   * @member {string} [key] Specifies the key used to access the storage
   * account.
   */
  key?: string;
}

/**
 * @interface
 * An interface representing MachineLearningWorkspace.
 * Information about the machine learning workspace containing the experiment
 * that is source for the web service.
 *
 */
export interface MachineLearningWorkspace {
  /**
   * @member {string} id Specifies the workspace ID of the machine learning
   * workspace associated with the web service
   */
  id: string;
}

/**
 * @interface
 * An interface representing CommitmentPlan.
 * Information about the machine learning commitment plan associated with the
 * web service.
 *
 */
export interface CommitmentPlan {
  /**
   * @member {string} id Specifies the Azure Resource Manager ID of the
   * commitment plan associated with the web service.
   */
  id: string;
}

/**
 * @interface
 * An interface representing ColumnSpecification.
 * Swagger 2.0 schema for a column within the data table representing a web
 * service input or output. See Swagger specification:
 * http://swagger.io/specification/
 *
 */
export interface ColumnSpecification {
  /**
   * @member {ColumnType} type Data type of the column. Possible values
   * include: 'Boolean', 'Integer', 'Number', 'String'
   */
  type: ColumnType;
  /**
   * @member {ColumnFormat} [format] Additional format information for the data
   * type. Possible values include: 'Byte', 'Char', 'Complex64', 'Complex128',
   * 'Date-time', 'Date-timeOffset', 'Double', 'Duration', 'Float', 'Int8',
   * 'Int16', 'Int32', 'Int64', 'Uint8', 'Uint16', 'Uint32', 'Uint64'
   */
  format?: ColumnFormat;
  /**
   * @member {any[]} [enum] If the data type is categorical, this provides the
   * list of accepted categories.
   */
  enum?: any[];
  /**
   * @member {boolean} [xMsIsnullable] Flag indicating if the type supports
   * null values or not.
   */
  xMsIsnullable?: boolean;
  /**
   * @member {boolean} [xMsIsordered] Flag indicating whether the categories
   * are treated as an ordered set or not, if this is a categorical column.
   */
  xMsIsordered?: boolean;
}

/**
 * @interface
 * An interface representing TableSpecification.
 * The swagger 2.0 schema describing a single service input or output. See
 * Swagger specification: http://swagger.io/specification/
 *
 */
export interface TableSpecification {
  /**
   * @member {string} [title] Swagger schema title.
   */
  title?: string;
  /**
   * @member {string} [description] Swagger schema description.
   */
  description?: string;
  /**
   * @member {string} type The type of the entity described in swagger. Default
   * value: 'object' .
   */
  type: string;
  /**
   * @member {string} [format] The format, if 'type' is not 'object'
   */
  format?: string;
  /**
   * @member {{ [propertyName: string]: ColumnSpecification }} [properties] The
   * set of columns within the data table.
   */
  properties?: { [propertyName: string]: ColumnSpecification };
}

/**
 * @interface
 * An interface representing ServiceInputOutputSpecification.
 * The swagger 2.0 schema describing the service's inputs or outputs. See
 * Swagger specification: http://swagger.io/specification/
 *
 */
export interface ServiceInputOutputSpecification {
  /**
   * @member {string} [title] The title of your Swagger schema.
   */
  title?: string;
  /**
   * @member {string} [description] The description of the Swagger schema.
   */
  description?: string;
  /**
   * @member {string} type The type of the entity described in swagger. Always
   * 'object'. Default value: 'object' .
   */
  type: string;
  /**
   * @member {{ [propertyName: string]: TableSpecification }} properties
   * Specifies a collection that contains the column schema for each input or
   * output of the web service. For more information, see the Swagger
   * specification.
   */
  properties: { [propertyName: string]: TableSpecification };
}

/**
 * @interface
 * An interface representing ExampleRequest.
 * Sample input data for the service's input(s).
 *
 */
export interface ExampleRequest {
  /**
   * @member {{ [propertyName: string]: any[][] }} [inputs] Sample input data
   * for the web service's input(s) given as an input name to sample input
   * values matrix map.
   */
  inputs?: { [propertyName: string]: any[][] };
  /**
   * @member {{ [propertyName: string]: any }} [globalParameters] Sample input
   * data for the web service's global parameters
   */
  globalParameters?: { [propertyName: string]: any };
}

/**
 * @interface
 * An interface representing AssetLocation.
 * Describes the access location for a web service asset.
 *
 */
export interface AssetLocation {
  /**
   * @member {string} uri The URI where the asset is accessible from, (e.g.
   * aml://abc for system assets or https://xyz for user asets
   */
  uri: string;
  /**
   * @member {string} [credentials] Access credentials for the asset, if
   * applicable (e.g. asset specified by storage account connection string +
   * blob URI)
   */
  credentials?: string;
}

/**
 * @interface
 * An interface representing InputPort.
 * Asset input port
 *
 */
export interface InputPort {
  /**
   * @member {InputPortType} [type] Port data type. Possible values include:
   * 'Dataset'. Default value: 'Dataset' .
   */
  type?: InputPortType;
}

/**
 * @interface
 * An interface representing OutputPort.
 * Asset output port
 *
 */
export interface OutputPort {
  /**
   * @member {OutputPortType} [type] Port data type. Possible values include:
   * 'Dataset'. Default value: 'Dataset' .
   */
  type?: OutputPortType;
}

/**
 * @interface
 * An interface representing ModeValueInfo.
 * Nested parameter definition.
 *
 */
export interface ModeValueInfo {
  /**
   * @member {string} [interfaceString] The interface string name for the
   * nested parameter.
   */
  interfaceString?: string;
  /**
   * @member {ModuleAssetParameter[]} [parameters] The definition of the
   * parameter.
   */
  parameters?: ModuleAssetParameter[];
}

/**
 * @interface
 * An interface representing ModuleAssetParameter.
 * Parameter definition for a module asset.
 *
 */
export interface ModuleAssetParameter {
  /**
   * @member {string} [name] Parameter name.
   */
  name?: string;
  /**
   * @member {string} [parameterType] Parameter type.
   */
  parameterType?: string;
  /**
   * @member {{ [propertyName: string]: ModeValueInfo }} [modeValuesInfo]
   * Definitions for nested interface parameters if this is a complex module
   * parameter.
   */
  modeValuesInfo?: { [propertyName: string]: ModeValueInfo };
}

/**
 * @interface
 * An interface representing AssetItem.
 * Information about an asset associated with the web service.
 *
 */
export interface AssetItem {
  /**
   * @member {string} name Asset's friendly name.
   */
  name: string;
  /**
   * @member {string} [id] Asset's Id.
   */
  id?: string;
  /**
   * @member {AssetType} type Asset's type. Possible values include: 'Module',
   * 'Resource'
   */
  type: AssetType;
  /**
   * @member {AssetLocation} locationInfo Access information for the asset.
   */
  locationInfo: AssetLocation;
  /**
   * @member {{ [propertyName: string]: InputPort }} [inputPorts] Information
   * about the asset's input ports.
   */
  inputPorts?: { [propertyName: string]: InputPort };
  /**
   * @member {{ [propertyName: string]: OutputPort }} [outputPorts] Information
   * about the asset's output ports.
   */
  outputPorts?: { [propertyName: string]: OutputPort };
  /**
   * @member {{ [propertyName: string]: string }} [metadata] If the asset is a
   * custom module, this holds the module's metadata.
   */
  metadata?: { [propertyName: string]: string };
  /**
   * @member {ModuleAssetParameter[]} [parameters] If the asset is a custom
   * module, this holds the module's parameters.
   */
  parameters?: ModuleAssetParameter[];
}

/**
 * Contains the possible cases for WebServiceProperties.
 */
export type WebServicePropertiesUnion = WebServiceProperties | WebServicePropertiesForGraph;

/**
 * @interface
 * An interface representing WebServiceProperties.
 * The set of properties specific to the Azure ML web service resource.
 *
 */
export interface WebServiceProperties {
  /**
   * @member {string} packageType Polymorphic Discriminator
   */
  packageType: "WebServiceProperties";
  /**
   * @member {string} [title] The title of the web service.
   */
  title?: string;
  /**
   * @member {string} [description] The description of the web service.
   */
  description?: string;
  /**
   * @member {Date} [createdOn] Read Only: The date and time when the web
   * service was created.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly createdOn?: Date;
  /**
   * @member {Date} [modifiedOn] Read Only: The date and time when the web
   * service was last modified.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly modifiedOn?: Date;
  /**
   * @member {ProvisioningState} [provisioningState] Read Only: The provision
   * state of the web service. Valid values are Unknown, Provisioning,
   * Succeeded, and Failed. Possible values include: 'Unknown', 'Provisioning',
   * 'Succeeded', 'Failed'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * @member {WebServiceKeys} [keys] Contains the web service provisioning
   * keys. If you do not specify provisioning keys, the Azure Machine Learning
   * system generates them for you. Note: The keys are not returned from calls
   * to GET operations.
   */
  keys?: WebServiceKeys;
  /**
   * @member {boolean} [readOnly] When set to true, indicates that the web
   * service is read-only and can no longer be updated or patched, only
   * removed. Default, is false. Note: Once set to true, you cannot change its
   * value.
   */
  readOnly?: boolean;
  /**
   * @member {string} [swaggerLocation] Read Only: Contains the URI of the
   * swagger spec associated with this web service.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly swaggerLocation?: string;
  /**
   * @member {boolean} [exposeSampleData] When set to true, sample data is
   * included in the web service's swagger definition. The default value is
   * true.
   */
  exposeSampleData?: boolean;
  /**
   * @member {RealtimeConfiguration} [realtimeConfiguration] Contains the
   * configuration settings for the web service endpoint.
   */
  realtimeConfiguration?: RealtimeConfiguration;
  /**
   * @member {DiagnosticsConfiguration} [diagnostics] Settings controlling the
   * diagnostics traces collection for the web service.
   */
  diagnostics?: DiagnosticsConfiguration;
  /**
   * @member {StorageAccount} [storageAccount] Specifies the storage account
   * that Azure Machine Learning uses to store information about the web
   * service. Only the name of the storage account is returned from calls to
   * GET operations. When updating the storage account information, you must
   * ensure that all necessary assets are available in the new storage account
   * or calls to your web service will fail.
   */
  storageAccount?: StorageAccount;
  /**
   * @member {MachineLearningWorkspace} [machineLearningWorkspace] Specifies
   * the Machine Learning workspace containing the experiment that is source
   * for the web service.
   */
  machineLearningWorkspace?: MachineLearningWorkspace;
  /**
   * @member {CommitmentPlan} [commitmentPlan] Contains the commitment plan
   * associated with this web service. Set at creation time. Once set, this
   * value cannot be changed. Note: The commitment plan is not returned from
   * calls to GET operations.
   */
  commitmentPlan?: CommitmentPlan;
  /**
   * @member {ServiceInputOutputSpecification} [input] Contains the Swagger 2.0
   * schema describing one or more of the web service's inputs. For more
   * information, see the Swagger specification.
   */
  input?: ServiceInputOutputSpecification;
  /**
   * @member {ServiceInputOutputSpecification} [output] Contains the Swagger
   * 2.0 schema describing one or more of the web service's outputs. For more
   * information, see the Swagger specification.
   */
  output?: ServiceInputOutputSpecification;
  /**
   * @member {ExampleRequest} [exampleRequest] Defines sample input data for
   * one or more of the service's inputs.
   */
  exampleRequest?: ExampleRequest;
  /**
   * @member {{ [propertyName: string]: AssetItem }} [assets] Contains user
   * defined properties describing web service assets. Properties are expressed
   * as Key/Value pairs.
   */
  assets?: { [propertyName: string]: AssetItem };
  /**
   * @member {{ [propertyName: string]: string }} [parameters] The set of
   * global parameters values defined for the web service, given as a global
   * parameter name to default value map. If no default value is specified, the
   * parameter is considered to be required.
   */
  parameters?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing WebService.
 * Instance of an Azure ML web service resource.
 *
 * @extends Resource
 */
export interface WebService extends Resource {
  /**
   * @member {WebServicePropertiesUnion} properties Contains the property
   * payload that describes the web service.
   */
  properties: WebServicePropertiesUnion;
}

/**
 * @interface
 * An interface representing GraphNode.
 * Specifies a node in the web service graph. The node can either be an input,
 * output or asset node, so only one of the corresponding id properties is
 * populated at any given time.
 *
 */
export interface GraphNode {
  /**
   * @member {string} [assetId] The id of the asset represented by this node.
   */
  assetId?: string;
  /**
   * @member {string} [inputId] The id of the input element represented by this
   * node.
   */
  inputId?: string;
  /**
   * @member {string} [outputId] The id of the output element represented by
   * this node.
   */
  outputId?: string;
  /**
   * @member {{ [propertyName: string]: string }} [parameters] If applicable,
   * parameters of the node. Global graph parameters map into these, with
   * values set at runtime.
   */
  parameters?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing GraphEdge.
 * Defines an edge within the web service's graph.
 *
 */
export interface GraphEdge {
  /**
   * @member {string} [sourceNodeId] The source graph node's identifier.
   */
  sourceNodeId?: string;
  /**
   * @member {string} [sourcePortId] The identifier of the source node's port
   * that the edge connects from.
   */
  sourcePortId?: string;
  /**
   * @member {string} [targetNodeId] The destination graph node's identifier.
   */
  targetNodeId?: string;
  /**
   * @member {string} [targetPortId] The identifier of the destination node's
   * port that the edge connects into.
   */
  targetPortId?: string;
}

/**
 * @interface
 * An interface representing GraphParameterLink.
 * Association link for a graph global parameter to a node in the graph.
 *
 */
export interface GraphParameterLink {
  /**
   * @member {string} nodeId The graph node's identifier
   */
  nodeId: string;
  /**
   * @member {string} parameterKey The identifier of the node parameter that
   * the global parameter maps to.
   */
  parameterKey: string;
}

/**
 * @interface
 * An interface representing GraphParameter.
 * Defines a global parameter in the graph.
 *
 */
export interface GraphParameter {
  /**
   * @member {string} [description] Description of this graph parameter.
   */
  description?: string;
  /**
   * @member {ParameterType} type Graph parameter's type. Possible values
   * include: 'String', 'Int', 'Float', 'Enumerated', 'Script', 'Mode',
   * 'Credential', 'Boolean', 'Double', 'ColumnPicker', 'ParameterRange',
   * 'DataGatewayName'
   */
  type: ParameterType;
  /**
   * @member {GraphParameterLink[]} links Association links for this parameter
   * to nodes in the graph.
   */
  links: GraphParameterLink[];
}

/**
 * @interface
 * An interface representing GraphPackage.
 * Defines the graph of modules making up the machine learning solution.
 *
 */
export interface GraphPackage {
  /**
   * @member {{ [propertyName: string]: GraphNode }} [nodes] The set of nodes
   * making up the graph, provided as a nodeId to GraphNode map
   */
  nodes?: { [propertyName: string]: GraphNode };
  /**
   * @member {GraphEdge[]} [edges] The list of edges making up the graph.
   */
  edges?: GraphEdge[];
  /**
   * @member {{ [propertyName: string]: GraphParameter }} [graphParameters] The
   * collection of global parameters for the graph, given as a global parameter
   * name to GraphParameter map. Each parameter here has a 1:1 match with the
   * global parameters values map declared at the WebServiceProperties level.
   */
  graphParameters?: { [propertyName: string]: GraphParameter };
}

/**
 * @interface
 * An interface representing WebServicePropertiesForGraph.
 * Properties specific to a Graph based web service.
 *
 */
export interface WebServicePropertiesForGraph {
  /**
   * @member {string} packageType Polymorphic Discriminator
   */
  packageType: "Graph";
  /**
   * @member {string} [title] The title of the web service.
   */
  title?: string;
  /**
   * @member {string} [description] The description of the web service.
   */
  description?: string;
  /**
   * @member {Date} [createdOn] Read Only: The date and time when the web
   * service was created.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly createdOn?: Date;
  /**
   * @member {Date} [modifiedOn] Read Only: The date and time when the web
   * service was last modified.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly modifiedOn?: Date;
  /**
   * @member {ProvisioningState} [provisioningState] Read Only: The provision
   * state of the web service. Valid values are Unknown, Provisioning,
   * Succeeded, and Failed. Possible values include: 'Unknown', 'Provisioning',
   * 'Succeeded', 'Failed'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * @member {WebServiceKeys} [keys] Contains the web service provisioning
   * keys. If you do not specify provisioning keys, the Azure Machine Learning
   * system generates them for you. Note: The keys are not returned from calls
   * to GET operations.
   */
  keys?: WebServiceKeys;
  /**
   * @member {boolean} [readOnly] When set to true, indicates that the web
   * service is read-only and can no longer be updated or patched, only
   * removed. Default, is false. Note: Once set to true, you cannot change its
   * value.
   */
  readOnly?: boolean;
  /**
   * @member {string} [swaggerLocation] Read Only: Contains the URI of the
   * swagger spec associated with this web service.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly swaggerLocation?: string;
  /**
   * @member {boolean} [exposeSampleData] When set to true, sample data is
   * included in the web service's swagger definition. The default value is
   * true.
   */
  exposeSampleData?: boolean;
  /**
   * @member {RealtimeConfiguration} [realtimeConfiguration] Contains the
   * configuration settings for the web service endpoint.
   */
  realtimeConfiguration?: RealtimeConfiguration;
  /**
   * @member {DiagnosticsConfiguration} [diagnostics] Settings controlling the
   * diagnostics traces collection for the web service.
   */
  diagnostics?: DiagnosticsConfiguration;
  /**
   * @member {StorageAccount} [storageAccount] Specifies the storage account
   * that Azure Machine Learning uses to store information about the web
   * service. Only the name of the storage account is returned from calls to
   * GET operations. When updating the storage account information, you must
   * ensure that all necessary assets are available in the new storage account
   * or calls to your web service will fail.
   */
  storageAccount?: StorageAccount;
  /**
   * @member {MachineLearningWorkspace} [machineLearningWorkspace] Specifies
   * the Machine Learning workspace containing the experiment that is source
   * for the web service.
   */
  machineLearningWorkspace?: MachineLearningWorkspace;
  /**
   * @member {CommitmentPlan} [commitmentPlan] Contains the commitment plan
   * associated with this web service. Set at creation time. Once set, this
   * value cannot be changed. Note: The commitment plan is not returned from
   * calls to GET operations.
   */
  commitmentPlan?: CommitmentPlan;
  /**
   * @member {ServiceInputOutputSpecification} [input] Contains the Swagger 2.0
   * schema describing one or more of the web service's inputs. For more
   * information, see the Swagger specification.
   */
  input?: ServiceInputOutputSpecification;
  /**
   * @member {ServiceInputOutputSpecification} [output] Contains the Swagger
   * 2.0 schema describing one or more of the web service's outputs. For more
   * information, see the Swagger specification.
   */
  output?: ServiceInputOutputSpecification;
  /**
   * @member {ExampleRequest} [exampleRequest] Defines sample input data for
   * one or more of the service's inputs.
   */
  exampleRequest?: ExampleRequest;
  /**
   * @member {{ [propertyName: string]: AssetItem }} [assets] Contains user
   * defined properties describing web service assets. Properties are expressed
   * as Key/Value pairs.
   */
  assets?: { [propertyName: string]: AssetItem };
  /**
   * @member {{ [propertyName: string]: string }} [parameters] The set of
   * global parameters values defined for the web service, given as a global
   * parameter name to default value map. If no default value is specified, the
   * parameter is considered to be required.
   */
  parameters?: { [propertyName: string]: string };
  /**
   * @member {GraphPackage} [packageProperty] The definition of the graph
   * package making up this web service.
   */
  packageProperty?: GraphPackage;
}

/**
 * @interface
 * An interface representing WebServicesListByResourceGroupOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface WebServicesListByResourceGroupOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [skiptoken] Continuation token for pagination.
   */
  skiptoken?: string;
}

/**
 * @interface
 * An interface representing WebServicesListOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface WebServicesListOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [skiptoken] Continuation token for pagination.
   */
  skiptoken?: string;
}

/**
 * @interface
 * An interface representing AzureMLWebServicesManagementClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface AzureMLWebServicesManagementClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the PaginatedWebServicesList.
 * Paginated list of web services.
 *
 * @extends Array<WebService>
 */
export interface PaginatedWebServicesList extends Array<WebService> {
  /**
   * @member {string} [nextLink] A continuation link (absolute URI) to the next
   * page of results in the list.
   */
  nextLink?: string;
}

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Unknown', 'Provisioning', 'Succeeded', 'Failed'
 * @readonly
 * @enum {string}
 */
export type ProvisioningState = 'Unknown' | 'Provisioning' | 'Succeeded' | 'Failed';

/**
 * Defines values for DiagnosticsLevel.
 * Possible values include: 'None', 'Error', 'All'
 * @readonly
 * @enum {string}
 */
export type DiagnosticsLevel = 'None' | 'Error' | 'All';

/**
 * Defines values for ColumnType.
 * Possible values include: 'Boolean', 'Integer', 'Number', 'String'
 * @readonly
 * @enum {string}
 */
export type ColumnType = 'Boolean' | 'Integer' | 'Number' | 'String';

/**
 * Defines values for ColumnFormat.
 * Possible values include: 'Byte', 'Char', 'Complex64', 'Complex128', 'Date-time',
 * 'Date-timeOffset', 'Double', 'Duration', 'Float', 'Int8', 'Int16', 'Int32', 'Int64', 'Uint8',
 * 'Uint16', 'Uint32', 'Uint64'
 * @readonly
 * @enum {string}
 */
export type ColumnFormat = 'Byte' | 'Char' | 'Complex64' | 'Complex128' | 'Date-time' | 'Date-timeOffset' | 'Double' | 'Duration' | 'Float' | 'Int8' | 'Int16' | 'Int32' | 'Int64' | 'Uint8' | 'Uint16' | 'Uint32' | 'Uint64';

/**
 * Defines values for AssetType.
 * Possible values include: 'Module', 'Resource'
 * @readonly
 * @enum {string}
 */
export type AssetType = 'Module' | 'Resource';

/**
 * Defines values for InputPortType.
 * Possible values include: 'Dataset'
 * @readonly
 * @enum {string}
 */
export type InputPortType = 'Dataset';

/**
 * Defines values for OutputPortType.
 * Possible values include: 'Dataset'
 * @readonly
 * @enum {string}
 */
export type OutputPortType = 'Dataset';

/**
 * Defines values for ParameterType.
 * Possible values include: 'String', 'Int', 'Float', 'Enumerated', 'Script', 'Mode', 'Credential',
 * 'Boolean', 'Double', 'ColumnPicker', 'ParameterRange', 'DataGatewayName'
 * @readonly
 * @enum {string}
 */
export type ParameterType = 'String' | 'Int' | 'Float' | 'Enumerated' | 'Script' | 'Mode' | 'Credential' | 'Boolean' | 'Double' | 'ColumnPicker' | 'ParameterRange' | 'DataGatewayName';

/**
 * Contains response data for the createOrUpdate operation.
 */
export type WebServicesCreateOrUpdateResponse = WebService & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: WebService;
    };
};

/**
 * Contains response data for the get operation.
 */
export type WebServicesGetResponse = WebService & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: WebService;
    };
};

/**
 * Contains response data for the patch operation.
 */
export type WebServicesPatchResponse = WebService & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: WebService;
    };
};

/**
 * Contains response data for the listKeys operation.
 */
export type WebServicesListKeysResponse = WebServiceKeys & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: WebServiceKeys;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type WebServicesListByResourceGroupResponse = PaginatedWebServicesList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PaginatedWebServicesList;
    };
};

/**
 * Contains response data for the list operation.
 */
export type WebServicesListResponse = PaginatedWebServicesList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PaginatedWebServicesList;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type WebServicesBeginCreateOrUpdateResponse = WebService & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: WebService;
    };
};

/**
 * Contains response data for the beginPatch operation.
 */
export type WebServicesBeginPatchResponse = WebService & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: WebService;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type WebServicesListByResourceGroupNextResponse = PaginatedWebServicesList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PaginatedWebServicesList;
    };
};

/**
 * Contains response data for the listNext operation.
 */
export type WebServicesListNextResponse = PaginatedWebServicesList & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: PaginatedWebServicesList;
    };
};
