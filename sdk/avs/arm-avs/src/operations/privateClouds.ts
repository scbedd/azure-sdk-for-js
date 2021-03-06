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
import * as Mappers from "../models/privateCloudsMappers";
import * as Parameters from "../models/parameters";
import { AvsClientContext } from "../avsClientContext";

/** Class representing a PrivateClouds. */
export class PrivateClouds {
  private readonly client: AvsClientContext;

  /**
   * Create a PrivateClouds.
   * @param {AvsClientContext} client Reference to the service client.
   */
  constructor(client: AvsClientContext) {
    this.client = client;
  }

  /**
   * @summary List private clouds in a resource group
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateCloudsListResponse>
   */
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateCloudsListResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param callback The callback
   */
  list(resourceGroupName: string, callback: msRest.ServiceCallback<Models.PrivateCloudList>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateCloudList>): void;
  list(resourceGroupName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateCloudList>, callback?: msRest.ServiceCallback<Models.PrivateCloudList>): Promise<Models.PrivateCloudsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.PrivateCloudsListResponse>;
  }

  /**
   * @summary List private clouds in a subscription
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateCloudsListInSubscriptionResponse>
   */
  listInSubscription(options?: msRest.RequestOptionsBase): Promise<Models.PrivateCloudsListInSubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listInSubscription(callback: msRest.ServiceCallback<Models.PrivateCloudList>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listInSubscription(options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateCloudList>): void;
  listInSubscription(options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateCloudList>, callback?: msRest.ServiceCallback<Models.PrivateCloudList>): Promise<Models.PrivateCloudsListInSubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listInSubscriptionOperationSpec,
      callback) as Promise<Models.PrivateCloudsListInSubscriptionResponse>;
  }

  /**
   * @summary Get a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateCloudsGetResponse>
   */
  get(resourceGroupName: string, privateCloudName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateCloudsGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param callback The callback
   */
  get(resourceGroupName: string, privateCloudName: string, callback: msRest.ServiceCallback<Models.PrivateCloud>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, privateCloudName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateCloud>): void;
  get(resourceGroupName: string, privateCloudName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateCloud>, callback?: msRest.ServiceCallback<Models.PrivateCloud>): Promise<Models.PrivateCloudsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateCloudName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.PrivateCloudsGetResponse>;
  }

  /**
   * @summary Create or update a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param privateCloud The private cloud
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateCloudsCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, privateCloudName: string, privateCloud: Models.PrivateCloud, options?: msRest.RequestOptionsBase): Promise<Models.PrivateCloudsCreateOrUpdateResponse> {
    return this.beginCreateOrUpdate(resourceGroupName,privateCloudName,privateCloud,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PrivateCloudsCreateOrUpdateResponse>;
  }

  /**
   * @summary Update a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param privateCloudUpdate The private cloud properties to be updated
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateCloudsUpdateResponse>
   */
  update(resourceGroupName: string, privateCloudName: string, privateCloudUpdate: Models.PrivateCloudUpdate, options?: msRest.RequestOptionsBase): Promise<Models.PrivateCloudsUpdateResponse> {
    return this.beginUpdate(resourceGroupName,privateCloudName,privateCloudUpdate,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.PrivateCloudsUpdateResponse>;
  }

  /**
   * @summary Delete a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, privateCloudName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,privateCloudName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * @summary List the admin credentials for the private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateCloudsListAdminCredentialsResponse>
   */
  listAdminCredentials(resourceGroupName: string, privateCloudName: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateCloudsListAdminCredentialsResponse>;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param callback The callback
   */
  listAdminCredentials(resourceGroupName: string, privateCloudName: string, callback: msRest.ServiceCallback<Models.AdminCredentials>): void;
  /**
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param options The optional parameters
   * @param callback The callback
   */
  listAdminCredentials(resourceGroupName: string, privateCloudName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AdminCredentials>): void;
  listAdminCredentials(resourceGroupName: string, privateCloudName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AdminCredentials>, callback?: msRest.ServiceCallback<Models.AdminCredentials>): Promise<Models.PrivateCloudsListAdminCredentialsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        privateCloudName,
        options
      },
      listAdminCredentialsOperationSpec,
      callback) as Promise<Models.PrivateCloudsListAdminCredentialsResponse>;
  }

  /**
   * @summary Create or update a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param privateCloud The private cloud
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdate(resourceGroupName: string, privateCloudName: string, privateCloud: Models.PrivateCloud, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        privateCloudName,
        privateCloud,
        options
      },
      beginCreateOrUpdateOperationSpec,
      options);
  }

  /**
   * @summary Update a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param privateCloudUpdate The private cloud properties to be updated
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginUpdate(resourceGroupName: string, privateCloudName: string, privateCloudUpdate: Models.PrivateCloudUpdate, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        privateCloudName,
        privateCloudUpdate,
        options
      },
      beginUpdateOperationSpec,
      options);
  }

  /**
   * @summary Delete a private cloud
   * @param resourceGroupName The name of the resource group. The name is case insensitive.
   * @param privateCloudName Name of the private cloud
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, privateCloudName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        privateCloudName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * @summary List private clouds in a resource group
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateCloudsListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateCloudsListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PrivateCloudList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateCloudList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateCloudList>, callback?: msRest.ServiceCallback<Models.PrivateCloudList>): Promise<Models.PrivateCloudsListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.PrivateCloudsListNextResponse>;
  }

  /**
   * @summary List private clouds in a subscription
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.PrivateCloudsListInSubscriptionNextResponse>
   */
  listInSubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.PrivateCloudsListInSubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listInSubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.PrivateCloudList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listInSubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.PrivateCloudList>): void;
  listInSubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.PrivateCloudList>, callback?: msRest.ServiceCallback<Models.PrivateCloudList>): Promise<Models.PrivateCloudsListInSubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listInSubscriptionNextOperationSpec,
      callback) as Promise<Models.PrivateCloudsListInSubscriptionNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateCloudList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listInSubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.AVS/privateClouds",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateCloudList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.PrivateCloud
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listAdminCredentialsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}/listAdminCredentials",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AdminCredentials
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "privateCloud",
    mapper: {
      ...Mappers.PrivateCloud,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PrivateCloud
    },
    201: {
      bodyMapper: Mappers.PrivateCloud
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "privateCloudUpdate",
    mapper: {
      ...Mappers.PrivateCloudUpdate,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.PrivateCloud
    },
    201: {
      bodyMapper: Mappers.PrivateCloud
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.AVS/privateClouds/{privateCloudName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.privateCloudName
  ],
  queryParameters: [
    Parameters.apiVersion
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

const listNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.PrivateCloudList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listInSubscriptionNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.PrivateCloudList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
