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
import * as Models from "../models";
import * as Mappers from "../models/softwareUpdateConfigurationsMappers";
import * as Parameters from "../models/parameters";
import { AutomationClientContext } from "../automationClientContext";

/** Class representing a SoftwareUpdateConfigurations. */
export class SoftwareUpdateConfigurations {
  private readonly client: AutomationClientContext;

  /**
   * Create a SoftwareUpdateConfigurations.
   * @param {AutomationClientContext} client Reference to the service client.
   */
  constructor(client: AutomationClientContext) {
    this.client = client;
  }

  /**
   * Create a new software update configuration with the name given in the URI.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param softwareUpdateConfigurationName The name of the software update configuration to be
   * created.
   * @param parameters Request body.
   * @param [options] The optional parameters
   * @returns Promise<Models.SoftwareUpdateConfigurationsCreateResponse>
   */
  create(resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationName: string, parameters: Models.SoftwareUpdateConfiguration, options?: Models.SoftwareUpdateConfigurationsCreateOptionalParams): Promise<Models.SoftwareUpdateConfigurationsCreateResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param softwareUpdateConfigurationName The name of the software update configuration to be
   * created.
   * @param parameters Request body.
   * @param callback The callback
   */
  create(resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationName: string, parameters: Models.SoftwareUpdateConfiguration, callback: msRest.ServiceCallback<Models.SoftwareUpdateConfiguration>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param softwareUpdateConfigurationName The name of the software update configuration to be
   * created.
   * @param parameters Request body.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationName: string, parameters: Models.SoftwareUpdateConfiguration, options: Models.SoftwareUpdateConfigurationsCreateOptionalParams, callback: msRest.ServiceCallback<Models.SoftwareUpdateConfiguration>): void;
  create(resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationName: string, parameters: Models.SoftwareUpdateConfiguration, options?: Models.SoftwareUpdateConfigurationsCreateOptionalParams, callback?: msRest.ServiceCallback<Models.SoftwareUpdateConfiguration>): Promise<Models.SoftwareUpdateConfigurationsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        softwareUpdateConfigurationName,
        parameters,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.SoftwareUpdateConfigurationsCreateResponse>;
  }

  /**
   * Get a single software update configuration by name.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param softwareUpdateConfigurationName The name of the software update configuration to be
   * created.
   * @param [options] The optional parameters
   * @returns Promise<Models.SoftwareUpdateConfigurationsGetByNameResponse>
   */
  getByName(resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationName: string, options?: Models.SoftwareUpdateConfigurationsGetByNameOptionalParams): Promise<Models.SoftwareUpdateConfigurationsGetByNameResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param softwareUpdateConfigurationName The name of the software update configuration to be
   * created.
   * @param callback The callback
   */
  getByName(resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationName: string, callback: msRest.ServiceCallback<Models.SoftwareUpdateConfiguration>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param softwareUpdateConfigurationName The name of the software update configuration to be
   * created.
   * @param options The optional parameters
   * @param callback The callback
   */
  getByName(resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationName: string, options: Models.SoftwareUpdateConfigurationsGetByNameOptionalParams, callback: msRest.ServiceCallback<Models.SoftwareUpdateConfiguration>): void;
  getByName(resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationName: string, options?: Models.SoftwareUpdateConfigurationsGetByNameOptionalParams, callback?: msRest.ServiceCallback<Models.SoftwareUpdateConfiguration>): Promise<Models.SoftwareUpdateConfigurationsGetByNameResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        softwareUpdateConfigurationName,
        options
      },
      getByNameOperationSpec,
      callback) as Promise<Models.SoftwareUpdateConfigurationsGetByNameResponse>;
  }

  /**
   * delete a specific software update configuration.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param softwareUpdateConfigurationName The name of the software update configuration to be
   * created.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationName: string, options?: Models.SoftwareUpdateConfigurationsDeleteMethodOptionalParams): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param softwareUpdateConfigurationName The name of the software update configuration to be
   * created.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param softwareUpdateConfigurationName The name of the software update configuration to be
   * created.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationName: string, options: Models.SoftwareUpdateConfigurationsDeleteMethodOptionalParams, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, automationAccountName: string, softwareUpdateConfigurationName: string, options?: Models.SoftwareUpdateConfigurationsDeleteMethodOptionalParams, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        softwareUpdateConfigurationName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Get all software update configurations for the account.
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param [options] The optional parameters
   * @returns Promise<Models.SoftwareUpdateConfigurationsListResponse>
   */
  list(resourceGroupName: string, automationAccountName: string, options?: Models.SoftwareUpdateConfigurationsListOptionalParams): Promise<Models.SoftwareUpdateConfigurationsListResponse>;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param callback The callback
   */
  list(resourceGroupName: string, automationAccountName: string, callback: msRest.ServiceCallback<Models.SoftwareUpdateConfigurationListResult>): void;
  /**
   * @param resourceGroupName Name of an Azure Resource group.
   * @param automationAccountName The name of the automation account.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, automationAccountName: string, options: Models.SoftwareUpdateConfigurationsListOptionalParams, callback: msRest.ServiceCallback<Models.SoftwareUpdateConfigurationListResult>): void;
  list(resourceGroupName: string, automationAccountName: string, options?: Models.SoftwareUpdateConfigurationsListOptionalParams, callback?: msRest.ServiceCallback<Models.SoftwareUpdateConfigurationListResult>): Promise<Models.SoftwareUpdateConfigurationsListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        automationAccountName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.SoftwareUpdateConfigurationsListResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurations/{softwareUpdateConfigurationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.softwareUpdateConfigurationName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.clientRequestId,
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.SoftwareUpdateConfiguration,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.SoftwareUpdateConfiguration
    },
    201: {
      bodyMapper: Mappers.SoftwareUpdateConfiguration
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const getByNameOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurations/{softwareUpdateConfigurationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.softwareUpdateConfigurationName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.clientRequestId,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SoftwareUpdateConfiguration
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurations/{softwareUpdateConfigurationName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName,
    Parameters.softwareUpdateConfigurationName
  ],
  queryParameters: [
    Parameters.apiVersion1
  ],
  headerParameters: [
    Parameters.clientRequestId,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {},
    204: {},
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};

const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Automation/automationAccounts/{automationAccountName}/softwareUpdateConfigurations",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.automationAccountName
  ],
  queryParameters: [
    Parameters.apiVersion1,
    Parameters.filter
  ],
  headerParameters: [
    Parameters.clientRequestId,
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.SoftwareUpdateConfigurationListResult
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};