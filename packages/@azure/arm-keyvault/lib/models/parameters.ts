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

export const acceptLanguage: msRest.OperationParameter = {
  parameterPath: "acceptLanguage",
  mapper: {
    serializedName: "accept-language",
    defaultValue: 'en-US',
    type: {
      name: "String"
    }
  }
};
export const apiVersion0: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};
export const apiVersion1: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2015-11-01',
    type: {
      name: "String"
    }
  }
};
export const filter: msRest.OperationQueryParameter = {
  parameterPath: "filter",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "$filter",
    defaultValue: 'resourceType eq \'Microsoft.KeyVault/vaults\'',
    type: {
      name: "String"
    }
  }
};
export const location: msRest.OperationURLParameter = {
  parameterPath: "location",
  mapper: {
    required: true,
    serializedName: "location",
    type: {
      name: "String"
    }
  }
};
export const nextPageLink: msRest.OperationURLParameter = {
  parameterPath: "nextPageLink",
  mapper: {
    required: true,
    serializedName: "nextLink",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const operationKind: msRest.OperationURLParameter = {
  parameterPath: "operationKind",
  mapper: {
    required: true,
    serializedName: "operationKind",
    type: {
      name: "Enum",
      allowedValues: [
        "add",
        "replace",
        "remove"
      ]
    }
  }
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    type: {
      name: "String"
    }
  }
};
export const secretName0: msRest.OperationURLParameter = {
  parameterPath: "secretName",
  mapper: {
    required: true,
    serializedName: "secretName",
    constraints: {
      Pattern: /^[a-zA-Z0-9-]{1,127}$/
    },
    type: {
      name: "String"
    }
  }
};
export const secretName1: msRest.OperationURLParameter = {
  parameterPath: "secretName",
  mapper: {
    required: true,
    serializedName: "secretName",
    type: {
      name: "String"
    }
  }
};
export const subscriptionId: msRest.OperationURLParameter = {
  parameterPath: "subscriptionId",
  mapper: {
    required: true,
    serializedName: "subscriptionId",
    type: {
      name: "String"
    }
  }
};
export const top: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "top"
  ],
  mapper: {
    serializedName: "$top",
    type: {
      name: "Number"
    }
  }
};
export const vaultName0: msRest.OperationURLParameter = {
  parameterPath: "vaultName",
  mapper: {
    required: true,
    serializedName: "vaultName",
    constraints: {
      Pattern: /^[a-zA-Z0-9-]{3,24}$/
    },
    type: {
      name: "String"
    }
  }
};
export const vaultName1: msRest.OperationURLParameter = {
  parameterPath: "vaultName",
  mapper: {
    required: true,
    serializedName: "vaultName",
    type: {
      name: "String"
    }
  }
};
