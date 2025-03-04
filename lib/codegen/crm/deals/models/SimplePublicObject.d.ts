import { ValueWithTimestamp } from '../models/ValueWithTimestamp';
export declare class SimplePublicObject {
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
