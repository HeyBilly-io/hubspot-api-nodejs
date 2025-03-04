import { OptionInput } from '../models/OptionInput';
export declare class PropertyCreate {
    'name': string;
    'label': string;
    'type': PropertyCreateTypeEnum;
    'fieldType': PropertyCreateFieldTypeEnum;
    'groupName': string;
    'description'?: string;
    'options'?: Array<OptionInput>;
    'displayOrder'?: number;
    'hasUniqueValue'?: boolean;
    'hidden'?: boolean;
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
export type PropertyCreateTypeEnum = "string" | "number" | "date" | "datetime" | "enumeration";
export type PropertyCreateFieldTypeEnum = "textarea" | "text" | "date" | "file" | "number" | "select" | "radio" | "checkbox" | "booleancheckbox";
