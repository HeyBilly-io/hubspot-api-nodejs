import { PropertyValue } from '../models/PropertyValue';
export declare class MarketingEventPublicDefaultResponse {
    'eventName': string;
    'eventType'?: string;
    'startDateTime'?: Date;
    'endDateTime'?: Date;
    'eventOrganizer': string;
    'eventDescription'?: string;
    'eventUrl'?: string;
    'eventCancelled'?: boolean;
    'customProperties'?: Array<PropertyValue>;
    'id': string;
    'createdAt': Date;
    'updatedAt': Date;
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
