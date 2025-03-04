import { StandardError } from '../models/StandardError';
import { SubscriberEmailResponse } from '../models/SubscriberEmailResponse';
export declare class BatchResponseSubscriberEmailResponse {
    'status': BatchResponseSubscriberEmailResponseStatusEnum;
    'results': Array<SubscriberEmailResponse>;
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
export type BatchResponseSubscriberEmailResponseStatusEnum = "PENDING" | "PROCESSING" | "CANCELED" | "COMPLETE";
