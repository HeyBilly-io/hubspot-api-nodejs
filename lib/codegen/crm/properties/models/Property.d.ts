import { Option } from '../models/Option';
import { PropertyModificationMetadata } from '../models/PropertyModificationMetadata';
export declare class Property {
    'updatedAt'?: Date;
    'createdAt'?: Date;
    'archivedAt'?: Date;
    'name': string;
    'label': string;
    'type': string;
    'fieldType': string;
    'description': string;
    'groupName': string;
    'options': Array<Option>;
    'createdUserId'?: string;
    'updatedUserId'?: string;
    'referencedObjectType'?: string;
    'displayOrder'?: number;
    'calculated'?: boolean;
    'externalOptions'?: boolean;
    'archived'?: boolean;
    'hasUniqueValue'?: boolean;
    'hidden'?: boolean;
    'hubspotDefined'?: boolean;
    'showCurrencySymbol'?: boolean;
    'modificationMetadata'?: PropertyModificationMetadata;
    'formField'?: boolean;
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
