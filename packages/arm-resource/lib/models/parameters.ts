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
export const apiVersion: msRest.OperationQueryParameter = {
  parameterPath: "apiVersion",
  mapper: {
    required: true,
    serializedName: "api-version",
    type: {
      name: "String"
    }
  }
};
export const applianceDefinitionId: msRest.OperationURLParameter = {
  parameterPath: "applianceDefinitionId",
  mapper: {
    required: true,
    serializedName: "applianceDefinitionId",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const applianceDefinitionName: msRest.OperationURLParameter = {
  parameterPath: "applianceDefinitionName",
  mapper: {
    required: true,
    serializedName: "applianceDefinitionName",
    constraints: {
      MaxLength: 64,
      MinLength: 3
    },
    type: {
      name: "String"
    }
  }
};
export const applianceId: msRest.OperationURLParameter = {
  parameterPath: "applianceId",
  mapper: {
    required: true,
    serializedName: "applianceId",
    type: {
      name: "String"
    }
  },
  skipEncoding: true
};
export const applianceName: msRest.OperationURLParameter = {
  parameterPath: "applianceName",
  mapper: {
    required: true,
    serializedName: "applianceName",
    constraints: {
      MaxLength: 64,
      MinLength: 3
    },
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
    type: {
      name: "String"
    }
  }
};
