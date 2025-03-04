import { ErrorDetail } from '../models/ErrorDetail';
export declare class ModelError {
    'message': string;
    'correlationId': string;
    'category': string;
    'subCategory'?: string;
    'errors'?: Array<ErrorDetail>;
    'context'?: {
        [key: string]: Array<string>;
    };
    'links'?: {
        [key: string]: string;
    };
    static readonly discriminator: string | undefined;
    static readonly attributeTypeMap: Array<{
        name: string;
        baseName: string;
        type: string;
        format: string;
    }>;
    static getAttributeTypeMap(): {
        name: string;
        baseName: string;
        type: string;
        format: string;
    }[];
    constructor();
}
