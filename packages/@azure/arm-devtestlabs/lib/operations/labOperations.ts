/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import * as msRest from "ms-rest-js";
import * as msRestAzure from "ms-rest-azure-js";
import * as Models from "../models";
import * as Mappers from "../models/labOperationsMappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClientContext } from "../devTestLabsClientContext";

/** Class representing a LabOperations. */
export class LabOperations {
  private readonly client: DevTestLabsClientContext;

  /**
   * Create a LabOperations.
   * @param {DevTestLabsClientContext} client Reference to the service client.
   */
  constructor(client: DevTestLabsClientContext) {
    this.client = client;
  }

  /**
   * List labs.
   * @param [options] The optional parameters
   * @returns Promise<Models.LabListBySubscriptionResponse>
   */
  listBySubscription(options?: Models.LabListBySubscriptionOptionalParams): Promise<Models.LabListBySubscriptionResponse>;
  /**
   * @param callback The callback
   */
  listBySubscription(callback: msRest.ServiceCallback<Models.ResponseWithContinuationLab>): void;
  /**
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscription(options: Models.LabListBySubscriptionOptionalParams, callback: msRest.ServiceCallback<Models.ResponseWithContinuationLab>): void;
  listBySubscription(options?: Models.LabListBySubscriptionOptionalParams, callback?: msRest.ServiceCallback<Models.ResponseWithContinuationLab>): Promise<Models.LabListBySubscriptionResponse> {
    return this.client.sendOperationRequest(
      {
        options
      },
      listBySubscriptionOperationSpec,
      callback) as Promise<Models.LabListBySubscriptionResponse>;
  }

  /**
   * List labs.
   * @param resourceGroupName The name of the resource group.
   * @param [options] The optional parameters
   * @returns Promise<Models.LabListByResourceGroupResponse>
   */
  listByResourceGroup(resourceGroupName: string, options?: Models.LabListByResourceGroupOptionalParams): Promise<Models.LabListByResourceGroupResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, callback: msRest.ServiceCallback<Models.ResponseWithContinuationLab>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroup(resourceGroupName: string, options: Models.LabListByResourceGroupOptionalParams, callback: msRest.ServiceCallback<Models.ResponseWithContinuationLab>): void;
  listByResourceGroup(resourceGroupName: string, options?: Models.LabListByResourceGroupOptionalParams, callback?: msRest.ServiceCallback<Models.ResponseWithContinuationLab>): Promise<Models.LabListByResourceGroupResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        options
      },
      listByResourceGroupOperationSpec,
      callback) as Promise<Models.LabListByResourceGroupResponse>;
  }

  /**
   * Get lab.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the lab.
   * @param [options] The optional parameters
   * @returns Promise<Models.LabGetResourceResponse>
   */
  getResource(resourceGroupName: string, name: string, options?: msRest.RequestOptionsBase): Promise<Models.LabGetResourceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the lab.
   * @param callback The callback
   */
  getResource(resourceGroupName: string, name: string, callback: msRest.ServiceCallback<Models.Lab>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the lab.
   * @param options The optional parameters
   * @param callback The callback
   */
  getResource(resourceGroupName: string, name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Lab>): void;
  getResource(resourceGroupName: string, name: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Lab>): Promise<Models.LabGetResourceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        options
      },
      getResourceOperationSpec,
      callback) as Promise<Models.LabGetResourceResponse>;
  }

  /**
   * Create or replace an existing Lab. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the lab.
   * @param lab
   * @param [options] The optional parameters
   * @returns Promise<Models.LabCreateOrUpdateResourceResponse>
   */
  createOrUpdateResource(resourceGroupName: string, name: string, lab: Models.Lab, options?: msRest.RequestOptionsBase): Promise<Models.LabCreateOrUpdateResourceResponse> {
    return this.beginCreateOrUpdateResource(resourceGroupName,name,lab,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.LabCreateOrUpdateResourceResponse>;
  }

  /**
   * Delete lab. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the lab.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteResource(resourceGroupName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteResource(resourceGroupName,name,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Modify properties of labs.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the lab.
   * @param lab
   * @param [options] The optional parameters
   * @returns Promise<Models.LabPatchResourceResponse>
   */
  patchResource(resourceGroupName: string, name: string, lab: Models.Lab, options?: msRest.RequestOptionsBase): Promise<Models.LabPatchResourceResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the lab.
   * @param lab
   * @param callback The callback
   */
  patchResource(resourceGroupName: string, name: string, lab: Models.Lab, callback: msRest.ServiceCallback<Models.Lab>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the lab.
   * @param lab
   * @param options The optional parameters
   * @param callback The callback
   */
  patchResource(resourceGroupName: string, name: string, lab: Models.Lab, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Lab>): void;
  patchResource(resourceGroupName: string, name: string, lab: Models.Lab, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.Lab>): Promise<Models.LabPatchResourceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        lab,
        options
      },
      patchResourceOperationSpec,
      callback) as Promise<Models.LabPatchResourceResponse>;
  }

  /**
   * Create virtual machines in a Lab. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the lab.
   * @param labVirtualMachine
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  createEnvironment(resourceGroupName: string, name: string, labVirtualMachine: Models.LabVirtualMachine, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginCreateEnvironment(resourceGroupName,name,labVirtualMachine,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Generate a URI for uploading custom disk images to a Lab.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the lab.
   * @param generateUploadUriParameter
   * @param [options] The optional parameters
   * @returns Promise<Models.LabGenerateUploadUriResponse>
   */
  generateUploadUri(resourceGroupName: string, name: string, generateUploadUriParameter: Models.GenerateUploadUriParameter, options?: msRest.RequestOptionsBase): Promise<Models.LabGenerateUploadUriResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the lab.
   * @param generateUploadUriParameter
   * @param callback The callback
   */
  generateUploadUri(resourceGroupName: string, name: string, generateUploadUriParameter: Models.GenerateUploadUriParameter, callback: msRest.ServiceCallback<Models.GenerateUploadUriResponse>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the lab.
   * @param generateUploadUriParameter
   * @param options The optional parameters
   * @param callback The callback
   */
  generateUploadUri(resourceGroupName: string, name: string, generateUploadUriParameter: Models.GenerateUploadUriParameter, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GenerateUploadUriResponse>): void;
  generateUploadUri(resourceGroupName: string, name: string, generateUploadUriParameter: Models.GenerateUploadUriParameter, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.GenerateUploadUriResponse>): Promise<Models.LabGenerateUploadUriResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        generateUploadUriParameter,
        options
      },
      generateUploadUriOperationSpec,
      callback) as Promise<Models.LabGenerateUploadUriResponse>;
  }

  /**
   * List disk images available for custom image creation.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the lab.
   * @param [options] The optional parameters
   * @returns Promise<Models.LabListVhdsResponse>
   */
  listVhds(resourceGroupName: string, name: string, options?: msRest.RequestOptionsBase): Promise<Models.LabListVhdsResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the lab.
   * @param callback The callback
   */
  listVhds(resourceGroupName: string, name: string, callback: msRest.ServiceCallback<Models.ResponseWithContinuationLabVhd>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the lab.
   * @param options The optional parameters
   * @param callback The callback
   */
  listVhds(resourceGroupName: string, name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResponseWithContinuationLabVhd>): void;
  listVhds(resourceGroupName: string, name: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ResponseWithContinuationLabVhd>): Promise<Models.LabListVhdsResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        name,
        options
      },
      listVhdsOperationSpec,
      callback) as Promise<Models.LabListVhdsResponse>;
  }

  /**
   * Create or replace an existing Lab. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the lab.
   * @param lab
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateOrUpdateResource(resourceGroupName: string, name: string, lab: Models.Lab, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        name,
        lab,
        options
      },
      beginCreateOrUpdateResourceOperationSpec,
      options);
  }

  /**
   * Delete lab. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the lab.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteResource(resourceGroupName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        name,
        options
      },
      beginDeleteResourceOperationSpec,
      options);
  }

  /**
   * Create virtual machines in a Lab. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param name The name of the lab.
   * @param labVirtualMachine
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreateEnvironment(resourceGroupName: string, name: string, labVirtualMachine: Models.LabVirtualMachine, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        name,
        labVirtualMachine,
        options
      },
      beginCreateEnvironmentOperationSpec,
      options);
  }

  /**
   * List labs.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.LabListBySubscriptionNextResponse>
   */
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.LabListBySubscriptionNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResponseWithContinuationLab>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listBySubscriptionNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResponseWithContinuationLab>): void;
  listBySubscriptionNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ResponseWithContinuationLab>): Promise<Models.LabListBySubscriptionNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listBySubscriptionNextOperationSpec,
      callback) as Promise<Models.LabListBySubscriptionNextResponse>;
  }

  /**
   * List labs.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.LabListByResourceGroupNextResponse>
   */
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.LabListByResourceGroupNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResponseWithContinuationLab>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByResourceGroupNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResponseWithContinuationLab>): void;
  listByResourceGroupNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ResponseWithContinuationLab>): Promise<Models.LabListByResourceGroupNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByResourceGroupNextOperationSpec,
      callback) as Promise<Models.LabListByResourceGroupNextResponse>;
  }

  /**
   * List disk images available for custom image creation.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.LabListVhdsNextResponse>
   */
  listVhdsNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.LabListVhdsNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listVhdsNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResponseWithContinuationLabVhd>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listVhdsNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResponseWithContinuationLabVhd>): void;
  listVhdsNext(nextPageLink: string, options?: msRest.RequestOptionsBase, callback?: msRest.ServiceCallback<Models.ResponseWithContinuationLabVhd>): Promise<Models.LabListVhdsNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listVhdsNextOperationSpec,
      callback) as Promise<Models.LabListVhdsNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listBySubscriptionOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.DevTestLab/labs",
  urlParameters: [
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.orderBy,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResponseWithContinuationLab
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listByResourceGroupOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName
  ],
  queryParameters: [
    Parameters.filter,
    Parameters.top,
    Parameters.orderBy,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResponseWithContinuationLab
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getResourceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Lab
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const patchResourceOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "lab",
    mapper: {
      ...Mappers.Lab,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Lab
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const generateUploadUriOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/generateUploadUri",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "generateUploadUriParameter",
    mapper: {
      ...Mappers.GenerateUploadUriParameter,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.GenerateUploadUriResponse
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listVhdsOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/listVhds",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ResponseWithContinuationLabVhd
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOrUpdateResourceOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "lab",
    mapper: {
      ...Mappers.Lab,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Lab
    },
    201: {
      bodyMapper: Mappers.Lab
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteResourceOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    202: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateEnvironmentOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{name}/createEnvironment",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "labVirtualMachine",
    mapper: {
      ...Mappers.LabVirtualMachine,
      required: true
    }
  },
  responses: {
    200: {},
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listBySubscriptionNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ResponseWithContinuationLab
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
      bodyMapper: Mappers.ResponseWithContinuationLab
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const listVhdsNextOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
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
      bodyMapper: Mappers.ResponseWithContinuationLabVhd
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
