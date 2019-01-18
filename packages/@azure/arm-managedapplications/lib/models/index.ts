/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { BaseResource, CloudError, AzureServiceClientOptions } from "@azure/ms-rest-azure-js";
import * as msRest from "@azure/ms-rest-js";

export { BaseResource, CloudError };


/**
 * @interface
 * An interface representing Plan.
 * Plan for the appliance.
 *
 */
export interface Plan {
  /**
   * @member {string} name The plan name.
   */
  name: string;
  /**
   * @member {string} publisher The publisher ID.
   */
  publisher: string;
  /**
   * @member {string} product The product code.
   */
  product: string;
  /**
   * @member {string} [promotionCode] The promotion code.
   */
  promotionCode?: string;
  /**
   * @member {string} version The plan's version.
   */
  version: string;
}

/**
 * @interface
 * An interface representing Resource.
 * Resource information.
 *
 * @extends BaseResource
 */
export interface Resource extends BaseResource {
  /**
   * @member {string} [id] Resource ID
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {string} [name] Resource name
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly name?: string;
  /**
   * @member {string} [type] Resource type
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly type?: string;
  /**
   * @member {string} [location] Resource location
   */
  location?: string;
  /**
   * @member {{ [propertyName: string]: string }} [tags] Resource tags
   */
  tags?: { [propertyName: string]: string };
}

/**
 * @interface
 * An interface representing GenericResource.
 * Resource information.
 *
 * @extends Resource
 */
export interface GenericResource extends Resource {
  /**
   * @member {string} [managedBy] ID of the resource that manages this
   * resource.
   */
  managedBy?: string;
  /**
   * @member {Sku} [sku] The SKU of the resource.
   */
  sku?: Sku;
  /**
   * @member {Identity} [identity] The identity of the resource.
   */
  identity?: Identity;
}

/**
 * @interface
 * An interface representing Appliance.
 * Information about appliance.
 *
 * @extends GenericResource
 */
export interface Appliance extends GenericResource {
  /**
   * @member {string} managedResourceGroupId The managed resource group Id.
   */
  managedResourceGroupId: string;
  /**
   * @member {string} [applianceDefinitionId] The fully qualified path of
   * appliance definition Id.
   */
  applianceDefinitionId?: string;
  /**
   * @member {any} [parameters] Name and value pairs that define the appliance
   * parameters. It can be a JObject or a well formed JSON string.
   */
  parameters?: any;
  /**
   * @member {any} [outputs] Name and value pairs that define the appliance
   * outputs.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly outputs?: any;
  /**
   * @member {ProvisioningState} [provisioningState] The appliance provisioning
   * state. Possible values include: 'Accepted', 'Running', 'Ready',
   * 'Creating', 'Created', 'Deleting', 'Deleted', 'Canceled', 'Failed',
   * 'Succeeded', 'Updating'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * @member {string} [uiDefinitionUri] The blob URI where the UI definition
   * file is located.
   */
  uiDefinitionUri?: string;
  /**
   * @member {Plan} [plan] The plan information.
   */
  plan?: Plan;
  /**
   * @member {string} [kind] The kind of the appliance. Allowed values are
   * MarketPlace and ServiceCatalog.
   */
  kind?: string;
}

/**
 * @interface
 * An interface representing PlanPatchable.
 * Plan for the appliance.
 *
 */
export interface PlanPatchable {
  /**
   * @member {string} [name] The plan name.
   */
  name?: string;
  /**
   * @member {string} [publisher] The publisher ID.
   */
  publisher?: string;
  /**
   * @member {string} [product] The product code.
   */
  product?: string;
  /**
   * @member {string} [promotionCode] The promotion code.
   */
  promotionCode?: string;
  /**
   * @member {string} [version] The plan's version.
   */
  version?: string;
}

/**
 * @interface
 * An interface representing AppliancePatchable.
 * Information about appliance.
 *
 * @extends GenericResource
 */
