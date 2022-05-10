/**
 * CRM Owners
 * HubSpot uses **owners** to assign CRM objects to specific people in your organization. The endpoints described here are used to get a list of the owners that are available for an account. To assign an owner to an object, set the hubspot_owner_id property using the appropriate CRM object update or create a request.  If teams are available for your HubSpot tier, these endpoints will also indicate which team(s) an owner can access, as well as which team is the owner's primary team.
 *
 * OpenAPI spec version: v3
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { ErrorDetail } from './ErrorDetail';
import { HttpFile } from '../http/http';

export class ModelError {
    /**
    * A human readable message describing the error along with remediation steps where appropriate
    */
    'message': string;
    /**
    * A unique identifier for the request. Include this value with any error reports or support tickets
    */
    'correlationId': string;
    /**
    * The error category
    */
    'category': string;
    /**
    * A specific category that contains more specific detail about the error
    */
    'subCategory'?: string;
    /**
    * further information about the error
    */
    'errors'?: Array<ErrorDetail>;
    /**
    * Context about the error condition
    */
    'context'?: { [key: string]: Array<string>; };
    /**
    * A map of link names to associated URIs containing documentation about the error or recommended remediation steps
    */
    'links'?: { [key: string]: string; };

    static readonly discriminator: string | undefined = undefined;

    static readonly attributeTypeMap: Array<{name: string, baseName: string, type: string, format: string}> = [
        {
            "name": "message",
            "baseName": "message",
            "type": "string",
            "format": ""
        },
        {
            "name": "correlationId",
            "baseName": "correlationId",
            "type": "string",
            "format": "uuid"
        },
        {
            "name": "category",
            "baseName": "category",
            "type": "string",
            "format": ""
        },
        {
            "name": "subCategory",
            "baseName": "subCategory",
            "type": "string",
            "format": ""
        },
        {
            "name": "errors",
            "baseName": "errors",
            "type": "Array<ErrorDetail>",
            "format": ""
        },
        {
            "name": "context",
            "baseName": "context",
            "type": "{ [key: string]: Array<string>; }",
            "format": ""
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "{ [key: string]: string; }",
            "format": ""
        }    ];

    static getAttributeTypeMap() {
        return ModelError.attributeTypeMap;
    }

    public constructor() {
    }
}

