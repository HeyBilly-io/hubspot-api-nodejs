export * from '../models/BatchInputMarketingEventCreateRequestParams';
export * from '../models/BatchInputMarketingEventEmailSubscriber';
export * from '../models/BatchInputMarketingEventExternalUniqueIdentifier';
export * from '../models/BatchInputMarketingEventSubscriber';
export * from '../models/BatchResponseMarketingEventPublicDefaultResponse';
export * from '../models/BatchResponseSubscriberEmailResponse';
export * from '../models/BatchResponseSubscriberVidResponse';
export * from '../models/CollectionResponseMarketingEventExternalUniqueIdentifierNoPaging';
export * from '../models/ErrorCategory';
export * from '../models/ErrorDetail';
export * from '../models/EventDetailSettings';
export * from '../models/EventDetailSettingsUrl';
export * from '../models/MarketingEventCompleteRequestParams';
export * from '../models/MarketingEventCreateRequestParams';
export * from '../models/MarketingEventDefaultResponse';
export * from '../models/MarketingEventEmailSubscriber';
export * from '../models/MarketingEventExternalUniqueIdentifier';
export * from '../models/MarketingEventPublicDefaultResponse';
export * from '../models/MarketingEventPublicReadResponse';
export * from '../models/MarketingEventSubscriber';
export * from '../models/MarketingEventUpdateRequestParams';
export * from '../models/ModelError';
export * from '../models/PropertyValue';
export * from '../models/StandardError';
export * from '../models/SubscriberEmailResponse';
export * from '../models/SubscriberVidResponse';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string, format: string): any;
    static deserialize(data: any, type: string, format: string): any;
    static normalizeMediaType(mediaType: string | undefined): string | undefined;
    static getPreferredMediaType(mediaTypes: Array<string>): string;
    static stringify(data: any, mediaType: string): string;
    static parse(rawData: string, mediaType: string | undefined): any;
}
