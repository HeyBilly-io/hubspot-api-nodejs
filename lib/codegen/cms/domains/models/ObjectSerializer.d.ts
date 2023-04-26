export * from '../models/CollectionResponseWithTotalDomainForwardPaging';
export * from '../models/Domain';
export * from '../models/ErrorDetail';
export * from '../models/ForwardPaging';
export * from '../models/ModelError';
export * from '../models/NextPage';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string, format: string): any;
    static deserialize(data: any, type: string, format: string): any;
    static normalizeMediaType(mediaType: string | undefined): string | undefined;
    static getPreferredMediaType(mediaTypes: Array<string>): string;
    static stringify(data: any, mediaType: string): string;
    static parse(rawData: string, mediaType: string | undefined): any;
}