export interface AppliancePatchable extends GenericResource {
  /**
   * @member {string} [managedResourceGroupId] The managed resource group Id.
   */
  managedResourceGroupId?: string;
  /**
   * @member {string} [applianceDefinitionId] The fully qualified path of
   * appliance definition Id.
   */
  applianceDefinitionId?: string;
  /**
   * @member {any} [parameters] Name and value pairs that define the appliance
   * parameters. It can be a JObject or a well formed JSON string.
   */
  parameters?: any;
  /**
   * @member {any} [outputs] Name and value pairs that define the appliance
   * outputs.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly outputs?: any;
  /**
   * @member {ProvisioningState} [provisioningState] The appliance provisioning
   * state. Possible values include: 'Accepted', 'Running', 'Ready',
   * 'Creating', 'Created', 'Deleting', 'Deleted', 'Canceled', 'Failed',
   * 'Succeeded', 'Updating'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly provisioningState?: ProvisioningState;
  /**
   * @member {string} [uiDefinitionUri] The blob URI where the UI definition
   * file is located.
   */
  uiDefinitionUri?: string;
  /**
   * @member {PlanPatchable} [plan] The plan information.
   */
  plan?: PlanPatchable;
  /**
   * @member {string} [kind] The kind of the appliance. Allowed values are
   * MarketPlace and ServiceCatalog.
   */
  kind?: string;
}

/**
 * @interface
 * An interface representing ApplianceProviderAuthorization.
 * The appliance provider authorization.
 *
 */
export interface ApplianceProviderAuthorization {
  /**
   * @member {string} principalId The provider's principal identifier. This is
   * the identity that the provider will use to call ARM to manage the
   * appliance resources.
   */
  principalId: string;
  /**
   * @member {string} roleDefinitionId The provider's role definition
   * identifier. This role will define all the permissions that the provider
   * must have on the appliance's container resource group. This role
   * definition cannot have permission to delete the resource group.
   */
  roleDefinitionId: string;
}

/**
 * @interface
 * An interface representing ApplianceArtifact.
 * Appliance artifact.
 *
 */
export interface ApplianceArtifact {
  /**
   * @member {string} [name] The appliance artifact name.
   */
  name?: string;
  /**
   * @member {string} [uri] The appliance artifact blob uri.
   */
  uri?: string;
  /**
   * @member {ApplianceArtifactType} [type] The the appliance artifact type.
   * Possible values include: 'Template', 'Custom'
   */
  type?: ApplianceArtifactType;
}

/**
 * @interface
 * An interface representing ApplianceDefinition.
 * Information about appliance definition.
 *
 * @extends GenericResource
 */
export interface ApplianceDefinition extends GenericResource {
  /**
   * @member {ApplianceLockLevel} lockLevel The appliance lock level. Possible
   * values include: 'CanNotDelete', 'ReadOnly', 'None'
   */
  lockLevel: ApplianceLockLevel;
  /**
   * @member {string} [displayName] The appliance definition display name.
   */
  displayName?: string;
  /**
   * @member {ApplianceProviderAuthorization[]} authorizations The appliance
   * provider authorizations.
   */
  authorizations: ApplianceProviderAuthorization[];
  /**
   * @member {ApplianceArtifact[]} [artifacts] The collection of appliance
   * artifacts. The portal will use the files specified as artifacts to
   * construct the user experience of creating an appliance from an appliance
   * definition.
   */
  artifacts?: ApplianceArtifact[];
  /**
   * @member {string} [description] The appliance definition description.
   */
  description?: string;
  /**
   * @member {string} packageFileUri The appliance definition package file Uri.
   */
  packageFileUri: string;
}

/**
 * @interface
 * An interface representing Sku.
 * SKU for the resource.
 *
 */
export interface Sku {
  /**
   * @member {string} name The SKU name.
   */
  name: string;
  /**
   * @member {string} [tier] The SKU tier.
   */
  tier?: string;
  /**
   * @member {string} [size] The SKU size.
   */
  size?: string;
  /**
   * @member {string} [family] The SKU family.
   */
  family?: string;
  /**
   * @member {string} [model] The SKU model.
   */
  model?: string;
  /**
   * @member {number} [capacity] The SKU capacity.
   */
  capacity?: number;
}

/**
 * @interface
 * An interface representing Identity.
 * Identity for the resource.
 *
 */
export interface Identity {
  /**
   * @member {string} [principalId] The principal ID of resource identity.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly principalId?: string;
  /**
   * @member {string} [tenantId] The tenant ID of resource.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly tenantId?: string;
  /**
   * @member {ResourceIdentityType} [type] The identity type. Possible values
   * include: 'SystemAssigned'
   */
  type?: ResourceIdentityType;
}

