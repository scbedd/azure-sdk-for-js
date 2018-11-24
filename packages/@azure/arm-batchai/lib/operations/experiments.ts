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
import * as Mappers from "../models/experimentsMappers";
import * as Parameters from "../models/parameters";
import { BatchAIManagementClientContext } from "../batchAIManagementClientContext";

/** Class representing a Experiments. */
export class Experiments {
  private readonly client: BatchAIManagementClientContext;

  /**
   * Create a Experiments.
   * @param {BatchAIManagementClientContext} client Reference to the service client.
   */
  constructor(client: BatchAIManagementClientContext) {
    this.client = client;
  }

  /**
   * Gets a list of Experiments within the specified Workspace.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExperimentsListByWorkspaceResponse>
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, options?: Models.ExperimentsListByWorkspaceOptionalParams): Promise<Models.ExperimentsListByWorkspaceResponse>;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, callback: msRest.ServiceCallback<Models.ExperimentListResult>): void;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspace(resourceGroupName: string, workspaceName: string, options: Models.ExperimentsListByWorkspaceOptionalParams, callback: msRest.ServiceCallback<Models.ExperimentListResult>): void;
  listByWorkspace(resourceGroupName: string, workspaceName: string, options?: Models.ExperimentsListByWorkspaceOptionalParams | msRest.ServiceCallback<Models.ExperimentListResult>, callback?: msRest.ServiceCallback<Models.ExperimentListResult>): Promise<Models.ExperimentsListByWorkspaceResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        options
      },
      listByWorkspaceOperationSpec,
      callback) as Promise<Models.ExperimentsListByWorkspaceResponse>;
  }

  /**
   * Creates an Experiment.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExperimentsCreateResponse>
   */
  create(resourceGroupName: string, workspaceName: string, experimentName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExperimentsCreateResponse> {
    return this.beginCreate(resourceGroupName,workspaceName,experimentName,options)
      .then(lroPoller => lroPoller.pollUntilFinished()) as Promise<Models.ExperimentsCreateResponse>;
  }

  /**
   * Deletes an Experiment.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, workspaceName: string, experimentName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginDeleteMethod(resourceGroupName,workspaceName,experimentName,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Gets information about an Experiment.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExperimentsGetResponse>
   */
  get(resourceGroupName: string, workspaceName: string, experimentName: string, options?: msRest.RequestOptionsBase): Promise<Models.ExperimentsGetResponse>;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, experimentName: string, callback: msRest.ServiceCallback<Models.Experiment>): void;
  /**
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, workspaceName: string, experimentName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Experiment>): void;
  get(resourceGroupName: string, workspaceName: string, experimentName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Experiment>, callback?: msRest.ServiceCallback<Models.Experiment>): Promise<Models.ExperimentsGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        workspaceName,
        experimentName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.ExperimentsGetResponse>;
  }

  /**
   * Creates an Experiment.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginCreate(resourceGroupName: string, workspaceName: string, experimentName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        experimentName,
        options
      },
      beginCreateOperationSpec,
      options);
  }

  /**
   * Deletes an Experiment.
   * @param resourceGroupName Name of the resource group to which the resource belongs.
   * @param workspaceName The name of the workspace. Workspace names can only contain a combination
   * of alphanumeric characters along with dash (-) and underscore (_). The name must be from 1
   * through 64 characters long.
   * @param experimentName The name of the experiment. Experiment names can only contain a
   * combination of alphanumeric characters along with dash (-) and underscore (_). The name must be
   * from 1 through 64 characters long.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginDeleteMethod(resourceGroupName: string, workspaceName: string, experimentName: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        workspaceName,
        experimentName,
        options
      },
      beginDeleteMethodOperationSpec,
      options);
  }

  /**
   * Gets a list of Experiments within the specified Workspace.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.ExperimentsListByWorkspaceNextResponse>
   */
  listByWorkspaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.ExperimentsListByWorkspaceNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listByWorkspaceNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ExperimentListResult>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listByWorkspaceNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ExperimentListResult>): void;
  listByWorkspaceNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ExperimentListResult>, callback?: msRest.ServiceCallback<Models.ExperimentListResult>): Promise<Models.ExperimentsListByWorkspaceNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listByWorkspaceNextOperationSpec,
      callback) as Promise<Models.ExperimentsListByWorkspaceNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listByWorkspaceOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.subscriptionId
  ],
  queryParameters: [
    Parameters.apiVersion,
    Parameters.maxResults2
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ExperimentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.experimentName,
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
      bodyMapper: Mappers.Experiment
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginCreateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.experimentName,
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
      bodyMapper: Mappers.Experiment
    },
    202: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginDeleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.BatchAI/workspaces/{workspaceName}/experiments/{experimentName}",
  urlParameters: [
    Parameters.resourceGroupName,
    Parameters.workspaceName,
    Parameters.experimentName,
    Parameters.subscriptionId
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

const listByWorkspaceNextOperationSpec: msRest.OperationSpec = {
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
      bodyMapper: Mappers.ExperimentListResult
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
