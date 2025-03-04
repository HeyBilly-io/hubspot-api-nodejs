import { PerformanceView } from '../models/PerformanceView';
export declare class PublicPerformanceResponse {
    'data': Array<PerformanceView>;
    'domain'?: string;
    'path'?: string;
    'startInterval': number;
    'endInterval': number;
    'interval': PublicPerformanceResponseIntervalEnum;
    'period'?: PublicPerformanceResponsePeriodEnum;
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
export type PublicPerformanceResponseIntervalEnum = "ONE_MINUTE" | "FIVE_MINUTES" | "TEN_MINUTES" | "FIFTEEN_MINUTES" | "THIRTY_MINUTES" | "ONE_HOUR" | "FOUR_HOURS" | "TWELVE_HOURS" | "ONE_DAY" | "ONE_WEEK";
export type PublicPerformanceResponsePeriodEnum = "ONE_MINUTE" | "FIVE_MINUTES" | "TEN_MINUTES" | "FIFTEEN_MINUTES" | "THIRTY_MINUTES" | "ONE_HOUR" | "FOUR_HOURS" | "TWELVE_HOURS" | "ONE_DAY" | "ONE_WEEK";