/**
 * @interface
 * An interface representing ErrorResponse.
 * Error response indicates ARM appliance is not able to process the incoming
 * request. The reason is provided in the error message.
 *
 */
export interface ErrorResponse {
  /**
   * @member {string} [httpStatus] Http status code.
   */
  httpStatus?: string;
  /**
   * @member {string} [errorCode] Error code.
   */
  errorCode?: string;
  /**
   * @member {string} [errorMessage] Error message indicating why the operation
   * failed.
   */
  errorMessage?: string;
}

/**
 * @interface
 * An interface representing OperationDisplay.
 * The object that represents the operation.
 *
 */
export interface OperationDisplay {
  /**
   * @member {string} [provider] Service provider: Microsoft.Solutions
   */
  provider?: string;
  /**
   * @member {string} [resource] Resource on which the operation is performed:
   * Profile, endpoint, etc.
   */
  resource?: string;
  /**
   * @member {string} [operation] Operation type: Read, write, delete, etc.
   */
  operation?: string;
}

/**
 * @interface
 * An interface representing Operation.
 * Microsoft.Solutions operation
 *
 */
export interface Operation {
  /**
   * @member {string} [name] Operation name: {provider}/{resource}/{operation}
   */
  name?: string;
  /**
   * @member {OperationDisplay} [display] The object that represents the
   * operation.
   */
  display?: OperationDisplay;
}

/**
 * @interface
 * An interface representing AppliancesUpdateOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AppliancesUpdateOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {Appliance} [parameters] Parameters supplied to update an existing
   * appliance.
   */
  parameters?: Appliance;
}

/**
 * @interface
 * An interface representing AppliancesUpdateByIdOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface AppliancesUpdateByIdOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {Appliance} [parameters] Parameters supplied to update an existing
   * appliance.
   */
  parameters?: Appliance;
}

/**
 * @interface
 * An interface representing ManagedApplicationClientOptions.
 * @extends AzureServiceClientOptions
 */
export interface ManagedApplicationClientOptions extends AzureServiceClientOptions {
  /**
   * @member {string} [baseUri]
   */
  baseUri?: string;
}


/**
 * @interface
 * An interface representing the OperationListResult.
 * Result of the request to list Microsoft.Solutions operations. It contains a
 * list of operations and a URL link to get the next set of results.
 *
 * @extends Array<Operation>
 */
export interface OperationListResult extends Array<Operation> {
  /**
   * @member {string} [nextLink] URL to get the next set of operation list
   * results if there are any.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the ApplianceListResult.
 * List of appliances.
 *
 * @extends Array<Appliance>
 */
export interface ApplianceListResult extends Array<Appliance> {
  /**
   * @member {string} [nextLink] The URL to use for getting the next set of
   * results.
   */
  nextLink?: string;
}

/**
 * @interface
 * An interface representing the ApplianceDefinitionListResult.
 * List of appliance definitions.
 *
 * @extends Array<ApplianceDefinition>
 */
export interface ApplianceDefinitionListResult extends Array<ApplianceDefinition> {
  /**
   * @member {string} [nextLink] The URL to use for getting the next set of
   * results.
   */
  nextLink?: string;
}

/**
 * Defines values for ProvisioningState.
 * Possible values include: 'Accepted', 'Running', 'Ready', 'Creating', 'Created', 'Deleting',
 * 'Deleted', 'Canceled', 'Failed', 'Succeeded', 'Updating'
 * @readonly
 * @enum {string}
 */
export type ProvisioningState = 'Accepted' | 'Running' | 'Ready' | 'Creating' | 'Created' | 'Deleting' | 'Deleted' | 'Canceled' | 'Failed' | 'Succeeded' | 'Updating';

/**
 * Defines values for ApplianceLockLevel.
 * Possible values include: 'CanNotDelete', 'ReadOnly', 'None'
 * @readonly
 * @enum {string}
 */
export type ApplianceLockLevel = 'CanNotDelete' | 'ReadOnly' | 'None';

/**
 * Defines values for ApplianceArtifactType.
 * Possible values include: 'Template', 'Custom'
 * @readonly
 * @enum {string}
 */
export type ApplianceArtifactType = 'Template' | 'Custom';

/**
 * Defines values for ResourceIdentityType.
 * Possible values include: 'SystemAssigned'
 * @readonly
 * @enum {string}
 */
export type ResourceIdentityType = 'SystemAssigned';

/**
 * Contains response data for the listOperations operation.
 */
export type ListOperationsResponse = OperationListResult & {
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
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the listOperationsNext operation.
 */
export type ListOperationsNextResponse = OperationListResult & {
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
      parsedBody: OperationListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type AppliancesGetResponse = Appliance & {
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
      parsedBody: Appliance;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type AppliancesCreateOrUpdateResponse = Appliance & {
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
      parsedBody: Appliance;
    };
};

/**
 * Contains response data for the update operation.
 */
export type AppliancesUpdateResponse = Appliance & {
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
      parsedBody: Appliance;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type AppliancesListByResourceGroupResponse = ApplianceListResult & {
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
      parsedBody: ApplianceListResult;
    };
};

/**
 * Contains response data for the listBySubscription operation.
 */
export type AppliancesListBySubscriptionResponse = ApplianceListResult & {
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
      parsedBody: ApplianceListResult;
    };
};

/**
 * Contains response data for the getById operation.
 */
export type AppliancesGetByIdResponse = Appliance & {
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
      parsedBody: Appliance;
    };
};

/**
 * Contains response data for the createOrUpdateById operation.
 */
export type AppliancesCreateOrUpdateByIdResponse = Appliance & {
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
      parsedBody: Appliance;
    };
};

