import { PropertyValue } from '../models/PropertyValue';
export declare class MarketingEventCreateRequestParams {
    'eventName': string;
    'eventType'?: string;
    'startDateTime'?: Date;
    'endDateTime'?: Date;
    'eventOrganizer': string;
    'eventDescription'?: string;
    'eventUrl'?: string;
    'eventCancelled'?: boolean;
    'customProperties'?: Array<PropertyValue>;
    'externalAccountId': string;
    'externalEventId': string;
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
