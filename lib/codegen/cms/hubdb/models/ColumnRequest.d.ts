import { Option } from '../models/Option';
export declare class ColumnRequest {
    'id': number;
    'name': string;
    'label': string;
    'type': ColumnRequestTypeEnum;
    'options': Array<Option>;
    'foreignTableId'?: number;
    'foreignColumnId'?: number;
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
export type ColumnRequestTypeEnum = "NULL" | "TEXT" | "NUMBER" | "URL" | "IMAGE" | "SELECT" | "MULTISELECT" | "BOOLEAN" | "LOCATION" | "DATE" | "DATETIME" | "CURRENCY" | "RICHTEXT" | "FOREIGN_ID" | "VIDEO" | "CTA";