/**
 * Contains response data for the updateById operation.
 */
export type AppliancesUpdateByIdResponse = Appliance & {
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
      parsedBody: Appliance;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type AppliancesBeginCreateOrUpdateResponse = Appliance & {
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
      parsedBody: Appliance;
    };
};

/**
 * Contains response data for the beginCreateOrUpdateById operation.
 */
export type AppliancesBeginCreateOrUpdateByIdResponse = Appliance & {
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
      parsedBody: Appliance;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type AppliancesListByResourceGroupNextResponse = ApplianceListResult & {
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
      parsedBody: ApplianceListResult;
    };
};

/**
 * Contains response data for the listBySubscriptionNext operation.
 */
export type AppliancesListBySubscriptionNextResponse = ApplianceListResult & {
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
      parsedBody: ApplianceListResult;
    };
};

/**
 * Contains response data for the get operation.
 */
export type ApplianceDefinitionsGetResponse = ApplianceDefinition & {
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
      parsedBody: ApplianceDefinition;
    };
};

/**
 * Contains response data for the createOrUpdate operation.
 */
export type ApplianceDefinitionsCreateOrUpdateResponse = ApplianceDefinition & {
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
      parsedBody: ApplianceDefinition;
    };
};

/**
 * Contains response data for the listByResourceGroup operation.
 */
export type ApplianceDefinitionsListByResourceGroupResponse = ApplianceDefinitionListResult & {
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
      parsedBody: ApplianceDefinitionListResult;
    };
};

/**
 * Contains response data for the getById operation.
 */
export type ApplianceDefinitionsGetByIdResponse = ApplianceDefinition & {
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
      parsedBody: ApplianceDefinition;
    };
};

/**
 * Contains response data for the createOrUpdateById operation.
 */
export type ApplianceDefinitionsCreateOrUpdateByIdResponse = ApplianceDefinition & {
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
      parsedBody: ApplianceDefinition;
    };
};

/**
 * Contains response data for the beginCreateOrUpdate operation.
 */
export type ApplianceDefinitionsBeginCreateOrUpdateResponse = ApplianceDefinition & {
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
      parsedBody: ApplianceDefinition;
    };
};

/**
 * Contains response data for the beginCreateOrUpdateById operation.
 */
export type ApplianceDefinitionsBeginCreateOrUpdateByIdResponse = ApplianceDefinition & {
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
      parsedBody: ApplianceDefinition;
    };
};

/**
 * Contains response data for the listByResourceGroupNext operation.
 */
export type ApplianceDefinitionsListByResourceGroupNextResponse = ApplianceDefinitionListResult & {
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
      parsedBody: ApplianceDefinitionListResult;
    };
};
