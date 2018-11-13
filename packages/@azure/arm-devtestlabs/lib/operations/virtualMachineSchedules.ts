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
import * as Mappers from "../models/virtualMachineSchedulesMappers";
import * as Parameters from "../models/parameters";
import { DevTestLabsClientContext } from "../devTestLabsClientContext";

/** Class representing a VirtualMachineSchedules. */
export class VirtualMachineSchedules {
  private readonly client: DevTestLabsClientContext;

  /**
   * Create a VirtualMachineSchedules.
   * @param {DevTestLabsClientContext} client Reference to the service client.
   */
  constructor(client: DevTestLabsClientContext) {
    this.client = client;
  }

  /**
   * List schedules in a given virtual machine.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineSchedulesListResponse>
   */
  list(resourceGroupName: string, labName: string, virtualMachineName: string, options?: Models.VirtualMachineSchedulesListOptionalParams): Promise<Models.VirtualMachineSchedulesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param callback The callback
   */
  list(resourceGroupName: string, labName: string, virtualMachineName: string, callback: msRest.ServiceCallback<Models.ScheduleList>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, labName: string, virtualMachineName: string, options: Models.VirtualMachineSchedulesListOptionalParams, callback: msRest.ServiceCallback<Models.ScheduleList>): void;
  list(resourceGroupName: string, labName: string, virtualMachineName: string, options?: Models.VirtualMachineSchedulesListOptionalParams | msRest.ServiceCallback<Models.ScheduleList>, callback?: msRest.ServiceCallback<Models.ScheduleList>): Promise<Models.VirtualMachineSchedulesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        virtualMachineName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.VirtualMachineSchedulesListResponse>;
  }

  /**
   * Get schedule.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param name The name of the schedule.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineSchedulesGetResponse>
   */
  get(resourceGroupName: string, labName: string, virtualMachineName: string, name: string, options?: Models.VirtualMachineSchedulesGetOptionalParams): Promise<Models.VirtualMachineSchedulesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param name The name of the schedule.
   * @param callback The callback
   */
  get(resourceGroupName: string, labName: string, virtualMachineName: string, name: string, callback: msRest.ServiceCallback<Models.Schedule>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param name The name of the schedule.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, labName: string, virtualMachineName: string, name: string, options: Models.VirtualMachineSchedulesGetOptionalParams, callback: msRest.ServiceCallback<Models.Schedule>): void;
  get(resourceGroupName: string, labName: string, virtualMachineName: string, name: string, options?: Models.VirtualMachineSchedulesGetOptionalParams | msRest.ServiceCallback<Models.Schedule>, callback?: msRest.ServiceCallback<Models.Schedule>): Promise<Models.VirtualMachineSchedulesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        virtualMachineName,
        name,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.VirtualMachineSchedulesGetResponse>;
  }

  /**
   * Create or replace an existing schedule.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param name The name of the schedule.
   * @param schedule A schedule.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineSchedulesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, labName: string, virtualMachineName: string, name: string, schedule: Models.Schedule, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineSchedulesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param name The name of the schedule.
   * @param schedule A schedule.
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, labName: string, virtualMachineName: string, name: string, schedule: Models.Schedule, callback: msRest.ServiceCallback<Models.Schedule>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param name The name of the schedule.
   * @param schedule A schedule.
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, labName: string, virtualMachineName: string, name: string, schedule: Models.Schedule, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Schedule>): void;
  createOrUpdate(resourceGroupName: string, labName: string, virtualMachineName: string, name: string, schedule: Models.Schedule, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Schedule>, callback?: msRest.ServiceCallback<Models.Schedule>): Promise<Models.VirtualMachineSchedulesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        virtualMachineName,
        name,
        schedule,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.VirtualMachineSchedulesCreateOrUpdateResponse>;
  }

  /**
   * Delete schedule.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param name The name of the schedule.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, labName: string, virtualMachineName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param name The name of the schedule.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, labName: string, virtualMachineName: string, name: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param name The name of the schedule.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, labName: string, virtualMachineName: string, name: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, labName: string, virtualMachineName: string, name: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        virtualMachineName,
        name,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Modify properties of schedules.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param name The name of the schedule.
   * @param schedule A schedule.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineSchedulesUpdateResponse>
   */
  update(resourceGroupName: string, labName: string, virtualMachineName: string, name: string, schedule: Models.ScheduleFragment, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineSchedulesUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param name The name of the schedule.
   * @param schedule A schedule.
   * @param callback The callback
   */
  update(resourceGroupName: string, labName: string, virtualMachineName: string, name: string, schedule: Models.ScheduleFragment, callback: msRest.ServiceCallback<Models.Schedule>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param name The name of the schedule.
   * @param schedule A schedule.
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, labName: string, virtualMachineName: string, name: string, schedule: Models.ScheduleFragment, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.Schedule>): void;
  update(resourceGroupName: string, labName: string, virtualMachineName: string, name: string, schedule: Models.ScheduleFragment, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.Schedule>, callback?: msRest.ServiceCallback<Models.Schedule>): Promise<Models.VirtualMachineSchedulesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labName,
        virtualMachineName,
        name,
        schedule,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.VirtualMachineSchedulesUpdateResponse>;
  }

  /**
   * Execute a schedule. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param name The name of the schedule.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  execute(resourceGroupName: string, labName: string, virtualMachineName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse> {
    return this.beginExecute(resourceGroupName,labName,virtualMachineName,name,options)
      .then(lroPoller => lroPoller.pollUntilFinished());
  }

  /**
   * Execute a schedule. This operation can take a while to complete.
   * @param resourceGroupName The name of the resource group.
   * @param labName The name of the lab.
   * @param virtualMachineName The name of the virtual machine.
   * @param name The name of the schedule.
   * @param [options] The optional parameters
   * @returns Promise<msRestAzure.LROPoller>
   */
  beginExecute(resourceGroupName: string, labName: string, virtualMachineName: string, name: string, options?: msRest.RequestOptionsBase): Promise<msRestAzure.LROPoller> {
    return this.client.sendLRORequest(
      {
        resourceGroupName,
        labName,
        virtualMachineName,
        name,
        options
      },
      beginExecuteOperationSpec,
      options);
  }

  /**
   * List schedules in a given virtual machine.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.VirtualMachineSchedulesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.VirtualMachineSchedulesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ScheduleList>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ScheduleList>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ScheduleList>, callback?: msRest.ServiceCallback<Models.ScheduleList>): Promise<Models.VirtualMachineSchedulesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.VirtualMachineSchedulesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{virtualMachineName}/schedules",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.virtualMachineName
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.filter,
    Parameters.top,
    Parameters.orderby,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.ScheduleList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{virtualMachineName}/schedules/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.virtualMachineName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.expand,
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.Schedule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{virtualMachineName}/schedules/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.virtualMachineName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "schedule",
    mapper: {
      ...Mappers.Schedule,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Schedule
    },
    201: {
      bodyMapper: Mappers.Schedule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{virtualMachineName}/schedules/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.virtualMachineName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const updateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PATCH",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{virtualMachineName}/schedules/{name}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.virtualMachineName,
    Parameters.name
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "schedule",
    mapper: {
      ...Mappers.ScheduleFragment,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.Schedule
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const beginExecuteOperationSpec: msRest.OperationSpec = {
  httpMethod: "POST",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.DevTestLab/labs/{labName}/virtualmachines/{virtualMachineName}/schedules/{name}/execute",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labName,
    Parameters.virtualMachineName,
    Parameters.name
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
      bodyMapper: Mappers.ScheduleList
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
