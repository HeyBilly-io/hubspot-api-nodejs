import { ForeignId } from '../models/ForeignId';
import { Option } from '../models/Option';
export declare class Column {
    'name': string;
    'label': string;
    'id'?: string;
    'width'?: number;
    'foreignTableId'?: number;
    'foreignColumnId'?: number;
    'foreignIds'?: Array<ForeignId>;
    'foreignIdsById'?: {
        [key: string]: ForeignId;
    };
    'foreignIdsByName'?: {
        [key: string]: ForeignId;
    };
    'type': ColumnTypeEnum;
    'optionCount'?: number;
    'archived'?: boolean;
    'options'?: Array<Option>;
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
export type ColumnTypeEnum = "NULL" | "TEXT" | "NUMBER" | "URL" | "IMAGE" | "SELECT" | "MULTISELECT" | "BOOLEAN" | "LOCATION" | "DATE" | "DATETIME" | "CURRENCY" | "RICHTEXT" | "FOREIGN_ID" | "VIDEO" | "CTA";
