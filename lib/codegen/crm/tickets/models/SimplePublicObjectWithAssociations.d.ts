import { CollectionResponseAssociatedId } from '../models/CollectionResponseAssociatedId';
import { ValueWithTimestamp } from '../models/ValueWithTimestamp';
export declare class SimplePublicObjectWithAssociations {
    'id': string;
    'properties': {
        [key: string]: string;
    };
    'propertiesWithHistory'?: {
        [key: string]: Array<ValueWithTimestamp>;
    };
    'createdAt': Date;
    'updatedAt': Date;
    'archived'?: boolean;
    'archivedAt'?: Date;
    'associations'?: {
        [key: string]: CollectionResponseAssociatedId;
    };
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
