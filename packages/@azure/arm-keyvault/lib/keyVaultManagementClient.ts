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
import * as Models from "./models";
import * as Mappers from "./models/mappers";
import * as operations from "./operations";
import { KeyVaultManagementClientContext } from "./keyVaultManagementClientContext";


class KeyVaultManagementClient extends KeyVaultManagementClientContext {
  // Operation groups
  vaults: operations.Vaults;
  operations: operations.Operations;
  secrets: operations.Secrets;

  /**
   * Initializes a new instance of the KeyVaultManagementClient class.
   * @param credentials Credentials needed for the client to connect to Azure.
   * @param subscriptionId Subscription credentials which uniquely identify Microsoft Azure
   * subscription. The subscription ID forms part of the URI for every service call.
   * @param [options] The parameter options
   */
  constructor(credentials: msRest.ServiceClientCredentials, subscriptionId: string, options?: Models.KeyVaultManagementClientOptions) {
    super(credentials, subscriptionId, options);
    this.vaults = new operations.Vaults(this);
    this.operations = new operations.Operations(this);
    this.secrets = new operations.Secrets(this);
  }
}

// Operation Specifications

export {
  KeyVaultManagementClient,
  KeyVaultManagementClientContext,
  Models as KeyVaultManagementModels,
  Mappers as KeyVaultManagementMappers
};
export * from "./operations";
