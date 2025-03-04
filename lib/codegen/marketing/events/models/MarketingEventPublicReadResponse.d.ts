import { PropertyValue } from '../models/PropertyValue';
export declare class MarketingEventPublicReadResponse {
    'eventName': string;
    'eventType'?: string;
    'startDateTime'?: Date;
    'endDateTime'?: Date;
    'eventOrganizer': string;
    'eventDescription'?: string;
    'eventUrl'?: string;
    'eventCancelled'?: boolean;
    'customProperties'?: Array<PropertyValue>;
    'externalEventId': string;
    'registrants': number;
    'attendees': number;
    'cancellations': number;
    'noShows': number;
    'createdAt': Date;
    'updatedAt': Date;
    'id': string;
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
