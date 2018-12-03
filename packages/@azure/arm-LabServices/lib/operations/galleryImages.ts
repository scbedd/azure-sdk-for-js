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
import * as Mappers from "../models/galleryImagesMappers";
import * as Parameters from "../models/parameters";
import { ManagedLabsClientContext } from "../managedLabsClientContext";

/** Class representing a GalleryImages. */
export class GalleryImages {
  private readonly client: ManagedLabsClientContext;

  /**
   * Create a GalleryImages.
   * @param {ManagedLabsClientContext} client Reference to the service client.
   */
  constructor(client: ManagedLabsClientContext) {
    this.client = client;
  }

  /**
   * List gallery images in a given lab account.
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryImagesListResponse>
   */
  list(resourceGroupName: string, labAccountName: string, options?: Models.GalleryImagesListOptionalParams): Promise<Models.GalleryImagesListResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param callback The callback
   */
  list(resourceGroupName: string, labAccountName: string, callback: msRest.ServiceCallback<Models.ResponseWithContinuationGalleryImage>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param options The optional parameters
   * @param callback The callback
   */
  list(resourceGroupName: string, labAccountName: string, options: Models.GalleryImagesListOptionalParams, callback: msRest.ServiceCallback<Models.ResponseWithContinuationGalleryImage>): void;
  list(resourceGroupName: string, labAccountName: string, options?: Models.GalleryImagesListOptionalParams | msRest.ServiceCallback<Models.ResponseWithContinuationGalleryImage>, callback?: msRest.ServiceCallback<Models.ResponseWithContinuationGalleryImage>): Promise<Models.GalleryImagesListResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labAccountName,
        options
      },
      listOperationSpec,
      callback) as Promise<Models.GalleryImagesListResponse>;
  }

  /**
   * Get gallery image
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param galleryImageName The name of the gallery Image.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryImagesGetResponse>
   */
  get(resourceGroupName: string, labAccountName: string, galleryImageName: string, options?: Models.GalleryImagesGetOptionalParams): Promise<Models.GalleryImagesGetResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param galleryImageName The name of the gallery Image.
   * @param callback The callback
   */
  get(resourceGroupName: string, labAccountName: string, galleryImageName: string, callback: msRest.ServiceCallback<Models.GalleryImage>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param galleryImageName The name of the gallery Image.
   * @param options The optional parameters
   * @param callback The callback
   */
  get(resourceGroupName: string, labAccountName: string, galleryImageName: string, options: Models.GalleryImagesGetOptionalParams, callback: msRest.ServiceCallback<Models.GalleryImage>): void;
  get(resourceGroupName: string, labAccountName: string, galleryImageName: string, options?: Models.GalleryImagesGetOptionalParams | msRest.ServiceCallback<Models.GalleryImage>, callback?: msRest.ServiceCallback<Models.GalleryImage>): Promise<Models.GalleryImagesGetResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labAccountName,
        galleryImageName,
        options
      },
      getOperationSpec,
      callback) as Promise<Models.GalleryImagesGetResponse>;
  }

  /**
   * Create or replace an existing Gallery Image.
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param galleryImageName The name of the gallery Image.
   * @param galleryImage Represents an image from the Azure Marketplace
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryImagesCreateOrUpdateResponse>
   */
  createOrUpdate(resourceGroupName: string, labAccountName: string, galleryImageName: string, galleryImage: Models.GalleryImage, options?: msRest.RequestOptionsBase): Promise<Models.GalleryImagesCreateOrUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param galleryImageName The name of the gallery Image.
   * @param galleryImage Represents an image from the Azure Marketplace
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, labAccountName: string, galleryImageName: string, galleryImage: Models.GalleryImage, callback: msRest.ServiceCallback<Models.GalleryImage>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param galleryImageName The name of the gallery Image.
   * @param galleryImage Represents an image from the Azure Marketplace
   * @param options The optional parameters
   * @param callback The callback
   */
  createOrUpdate(resourceGroupName: string, labAccountName: string, galleryImageName: string, galleryImage: Models.GalleryImage, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalleryImage>): void;
  createOrUpdate(resourceGroupName: string, labAccountName: string, galleryImageName: string, galleryImage: Models.GalleryImage, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalleryImage>, callback?: msRest.ServiceCallback<Models.GalleryImage>): Promise<Models.GalleryImagesCreateOrUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labAccountName,
        galleryImageName,
        galleryImage,
        options
      },
      createOrUpdateOperationSpec,
      callback) as Promise<Models.GalleryImagesCreateOrUpdateResponse>;
  }

  /**
   * Delete gallery image.
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param galleryImageName The name of the gallery Image.
   * @param [options] The optional parameters
   * @returns Promise<msRest.RestResponse>
   */
  deleteMethod(resourceGroupName: string, labAccountName: string, galleryImageName: string, options?: msRest.RequestOptionsBase): Promise<msRest.RestResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param galleryImageName The name of the gallery Image.
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, labAccountName: string, galleryImageName: string, callback: msRest.ServiceCallback<void>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param galleryImageName The name of the gallery Image.
   * @param options The optional parameters
   * @param callback The callback
   */
  deleteMethod(resourceGroupName: string, labAccountName: string, galleryImageName: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<void>): void;
  deleteMethod(resourceGroupName: string, labAccountName: string, galleryImageName: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<void>, callback?: msRest.ServiceCallback<void>): Promise<msRest.RestResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labAccountName,
        galleryImageName,
        options
      },
      deleteMethodOperationSpec,
      callback);
  }

  /**
   * Modify properties of gallery images.
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param galleryImageName The name of the gallery Image.
   * @param galleryImage Represents an image from the Azure Marketplace
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryImagesUpdateResponse>
   */
  update(resourceGroupName: string, labAccountName: string, galleryImageName: string, galleryImage: Models.GalleryImageFragment, options?: msRest.RequestOptionsBase): Promise<Models.GalleryImagesUpdateResponse>;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param galleryImageName The name of the gallery Image.
   * @param galleryImage Represents an image from the Azure Marketplace
   * @param callback The callback
   */
  update(resourceGroupName: string, labAccountName: string, galleryImageName: string, galleryImage: Models.GalleryImageFragment, callback: msRest.ServiceCallback<Models.GalleryImage>): void;
  /**
   * @param resourceGroupName The name of the resource group.
   * @param labAccountName The name of the lab Account.
   * @param galleryImageName The name of the gallery Image.
   * @param galleryImage Represents an image from the Azure Marketplace
   * @param options The optional parameters
   * @param callback The callback
   */
  update(resourceGroupName: string, labAccountName: string, galleryImageName: string, galleryImage: Models.GalleryImageFragment, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.GalleryImage>): void;
  update(resourceGroupName: string, labAccountName: string, galleryImageName: string, galleryImage: Models.GalleryImageFragment, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.GalleryImage>, callback?: msRest.ServiceCallback<Models.GalleryImage>): Promise<Models.GalleryImagesUpdateResponse> {
    return this.client.sendOperationRequest(
      {
        resourceGroupName,
        labAccountName,
        galleryImageName,
        galleryImage,
        options
      },
      updateOperationSpec,
      callback) as Promise<Models.GalleryImagesUpdateResponse>;
  }

  /**
   * List gallery images in a given lab account.
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param [options] The optional parameters
   * @returns Promise<Models.GalleryImagesListNextResponse>
   */
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase): Promise<Models.GalleryImagesListNextResponse>;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param callback The callback
   */
  listNext(nextPageLink: string, callback: msRest.ServiceCallback<Models.ResponseWithContinuationGalleryImage>): void;
  /**
   * @param nextPageLink The NextLink from the previous successful call to List operation.
   * @param options The optional parameters
   * @param callback The callback
   */
  listNext(nextPageLink: string, options: msRest.RequestOptionsBase, callback: msRest.ServiceCallback<Models.ResponseWithContinuationGalleryImage>): void;
  listNext(nextPageLink: string, options?: msRest.RequestOptionsBase | msRest.ServiceCallback<Models.ResponseWithContinuationGalleryImage>, callback?: msRest.ServiceCallback<Models.ResponseWithContinuationGalleryImage>): Promise<Models.GalleryImagesListNextResponse> {
    return this.client.sendOperationRequest(
      {
        nextPageLink,
        options
      },
      listNextOperationSpec,
      callback) as Promise<Models.GalleryImagesListNextResponse>;
  }
}

