/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "@azure/ms-rest-js";
import * as msRestAzure from "@azure/ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/serviceEndpointPolicyDefinitionsMappers";
import * as Parameters from "../models/parameters";
import { NetworkManagementClientContext } from "../networkManagementClientContext";

/** Class representing a ServiceEndpointPolicyDefinitions. */
export class ServiceEndpointPolicyDefinitions {
  private readonly client: NetworkManagementClientContext;

  /**
   * Create a ServiceEndpointPolicyDefinitions.
   * @param {NetworkManagementClientContext} client Reference to the service client.
   */
  constructor(client: NetworkManagementClientContext) {
    this.client = client;
  }

  /**
   * Deletes the specified ServiceEndpoint policy definitions.
   * @param resourceGroupName The name of the resource group.
   * @param serviceEndpointPolicyName The name of the Service Endpoint Policy.
   * @param serviceEndpointPolicyDefinitionName The name of the service endpoint policy definition.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, serviceEndpointPolicyName: string, serviceEndpointPolicyDefinitionName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,serviceEndpointPolicyName,serviceEndpointPolicyDefinitionName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Get the specified service endpoint policy definitions from service endpoint policy.
   * @param resourceGroupName The name of the resource group.
   * @param serviceEndpointPolicyName The name of the service endpoint policy name.
   * @param serviceEndpointPolicyDefinitionName The name of the service endpoint policy definition
   * name.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceEndpointPolicyDefinitionsGetResponse>
   */
  get(resourceGroupName: string, serviceEndpointPolicyName: string, serviceEndpointPolicyDefinitionName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServiceEndpointPolicyDefinitionsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceEndpointPolicyName The name of the service endpoint policy name.
   * @param serviceEndpointPolicyDefinitionName The name of the service endpoint policy definition
   * name.
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceEndpointPolicyName: string, serviceEndpointPolicyDefinitionName: string, callback: msRest.ServiceCallback<Models.ServiceEndpointPolicyDefinition>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceEndpointPolicyName The name of the service endpoint policy name.
   * @param serviceEndpointPolicyDefinitionName The name of the service endpoint policy definition
   * name.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, serviceEndpointPolicyName: string, serviceEndpointPolicyDefinitionName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServiceEndpointPolicyDefinition>): void;
  get(resourceGroupName: string, serviceEndpointPolicyName: string, serviceEndpointPolicyDefinitionName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServiceEndpointPolicyDefinition>, callback?: msRest.ServiceCallback<Models.ServiceEndpointPolicyDefinition>): Promise<Models.ServiceEndpointPolicyDefinitionsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceEndpointPolicyName,
        serviceEndpointPolicyDefinitionName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ServiceEndpointPolicyDefinitionsGetResponse>;
  }

  /**
   * Creates or updates a service endpoint policy definition in the specified service endpoint
   * policy.
   * @param resourceGroupName The name of the resource group.
   * @param serviceEndpointPolicyName The name of the service endpoint policy.
   * @param serviceEndpointPolicyDefinitionName The name of the service endpoint policy definition
   * name.
   * @param serviceEndpointPolicyDefinitions Parameters supplied to the create or update service
   * endpoint policy operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceEndpointPolicyDefinitionsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, serviceEndpointPolicyName: string, serviceEndpointPolicyDefinitionName: string, serviceEndpointPolicyDefinitions: Models.ServiceEndpointPolicyDefinition, options?: msRest.RequestOptionsBase): Promise<Models.ServiceEndpointPolicyDefinitionsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,serviceEndpointPolicyName,serviceEndpointPolicyDefinitionName,serviceEndpointPolicyDefinitions,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ServiceEndpointPolicyDefinitionsCreateOrUpdateResponse>;
  }

  /**
   * Gets all service endpoint policy definitions in a service end point policy.
   * @param resourceGroupName The name of the resource group.
   * @param serviceEndpointPolicyName The name of the service endpoint policy name.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceEndpointPolicyDefinitionsListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, serviceEndpointPolicyName: string, options?: msRest.RequestOptionsBase): Promise<Models.ServiceEndpointPolicyDefinitionsListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceEndpointPolicyName The name of the service endpoint policy name.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, serviceEndpointPolicyName: string, callback: msRest.ServiceCallback<Models.ServiceEndpointPolicyDefinitionListResult>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param serviceEndpointPolicyName The name of the service endpoint policy name.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, serviceEndpointPolicyName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServiceEndpointPolicyDefinitionListResult>): void;
  listByResourceGroup(resourceGroupName: string, serviceEndpointPolicyName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServiceEndpointPolicyDefinitionListResult>, callback?: msRest.ServiceCallback<Models.ServiceEndpointPolicyDefinitionListResult>): Promise<Models.ServiceEndpointPolicyDefinitionsListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        serviceEndpointPolicyName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.ServiceEndpointPolicyDefinitionsListByResourceGroupResponse>;
  }

  /**
   * Deletes the specified ServiceEndpoint policy definitions.
   * @param resourceGroupName The name of the resource group.
   * @param serviceEndpointPolicyName The name of the Service Endpoint Policy.
   * @param serviceEndpointPolicyDefinitionName The name of the service endpoint policy definition.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, serviceEndpointPolicyName: string, serviceEndpointPolicyDefinitionName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serviceEndpointPolicyName,
        serviceEndpointPolicyDefinitionName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Creates or updates a service endpoint policy definition in the specified service endpoint
   * policy.
   * @param resourceGroupName The name of the resource group.
   * @param serviceEndpointPolicyName The name of the service endpoint policy.
   * @param serviceEndpointPolicyDefinitionName The name of the service endpoint policy definition
   * name.
   * @param serviceEndpointPolicyDefinitions Parameters supplied to the create or update service
   * endpoint policy operation.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, serviceEndpointPolicyName: string, serviceEndpointPolicyDefinitionName: string, serviceEndpointPolicyDefinitions: Models.ServiceEndpointPolicyDefinition, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        serviceEndpointPolicyName,
        serviceEndpointPolicyDefinitionName,
        serviceEndpointPolicyDefinitions,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * Gets all service endpoint policy definitions in a service end point policy.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ServiceEndpointPolicyDefinitionsListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ServiceEndpointPolicyDefinitionsListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ServiceEndpointPolicyDefinitionListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ServiceEndpointPolicyDefinitionListResult>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ServiceEndpointPolicyDefinitionListResult>, callback?: msRest.ServiceCallback<Models.ServiceEndpointPolicyDefinitionListResult>): Promise<Models.ServiceEndpointPolicyDefinitionsListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.ServiceEndpointPolicyDefinitionsListByResourceGroupNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/serviceEndpointPolicies/{serviceEndpointPolicyName}/serviceEndpointPolicyDefinitions/{serviceEndpointPolicyDefinitionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceEndpointPolicyName,
    Parameters.serviceEndpointPolicyDefinitionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServiceEndpointPolicyDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/serviceEndpointPolicies/{serviceEndpointPolicyName}/serviceEndpointPolicyDefinitions",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceEndpointPolicyName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServiceEndpointPolicyDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/serviceEndpointPolicies/{serviceEndpointPolicyName}/serviceEndpointPolicyDefinitions/{serviceEndpointPolicyDefinitionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceEndpointPolicyName,
    Parameters.serviceEndpointPolicyDefinitionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Network/serviceEndpointPolicies/{serviceEndpointPolicyName}/serviceEndpointPolicyDefinitions/{serviceEndpointPolicyDefinitionName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.serviceEndpointPolicyName,
    Parameters.serviceEndpointPolicyDefinitionName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion0
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "serviceEndpointPolicyDefinitions",
    mapper: {
      ...Mappers.ServiceEndpointPolicyDefinition,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.ServiceEndpointPolicyDefinition
    },
    201: {
      bodyMapper: Mappers.ServiceEndpointPolicyDefinition
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  baseUrl: "https://management.azure.com",
  path: "{nextLink}",
  urlParameters: [
    Parameters.nextPageLink
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ServiceEndpointPolicyDefinitionListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
