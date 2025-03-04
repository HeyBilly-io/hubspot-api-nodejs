import { OptionInput } from '../models/OptionInput';
export declare class PropertyUpdate {
    'label'?: string;
    'type'?: PropertyUpdateTypeEnum;
    'fieldType'?: PropertyUpdateFieldTypeEnum;
    'groupName'?: string;
    'description'?: string;
    'options'?: Array<OptionInput>;
    'displayOrder'?: number;
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
export type PropertyUpdateTypeEnum = "string" | "number" | "date" | "datetime" | "enumeration";
export type PropertyUpdateFieldTypeEnum = "textarea" | "text" | "date" | "file" | "number" | "select" | "radio" | "checkbox" | "booleancheckbox";
