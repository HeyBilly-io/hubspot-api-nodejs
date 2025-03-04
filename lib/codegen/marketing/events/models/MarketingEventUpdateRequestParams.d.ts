import { PropertyValue } from '../models/PropertyValue';
export declare class MarketingEventUpdateRequestParams {
    'eventName'?: string;
    'eventType'?: string;
    'startDateTime'?: Date;
    'endDateTime'?: Date;
    'eventOrganizer'?: string;
    'eventDescription'?: string;
    'eventUrl'?: string;
    'eventCancelled'?: boolean;
    'customProperties'?: Array<PropertyValue>;
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
