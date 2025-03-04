import { TimelineEventTemplateTokenOption } from '../models/TimelineEventTemplateTokenOption';
export declare class TimelineEventTemplateToken {
    'label': string;
    'objectPropertyName'?: string;
    'options': Array<TimelineEventTemplateTokenOption>;
    'name': string;
    'type': TimelineEventTemplateTokenTypeEnum;
    'createdAt'?: Date;
    'updatedAt'?: Date;
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
export type TimelineEventTemplateTokenTypeEnum = "date" | "enumeration" | "number" | "string";
