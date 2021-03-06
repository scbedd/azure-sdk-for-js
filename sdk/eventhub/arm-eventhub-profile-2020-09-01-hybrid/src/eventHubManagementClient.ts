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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { EventHubManagementClientContext } from "./eventHubManagementClientContext";


class EventHubManagementClient extends EventHubManagementClientContext {
  // Operation groups
  clusters: operations.Clusters;
  namespaces: operations.Namespaces;
  privateEndpointConnections: operations.PrivateEndpointConnections;
  privateLinkResources: operations.PrivateLinkResources;
  disasterRecoveryConfigs: operations.DisasterRecoveryConfigs;
  eventHubs: operations.EventHubs;
  consumerGroups: operations.ConsumerGroups;
  operations: operations.Operations;
  regions: operations.Regions;

  /**
   * Initializes a new instance of the EventHubManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Subscription credentials that uniquely identify a Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.EventHubManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.clusters = new operations.Clusters(this);
    this.namespaces = new operations.Namespaces(this);
    this.privateEndpointConnections = new operations.PrivateEndpointConnections(this);
    this.privateLinkResources = new operations.PrivateLinkResources(this);
    this.disasterRecoveryConfigs = new operations.DisasterRecoveryConfigs(this);
    this.eventHubs = new operations.EventHubs(this);
    this.consumerGroups = new operations.ConsumerGroups(this);
    this.operations = new operations.Operations(this);
    this.regions = new operations.Regions(this);
  }
}

// Operation Specifications

export {
  EventHubManagementClient,
  EventHubManagementClientContext,
  Models as EventHubManagementModels,
  Mappers as EventHubManagementMappers
};
export * from "./operations";
