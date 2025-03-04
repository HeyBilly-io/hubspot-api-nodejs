import { TimelineEventTemplateTokenOption } from '../models/TimelineEventTemplateTokenOption';
export declare class TimelineEventTemplateTokenUpdateRequest {
    'label': string;
    'objectPropertyName'?: string;
    'options': Array<TimelineEventTemplateTokenOption>;
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
