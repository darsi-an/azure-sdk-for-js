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
import * as Models from "../models";
import * as Mappers from "../models/billingAccountBillingPermissionsMappers";
import * as Parameters from "../models/parameters";
import { BillingManagementClientContext } from "../billingManagementClientContext";

/** Class representing a BillingAccountBillingPermissions. */
export class BillingAccountBillingPermissions {
  private readonly client: BillingManagementClientContext;

  /**
   * Create a BillingAccountBillingPermissions.
   * @param {BillingManagementClientContext} client Reference to the service client.
   */
  constructor(client: BillingManagementClientContext) {
    this.client = client;
  }

  /**
   * Lists all billingPermissions for the caller has for a billing account.
   * @param billingAccountName billing Account Id.
   * @param [options] The optional parameters
   * @returns Promise<Models.BillingAccountBillingPermissionsListResponse>
   */
  list(billingAccountName: string, options?: msRest.RequestOptionsBase): Promise<Models.BillingAccountBillingPermissionsListResponse>;
  /**
   * @param billingAccountName billing Account Id.
   * @param callback The callback
   */
  list(billingAccountName: string, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  /**
   * @param billingAccountName billing Account Id.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(billingAccountName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.BillingPermissionsListResult>): void;
  list(billingAccountName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.BillingPermissionsListResult>, callback?: msRest.ServiceCallback<Models.BillingPermissionsListResult>): Promise<Models.BillingAccountBillingPermissionsListResponse> {
    return this.client.sendOperationRequest(
      {
        billingAccountName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.BillingAccountBillingPermissionsListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "providers/Microsoft.Billing/billingAccounts/{billingAccountName}/providers/Microsoft.Billing/billingPermissions",
  urlParameters: [
    Parameters.billingAccountName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.BillingPermissionsListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};