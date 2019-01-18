/*
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT License. See License.txt in the project root for
 * license information.
 *
 * Code generated by Microsoft (R) AutoRest Code Generator.
 * Changes may cause incorrect behavior and will be lost if the code is
 * regenerated.
 */

import { ServiceClientOptions } from "@azure/ms-rest-js";
import * as msRest from "@azure/ms-rest-js";


/**
 * @interface
 * An interface representing SpellingTokenSuggestion.
 */
export interface SpellingTokenSuggestion {
  /**
   * @member {string} suggestion
   */
  suggestion: string;
  /**
   * @member {number} [score] **NOTE: This property will not be serialized. It
   * can only be populated by the server.**
   */
  readonly score?: number;
  /**
   * @member {string} [pingUrlSuffix] **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly pingUrlSuffix?: string;
}

/**
 * @interface
 * An interface representing SpellingFlaggedToken.
 */
export interface SpellingFlaggedToken {
  /**
   * @member {number} offset
   */
  offset: number;
  /**
   * @member {string} token
   */
  token: string;
  /**
   * @member {ErrorType} type Possible values include: 'UnknownToken',
   * 'RepeatedToken'. Default value: 'UnknownToken' .
   */
  type: ErrorType;
  /**
   * @member {SpellingTokenSuggestion[]} [suggestions] **NOTE: This property
   * will not be serialized. It can only be populated by the server.**
   */
  readonly suggestions?: SpellingTokenSuggestion[];
  /**
   * @member {string} [pingUrlSuffix] **NOTE: This property will not be
   * serialized. It can only be populated by the server.**
   */
  readonly pingUrlSuffix?: string;
}

/**
 * Contains the possible cases for ResponseBase.
 */
export type ResponseBaseUnion = ResponseBase | IdentifiableUnion;

/**
 * @interface
 * An interface representing ResponseBase.
 */
export interface ResponseBase {
  /**
   * @member {string} _type Polymorphic Discriminator
   */
  _type: "ResponseBase";
}

/**
 * Contains the possible cases for Identifiable.
 */
export type IdentifiableUnion = Identifiable | ResponseUnion;

/**
 * @interface
 * An interface representing Identifiable.
 * Defines the identity of a resource.
 *
 */
export interface Identifiable {
  /**
   * @member {string} _type Polymorphic Discriminator
   */
  _type: "Identifiable";
  /**
   * @member {string} [id] A String identifier.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
}

/**
 * Contains the possible cases for Response.
 */
export type ResponseUnion = Response | AnswerUnion | ErrorResponse;

/**
 * @interface
 * An interface representing Response.
 * Defines a response. All schemas that could be returned at the root of a
 * response should inherit from this
 *
 */
export interface Response {
  /**
   * @member {string} _type Polymorphic Discriminator
   */
  _type: "Response";
  /**
   * @member {string} [id] A String identifier.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
}

/**
 * Contains the possible cases for Answer.
 */
export type AnswerUnion = Answer | SpellCheck;

/**
 * @interface
 * An interface representing Answer.
 */
export interface Answer {
  /**
   * @member {string} _type Polymorphic Discriminator
   */
  _type: "Answer";
  /**
   * @member {string} [id] A String identifier.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
}

/**
 * @interface
 * An interface representing SpellCheck.
 */
export interface SpellCheck {
  /**
   * @member {string} _type Polymorphic Discriminator
   */
  _type: "SpellCheck";
  /**
   * @member {string} [id] A String identifier.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {SpellingFlaggedToken[]} flaggedTokens
   */
  flaggedTokens: SpellingFlaggedToken[];
}

/**
 * @interface
 * An interface representing ErrorModel.
 * Defines the error that occurred.
 *
 */
export interface ErrorModel {
  /**
   * @member {ErrorCode} code The error code that identifies the category of
   * error. Possible values include: 'None', 'ServerError', 'InvalidRequest',
   * 'RateLimitExceeded', 'InvalidAuthorization', 'InsufficientAuthorization'.
   * Default value: 'None' .
   */
  code: ErrorCode;
  /**
   * @member {ErrorSubCode} [subCode] The error code that further helps to
   * identify the error. Possible values include: 'UnexpectedError',
   * 'ResourceError', 'NotImplemented', 'ParameterMissing',
   * 'ParameterInvalidValue', 'HttpNotAllowed', 'Blocked',
   * 'AuthorizationMissing', 'AuthorizationRedundancy',
   * 'AuthorizationDisabled', 'AuthorizationExpired'
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly subCode?: ErrorSubCode;
  /**
   * @member {string} message A description of the error.
   */
  message: string;
  /**
   * @member {string} [moreDetails] A description that provides additional
   * information about the error.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly moreDetails?: string;
  /**
   * @member {string} [parameter] The parameter in the request that caused the
   * error.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly parameter?: string;
  /**
   * @member {string} [value] The parameter's value in the request that was not
   * valid.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly value?: string;
}

/**
 * @interface
 * An interface representing ErrorResponse.
 * The top-level response that represents a failed request.
 *
 */
export interface ErrorResponse {
  /**
   * @member {string} _type Polymorphic Discriminator
   */
  _type: "ErrorResponse";
  /**
   * @member {string} [id] A String identifier.
   * **NOTE: This property will not be serialized. It can only be populated by
   * the server.**
   */
  readonly id?: string;
  /**
   * @member {ErrorModel[]} errors A list of errors that describe the reasons
   * why the request failed.
   */
  errors: ErrorModel[];
}

/**
 * @interface
 * An interface representing SpellCheckClientOptions.
 * @extends ServiceClientOptions
 */
export interface SpellCheckClientOptions extends ServiceClientOptions {
  /**
   * @member {string} [endpoint] Supported Cognitive Services endpoints
   * (protocol and hostname, for example:
   * "https://westus.api.cognitive.microsoft.com",
   * "https://api.cognitive.microsoft.com"). Default value:
   * 'https://api.cognitive.microsoft.com' .
   */
  endpoint?: string;
}

/**
 * @interface
 * An interface representing SpellCheckClientSpellCheckerOptionalParams.
 * Optional Parameters.
 *
 * @extends RequestOptionsBase
 */
export interface SpellCheckClientSpellCheckerOptionalParams extends msRest.RequestOptionsBase {
  /**
   * @member {string} [acceptLanguage] A comma-delimited list of one or more
   * languages to use for user interface strings. The list is in decreasing
   * order of preference. For additional information, including expected
   * format, see
   * [RFC2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html). This
   * header and the setLang query parameter are mutually exclusive; do not
   * specify both. If you set this header, you must also specify the cc query
   * parameter. Bing will use the first supported language it finds from the
   * list, and combine that language with the cc parameter value to determine
   * the market to return results for. If the list does not include a supported
   * language, Bing will find the closest language and market that supports the
   * request, and may use an aggregated or default market for the results
   * instead of a specified one. You should use this header and the cc query
   * parameter only if you specify multiple languages; otherwise, you should
   * use the mkt and setLang query parameters. A user interface string is a
   * string that's used as a label in a user interface. There are very few user
   * interface strings in the JSON response objects. Any links in the response
   * objects to Bing.com properties will apply the specified language.
   */
  acceptLanguage?: string;
  /**
   * @member {string} [pragma] By default, Bing returns cached content, if
   * available. To prevent Bing from returning cached content, set the Pragma
   * header to no-cache (for example, Pragma: no-cache).
   */
  pragma?: string;
  /**
   * @member {string} [userAgent] The user agent originating the request. Bing
   * uses the user agent to provide mobile users with an optimized experience.
   * Although optional, you are strongly encouraged to always specify this
   * header. The user-agent should be the same string that any commonly used
   * browser would send. For information about user agents, see [RFC
   * 2616](http://www.w3.org/Protocols/rfc2616/rfc2616-sec14.html).
   */
  userAgent?: string;
  /**
   * @member {string} [clientId] Bing uses this header to provide users with
   * consistent behavior across Bing API calls. Bing often flights new features
   * and improvements, and it uses the client ID as a key for assigning traffic
   * on different flights. If you do not use the same client ID for a user
   * across multiple requests, then Bing may assign the user to multiple
   * conflicting flights. Being assigned to multiple conflicting flights can
   * lead to an inconsistent user experience. For example, if the second
   * request has a different flight assignment than the first, the experience
   * may be unexpected. Also, Bing can use the client ID to tailor web results
   * to that client ID’s search history, providing a richer experience for the
   * user. Bing also uses this header to help improve result rankings by
   * analyzing the activity generated by a client ID. The relevance
   * improvements help with better quality of results delivered by Bing APIs
   * and in turn enables higher click-through rates for the API consumer.
   * IMPORTANT: Although optional, you should consider this header required.
   * Persisting the client ID across multiple requests for the same end user
   * and device combination enables 1) the API consumer to receive a consistent
   * user experience, and 2) higher click-through rates via better quality of
   * results from the Bing APIs. Each user that uses your application on the
   * device must have a unique, Bing generated client ID. If you do not include
   * this header in the request, Bing generates an ID and returns it in the
   * X-MSEdge-ClientID response header. The only time that you should NOT
   * include this header in a request is the first time the user uses your app
   * on that device. Use the client ID for each Bing API request that your app
   * makes for this user on the device. Persist the client ID. To persist the
   * ID in a browser app, use a persistent HTTP cookie to ensure the ID is used
   * across all sessions. Do not use a session cookie. For other apps such as
   * mobile apps, use the device's persistent storage to persist the ID. The
   * next time the user uses your app on that device, get the client ID that
   * you persisted. Bing responses may or may not include this header. If the
   * response includes this header, capture the client ID and use it for all
   * subsequent Bing requests for the user on that device. If you include the
   * X-MSEdge-ClientID, you must not include cookies in the request.
   */
  clientId?: string;
  /**
   * @member {string} [clientIp] The IPv4 or IPv6 address of the client device.
   * The IP address is used to discover the user's location. Bing uses the
   * location information to determine safe search behavior. Although optional,
   * you are encouraged to always specify this header and the X-Search-Location
   * header. Do not obfuscate the address (for example, by changing the last
   * octet to 0). Obfuscating the address results in the location not being
   * anywhere near the device's actual location, which may result in Bing
   * serving erroneous results.
   */
  clientIp?: string;
  /**
   * @member {string} [location] A semicolon-delimited list of key/value pairs
   * that describe the client's geographical location. Bing uses the location
   * information to determine safe search behavior and to return relevant local
   * content. Specify the key/value pair as <key>:<value>. The following are
   * the keys that you use to specify the user's location. lat (required): The
   * latitude of the client's location, in degrees. The latitude must be
   * greater than or equal to -90.0 and less than or equal to +90.0. Negative
   * values indicate southern latitudes and positive values indicate northern
   * latitudes. long (required): The longitude of the client's location, in
   * degrees. The longitude must be greater than or equal to -180.0 and less
   * than or equal to +180.0. Negative values indicate western longitudes and
   * positive values indicate eastern longitudes. re (required): The radius, in
   * meters, which specifies the horizontal accuracy of the coordinates. Pass
   * the value returned by the device's location service. Typical values might
   * be 22m for GPS/Wi-Fi, 380m for cell tower triangulation, and 18,000m for
   * reverse IP lookup. ts (optional): The UTC UNIX timestamp of when the
   * client was at the location. (The UNIX timestamp is the number of seconds
   * since January 1, 1970.) head (optional): The client's relative heading or
   * direction of travel. Specify the direction of travel as degrees from 0
   * through 360, counting clockwise relative to true north. Specify this key
   * only if the sp key is nonzero. sp (optional): The horizontal velocity
   * (speed), in meters per second, that the client device is traveling. alt
   * (optional): The altitude of the client device, in meters. are (optional):
   * The radius, in meters, that specifies the vertical accuracy of the
   * coordinates. Specify this key only if you specify the alt key. Although
   * many of the keys are optional, the more information that you provide, the
   * more accurate the location results are. Although optional, you are
   * encouraged to always specify the user's geographical location. Providing
   * the location is especially important if the client's IP address does not
   * accurately reflect the user's physical location (for example, if the
   * client uses VPN). For optimal results, you should include this header and
   * the  X-Search-ClientIP header, but at a minimum, you should include this
   * header.
   */
  location?: string;
  /**
   * @member {ActionType} [actionType] A string that's used by logging to
   * determine whether the request is coming from an interactive session or a
   * page load. The following are the possible values. 1) Edit—The request is
   * from an interactive session 2) Load—The request is from a page load.
   * Possible values include: 'Edit', 'Load'
   */
  actionType?: ActionType;
  /**
   * @member {string} [appName] The unique name of your app. The name must be
   * known by Bing. Do not include this parameter unless you have previously
   * contacted Bing to get a unique app name. To get a unique name, contact
   * your Bing Business Development manager.
   */
  appName?: string;
  /**
   * @member {string} [countryCode] A 2-character country code of the country
   * where the results come from. This API supports only the United States
   * market. If you specify this query parameter, it must be set to us. If you
   * set this parameter, you must also specify the Accept-Language header. Bing
   * uses the first supported language it finds from the languages list, and
   * combine that language with the country code that you specify to determine
   * the market to return results for. If the languages list does not include a
   * supported language, Bing finds the closest language and market that
   * supports the request, or it may use an aggregated or default market for
   * the results instead of a specified one. You should use this query
   * parameter and the Accept-Language query parameter only if you specify
   * multiple languages; otherwise, you should use the mkt and setLang query
   * parameters. This parameter and the mkt query parameter are mutually
   * exclusive—do not specify both.
   */
  countryCode?: string;
  /**
   * @member {string} [clientMachineName] A unique name of the device that the
   * request is being made from. Generate a unique value for each device (the
   * value is unimportant). The service uses the ID to help debug issues and
   * improve the quality of corrections.
   */
  clientMachineName?: string;
  /**
   * @member {string} [docId] A unique ID that identifies the document that the
   * text belongs to. Generate a unique value for each document (the value is
   * unimportant). The service uses the ID to help debug issues and improve the
   * quality of corrections.
   */
  docId?: string;
  /**
   * @member {string} [market] The market where the results come from. You are
   * strongly encouraged to always specify the market, if known. Specifying the
   * market helps Bing route the request and return an appropriate and optimal
   * response. This parameter and the cc query parameter are mutually
   * exclusive—do not specify both.
   */
  market?: string;
  /**
   * @member {string} [sessionId] A unique ID that identifies this user
   * session. Generate a unique value for each user session (the value is
   * unimportant). The service uses the ID to help debug issues and improve the
   * quality of corrections
   */
  sessionId?: string;
  /**
   * @member {string} [setLang] The language to use for user interface strings.
   * Specify the language using the ISO 639-1 2-letter language code. For
   * example, the language code for English is EN. The default is EN (English).
   * Although optional, you should always specify the language. Typically, you
   * set setLang to the same language specified by mkt unless the user wants
   * the user interface strings displayed in a different language. This
   * parameter and the Accept-Language header are mutually exclusive—do not
   * specify both. A user interface string is a string that's used as a label
   * in a user interface. There are few user interface strings in the JSON
   * response objects. Also, any links to Bing.com properties in the response
   * objects apply the specified language.
   */
  setLang?: string;
  /**
   * @member {string} [userId] A unique ID that identifies the user. Generate a
   * unique value for each user (the value is unimportant). The service uses
   * the ID to help debug issues and improve the quality of corrections.
   */
  userId?: string;
  /**
   * @member {Mode} [mode] The type of spelling and grammar checks to perform.
   * The following are the possible values (the values are case insensitive).
   * The default is Proof. 1) Proof—Finds most spelling and grammar mistakes.
   * 2) Spell—Finds most spelling mistakes but does not find some of the
   * grammar errors that Proof catches (for example, capitalization and
   * repeated words). Possible values include: 'proof', 'spell'
   */
  mode?: Mode;
  /**
   * @member {string} [preContextText] A string that gives context to the text
   * string. For example, the text string petal is valid. However, if you set
   * preContextText to bike, the context changes and the text string becomes
   * not valid. In this case, the API suggests that you change petal to pedal
   * (as in bike pedal). This text is not checked for grammar or spelling
   * errors. The combined length of the text string, preContextText string, and
   * postContextText string may not exceed 10,000 characters. You may specify
   * this parameter in the query string of a GET request or in the body of a
   * POST request.
   */
  preContextText?: string;
  /**
   * @member {string} [postContextText] A string that gives context to the text
   * string. For example, the text string read is valid. However, if you set
   * postContextText to carpet, the context changes and the text string becomes
   * not valid. In this case, the API suggests that you change read to red (as
   * in red carpet). This text is not checked for grammar or spelling errors.
   * The combined length of the text string, preContextText string, and
   * postContextText string may not exceed 10,000 characters. You may specify
   * this parameter in the query string of a GET request or in the body of a
   * POST request.
   */
  postContextText?: string;
}

/**
 * Defines values for ErrorType.
 * Possible values include: 'UnknownToken', 'RepeatedToken'
 * @readonly
 * @enum {string}
 */
export type ErrorType = 'UnknownToken' | 'RepeatedToken';

/**
 * Defines values for ErrorCode.
 * Possible values include: 'None', 'ServerError', 'InvalidRequest', 'RateLimitExceeded',
 * 'InvalidAuthorization', 'InsufficientAuthorization'
 * @readonly
 * @enum {string}
 */
export type ErrorCode = 'None' | 'ServerError' | 'InvalidRequest' | 'RateLimitExceeded' | 'InvalidAuthorization' | 'InsufficientAuthorization';

/**
 * Defines values for ErrorSubCode.
 * Possible values include: 'UnexpectedError', 'ResourceError', 'NotImplemented',
 * 'ParameterMissing', 'ParameterInvalidValue', 'HttpNotAllowed', 'Blocked',
 * 'AuthorizationMissing', 'AuthorizationRedundancy', 'AuthorizationDisabled',
 * 'AuthorizationExpired'
 * @readonly
 * @enum {string}
 */
export type ErrorSubCode = 'UnexpectedError' | 'ResourceError' | 'NotImplemented' | 'ParameterMissing' | 'ParameterInvalidValue' | 'HttpNotAllowed' | 'Blocked' | 'AuthorizationMissing' | 'AuthorizationRedundancy' | 'AuthorizationDisabled' | 'AuthorizationExpired';

/**
 * Defines values for ActionType.
 * Possible values include: 'Edit', 'Load'
 * @readonly
 * @enum {string}
 */
export type ActionType = 'Edit' | 'Load';

/**
 * Defines values for Mode.
 * Possible values include: 'proof', 'spell'
 * @readonly
 * @enum {string}
 */
export type Mode = 'proof' | 'spell';

/**
 * Contains response data for the spellChecker operation.
 */
export type SpellCheckerResponse = SpellCheck & {
  /**
   * The underlying HTTP response.
   */
  _response: msRest.HttpResponse & {
      /**
       * The response body as text (string format)
       */
      bodyAsText: string;
      /**
       * The response body as parsed JSON or XML
       */
      parsedBody: SpellCheck;
    };
};