// Operation Specifications
const serializer = new msRest.Serializer(Mappers);
const listOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/galleryimages",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labAccountName
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
      bodyMapper: Mappers.ResponseWithContinuationGalleryImage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const getOperationSpec: msRest.OperationSpec = {
  httpMethod: "GET",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/galleryimages/{galleryImageName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labAccountName,
    Parameters.galleryImageName
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
      bodyMapper: Mappers.GalleryImage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const createOrUpdateOperationSpec: msRest.OperationSpec = {
  httpMethod: "PUT",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/galleryimages/{galleryImageName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labAccountName,
    Parameters.galleryImageName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "galleryImage",
    mapper: {
      ...Mappers.GalleryImage,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.GalleryImage
    },
    201: {
      bodyMapper: Mappers.GalleryImage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};

const deleteMethodOperationSpec: msRest.OperationSpec = {
  httpMethod: "DELETE",
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/galleryimages/{galleryImageName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labAccountName,
    Parameters.galleryImageName
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
  path: "subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.LabServices/labaccounts/{labAccountName}/galleryimages/{galleryImageName}",
  urlParameters: [
    Parameters.subscriptionId,
    Parameters.resourceGroupName,
    Parameters.labAccountName,
    Parameters.galleryImageName
  ],
  queryParameters: [
    Parameters.apiVersion
  ],
  headerParameters: [
    Parameters.acceptLanguage
  ],
  requestBody: {
    parameterPath: "galleryImage",
    mapper: {
      ...Mappers.GalleryImageFragment,
      required: true
    }
  },
  responses: {
    200: {
      bodyMapper: Mappers.GalleryImage
    },
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
      bodyMapper: Mappers.ResponseWithContinuationGalleryImage
    },
    default: {
      bodyMapper: Mappers.CloudError
    }
  },
  serializer
};
