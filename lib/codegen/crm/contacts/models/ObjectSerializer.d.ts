export * from '../models/AssociatedId';
export * from '../models/AssociationSpec';
export * from '../models/AssociationSpecWithLabel';
export * from '../models/BatchInputSimplePublicObjectBatchInput';
export * from '../models/BatchInputSimplePublicObjectId';
export * from '../models/BatchInputSimplePublicObjectInput';
export * from '../models/BatchReadInputSimplePublicObjectId';
export * from '../models/BatchResponseSimplePublicObject';
export * from '../models/BatchResponseSimplePublicObjectWithErrors';
export * from '../models/CollectionResponseAssociatedId';
export * from '../models/CollectionResponseMultiAssociatedObjectWithLabelForwardPaging';
export * from '../models/CollectionResponseSimplePublicObjectWithAssociationsForwardPaging';
export * from '../models/CollectionResponseWithTotalSimplePublicObjectForwardPaging';
export * from '../models/ErrorCategory';
export * from '../models/ErrorDetail';
export * from '../models/Filter';
export * from '../models/FilterGroup';
export * from '../models/ForwardPaging';
export * from '../models/LabelsBetweenObjectPair';
export * from '../models/ModelError';
export * from '../models/MultiAssociatedObjectWithLabel';
export * from '../models/NextPage';
export * from '../models/Paging';
export * from '../models/PreviousPage';
export * from '../models/PublicGdprDeleteInput';
export * from '../models/PublicMergeInput';
export * from '../models/PublicObjectSearchRequest';
export * from '../models/SimplePublicObject';
export * from '../models/SimplePublicObjectBatchInput';
export * from '../models/SimplePublicObjectId';
export * from '../models/SimplePublicObjectInput';
export * from '../models/SimplePublicObjectWithAssociations';
export * from '../models/StandardError';
export * from '../models/ValueWithTimestamp';
export declare class ObjectSerializer {
    static findCorrectType(data: any, expectedType: string): any;
    static serialize(data: any, type: string, format: string): any;
    static deserialize(data: any, type: string, format: string): any;
    static normalizeMediaType(mediaType: string | undefined): string | undefined;
    static getPreferredMediaType(mediaTypes: Array<string>): string;
    static stringify(data: any, mediaType: string): string;
    static parse(rawData: string, mediaType: string | undefined): any;
}