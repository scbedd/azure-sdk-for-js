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
export const accountName: msRest.OperationURLParameter = {
  parameterPath: "accountName",
  mapper: {
    required: true,
    serializedName: "accountName",
    constraints: {
      MaxLength: 24,
      MinLength: 3
    },
    type: {
      name: "String"
    }
  }
};
export const apiVersion0: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "api-version",
    defaultValue: '2018-07-01',
    constraints: {
      MinLength: 1
    },
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
    defaultValue: '2018-03-01-preview',
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
export const blobServicesName: msRest.OperationURLParameter = {
  parameterPath: "blobServicesName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "BlobServicesName",
    defaultValue: 'default',
    type: {
      name: "String"
    }
  }
};
export const containerName: msRest.OperationURLParameter = {
  parameterPath: "containerName",
  mapper: {
    required: true,
    serializedName: "containerName",
    constraints: {
      MaxLength: 63,
      MinLength: 3
    },
    type: {
      name: "String"
    }
  }
};
export const expand: msRest.OperationQueryParameter = {
  parameterPath: [
    "options",
    "expand"
  ],
  mapper: {
    serializedName: "$expand",
    type: {
      name: "Enum",
      allowedValues: [
        "geoReplicationStats"
      ]
    }
  }
};
export const ifMatch0: msRest.OperationParameter = {
  parameterPath: [
    "options",
    "ifMatch"
  ],
  mapper: {
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};
export const ifMatch1: msRest.OperationParameter = {
  parameterPath: "ifMatch",
  mapper: {
    required: true,
    serializedName: "If-Match",
    type: {
      name: "String"
    }
  }
};
export const immutabilityPolicyName: msRest.OperationURLParameter = {
  parameterPath: "immutabilityPolicyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "immutabilityPolicyName",
    defaultValue: 'default',
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
export const managementPolicyName: msRest.OperationURLParameter = {
  parameterPath: "managementPolicyName",
  mapper: {
    required: true,
    isConstant: true,
    serializedName: "managementPolicyName",
    defaultValue: 'default',
    type: {
      name: "String"
    }
  }
};
export const resourceGroupName: msRest.OperationURLParameter = {
  parameterPath: "resourceGroupName",
  mapper: {
    required: true,
    serializedName: "resourceGroupName",
    constraints: {
      MaxLength: 90,
      MinLength: 1,
      Pattern: /^[-\w\._\(\)]+$/
    },
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
    constraints: {
      MinLength: 1
    },
    type: {
      name: "String"
    }
  }
};
