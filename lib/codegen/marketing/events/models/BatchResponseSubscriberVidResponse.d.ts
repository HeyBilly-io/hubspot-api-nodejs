import { StandardError } from '../models/StandardError';
import { SubscriberVidResponse } from '../models/SubscriberVidResponse';
export declare class BatchResponseSubscriberVidResponse {
    'status': BatchResponseSubscriberVidResponseStatusEnum;
    'results': Array<SubscriberVidResponse>;
    'numErrors'?: number;
    'errors'?: Array<StandardError>;
    'requestedAt'?: Date;
    'startedAt': Date;
    'completedAt': Date;
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
export type BatchResponseSubscriberVidResponseStatusEnum = "PENDING" | "PROCESSING" | "CANCELED" | "COMPLETE";
