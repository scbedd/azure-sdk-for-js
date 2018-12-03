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
import * as Mappers from "../models/marketplaceAgreementsMappers";
import * as Parameters from "../models/parameters";
import { MarketplaceOrderingAgreementsContext } from "../marketplaceOrderingAgreementsContext";

/** Class representing a MarketplaceAgreements. */
export class MarketplaceAgreements {
  private readonly client: MarketplaceOrderingAgreementsContext;

  /**
   * Create a MarketplaceAgreements.
   * @param {MarketplaceOrderingAgreementsContext} client Reference to the service client.
   */
  constructor(client: MarketplaceOrderingAgreementsContext) {
    this.client = client;
  }

  /**
   * Get marketplace terms.
   * @param publisherId Publisher identifier string of image being deployed.
   * @param offerId Offer identifier string of image being deployed.
   * @param planId Plan identifier string of image being deployed.
   * @param [options] The optional parameters
   * @returns Promise<Models.MarketplaceAgreementsGetResponse>
   */
  get(publisherId: string, offerId: string, planId: string, options?: msRest.RequestOptionsBase): Promise<Models.MarketplaceAgreementsGetResponse>;
  /**
   * @param publisherId Publisher identifier string of image being deployed.
   * @param offerId Offer identifier string of image being deployed.
   * @param planId Plan identifier string of image being deployed.
   * @param callback The callback
   */
  get(publisherId: string, offerId: string, planId: string, callback: msRest.ServiceCallback<Models.AgreementTerms>): void;
  /**
   * @param publisherId Publisher identifier string of image being deployed.
   * @param offerId Offer identifier string of image being deployed.
   * @param planId Plan identifier string of image being deployed.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(publisherId: string, offerId: string, planId: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AgreementTerms>): void;
  get(publisherId: string, offerId: string, planId: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AgreementTerms>, callback?: msRest.ServiceCallback<Models.AgreementTerms>): Promise<Models.MarketplaceAgreementsGetResponse> {
    return this.client.sendOperationRequest(
      {
        publisherId,
        offerId,
        planId,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.MarketplaceAgreementsGetResponse>;
  }

  /**
   * Save marketplace terms.
   * @param publisherId Publisher identifier string of image being deployed.
   * @param offerId Offer identifier string of image being deployed.
   * @param planId Plan identifier string of image being deployed.
   * @param parameters Parameters supplied to the Create Marketplace Terms operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.MarketplaceAgreementsCreateResponse>
   */
  create(publisherId: string, offerId: string, planId: string, parameters: Models.AgreementTerms, options?: msRest.RequestOptionsBase): Promise<Models.MarketplaceAgreementsCreateResponse>;
  /**
   * @param publisherId Publisher identifier string of image being deployed.
   * @param offerId Offer identifier string of image being deployed.
   * @param planId Plan identifier string of image being deployed.
   * @param parameters Parameters supplied to the Create Marketplace Terms operation.
   * @param callback The callback
   */
  create(publisherId: string, offerId: string, planId: string, parameters: Models.AgreementTerms, callback: msRest.ServiceCallback<Models.AgreementTerms>): void;
  /**
   * @param publisherId Publisher identifier string of image being deployed.
   * @param offerId Offer identifier string of image being deployed.
   * @param planId Plan identifier string of image being deployed.
   * @param parameters Parameters supplied to the Create Marketplace Terms operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  create(publisherId: string, offerId: string, planId: string, parameters: Models.AgreementTerms, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.AgreementTerms>): void;
  create(publisherId: string, offerId: string, planId: string, parameters: Models.AgreementTerms, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.AgreementTerms>, callback?: msRest.ServiceCallback<Models.AgreementTerms>): Promise<Models.MarketplaceAgreementsCreateResponse> {
    return this.client.sendOperationRequest(
      {
        publisherId,
        offerId,
        planId,
        parameters,
        options
      },
      createOperationSpec,
      callback) as Promise<Models.MarketplaceAgreementsCreateResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.MarketplaceOrdering/offerTypes/{offerType}/publishers/{publisherId}/offers/{offerId}/plans/{planId}/agreements/current",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.offerType,
    Parameters.publisherId,
    Parameters.offerId,
    Parameters.planId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  responses: {
    200: {
      bodyMapper: Mappers.AgreementTerms
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/providers/Microsoft.MarketplaceOrdering/offerTypes/{offerType}/publishers/{publisherId}/offers/{offerId}/plans/{planId}/agreements/current",
  urlParameters: [
    Parameters.offerType,
    Parameters.subscriptionId,
    Parameters.publisherId,
    Parameters.offerId,
    Parameters.planId
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "parameters",
    mapper: {
      ...Mappers.AgreementTerms,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.AgreementTerms
    },
    default: {
      bodyMapper: Mappers.ErrorResponse
    }
  },
  serializer
};
