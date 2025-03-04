import { Column } from '../models/Column';
import { SimpleUser } from '../models/SimpleUser';
export declare class HubDbTableV3 {
    'id'?: string;
    'name': string;
    'label': string;
    'columns'?: Array<Column>;
    'published'?: boolean;
    'columnCount'?: number;
    'rowCount'?: number;
    'createdBy'?: SimpleUser;
    'updatedBy'?: SimpleUser;
    'publishedAt'?: Date;
    'dynamicMetaTags'?: {
        [key: string]: number;
    };
    'createdAt'?: Date;
    'archived'?: boolean;
    'allowPublicApiAccess'?: boolean;
    'useForPages'?: boolean;
    'enableChildTablePages'?: boolean;
    'allowChildTables'?: boolean;
    'updatedAt'?: Date;
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
