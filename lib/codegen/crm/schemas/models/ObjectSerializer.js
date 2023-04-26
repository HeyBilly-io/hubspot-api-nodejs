"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectSerializer = void 0;
__exportStar(require("../models/AssociationDefinition"), exports);
__exportStar(require("../models/AssociationDefinitionEgg"), exports);
__exportStar(require("../models/CollectionResponseObjectSchemaNoPaging"), exports);
__exportStar(require("../models/ErrorDetail"), exports);
__exportStar(require("../models/ModelError"), exports);
__exportStar(require("../models/ObjectSchema"), exports);
__exportStar(require("../models/ObjectSchemaEgg"), exports);
__exportStar(require("../models/ObjectTypeDefinition"), exports);
__exportStar(require("../models/ObjectTypeDefinitionLabels"), exports);
__exportStar(require("../models/ObjectTypeDefinitionPatch"), exports);
__exportStar(require("../models/ObjectTypePropertyCreate"), exports);
__exportStar(require("../models/Option"), exports);
__exportStar(require("../models/OptionInput"), exports);
__exportStar(require("../models/Property"), exports);
__exportStar(require("../models/PropertyModificationMetadata"), exports);
const AssociationDefinition_1 = require("../models/AssociationDefinition");
const AssociationDefinitionEgg_1 = require("../models/AssociationDefinitionEgg");
const CollectionResponseObjectSchemaNoPaging_1 = require("../models/CollectionResponseObjectSchemaNoPaging");
const ErrorDetail_1 = require("../models/ErrorDetail");
const ModelError_1 = require("../models/ModelError");
const ObjectSchema_1 = require("../models/ObjectSchema");
const ObjectSchemaEgg_1 = require("../models/ObjectSchemaEgg");
const ObjectTypeDefinition_1 = require("../models/ObjectTypeDefinition");
const ObjectTypeDefinitionLabels_1 = require("../models/ObjectTypeDefinitionLabels");
const ObjectTypeDefinitionPatch_1 = require("../models/ObjectTypeDefinitionPatch");
const ObjectTypePropertyCreate_1 = require("../models/ObjectTypePropertyCreate");
const Option_1 = require("../models/Option");
const OptionInput_1 = require("../models/OptionInput");
const Property_1 = require("../models/Property");
const PropertyModificationMetadata_1 = require("../models/PropertyModificationMetadata");
let primitives = [
    "string",
    "boolean",
    "double",
    "integer",
    "long",
    "float",
    "number",
    "any"
];
const supportedMediaTypes = {
    "application/json": Infinity,
    "application/octet-stream": 0,
    "application/x-www-form-urlencoded": 0
};
let enumsMap = new Set([
    "ObjectTypePropertyCreateTypeEnum",
]);
let typeMap = {
    "AssociationDefinition": AssociationDefinition_1.AssociationDefinition,
    "AssociationDefinitionEgg": AssociationDefinitionEgg_1.AssociationDefinitionEgg,
    "CollectionResponseObjectSchemaNoPaging": CollectionResponseObjectSchemaNoPaging_1.CollectionResponseObjectSchemaNoPaging,
    "ErrorDetail": ErrorDetail_1.ErrorDetail,
    "ModelError": ModelError_1.ModelError,
    "ObjectSchema": ObjectSchema_1.ObjectSchema,
    "ObjectSchemaEgg": ObjectSchemaEgg_1.ObjectSchemaEgg,
    "ObjectTypeDefinition": ObjectTypeDefinition_1.ObjectTypeDefinition,
    "ObjectTypeDefinitionLabels": ObjectTypeDefinitionLabels_1.ObjectTypeDefinitionLabels,
    "ObjectTypeDefinitionPatch": ObjectTypeDefinitionPatch_1.ObjectTypeDefinitionPatch,
    "ObjectTypePropertyCreate": ObjectTypePropertyCreate_1.ObjectTypePropertyCreate,
    "Option": Option_1.Option,
    "OptionInput": OptionInput_1.OptionInput,
    "Property": Property_1.Property,
    "PropertyModificationMetadata": PropertyModificationMetadata_1.PropertyModificationMetadata,
};
class ObjectSerializer {
    static findCorrectType(data, expectedType) {
        if (data == undefined) {
            return expectedType;
        }
        else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        }
        else if (expectedType === "Date") {
            return expectedType;
        }
        else {
            if (enumsMap.has(expectedType)) {
                return expectedType;
            }
            if (!typeMap[expectedType]) {
                return expectedType;
            }
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType;
            }
            else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if (typeMap[discriminatorType]) {
                        return discriminatorType;
                    }
                    else {
                        return expectedType;
                    }
                }
                else {
                    return expectedType;
                }
            }
        }
    }
    static serialize(data, type, format) {
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.serialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            if (format == "date") {
                let month = data.getMonth() + 1;
                month = month < 10 ? "0" + month.toString() : month.toString();
                let day = data.getDate();
                day = day < 10 ? "0" + day.toString() : day.toString();
                return data.getFullYear() + "-" + month + "-" + day;
            }
            else {
                return data.toISOString();
            }
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            type = this.findCorrectType(data, type);
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance = {};
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type, attributeType.format);
            }
            return instance;
        }
    }
    static deserialize(data, type, format) {
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        }
        else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        }
        else if (type.lastIndexOf("Array<", 0) === 0) {
            let subType = type.replace("Array<", "");
            subType = subType.substring(0, subType.length - 1);
            let transformedData = [];
            for (let index in data) {
                let date = data[index];
                transformedData.push(ObjectSerializer.deserialize(date, subType, format));
            }
            return transformedData;
        }
        else if (type === "Date") {
            return new Date(data);
        }
        else {
            if (enumsMap.has(type)) {
                return data;
            }
            if (!typeMap[type]) {
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index in attributeTypes) {
                let attributeType = attributeTypes[index];
                let value = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type, attributeType.format);
                if (value !== undefined) {
                    instance[attributeType.name] = value;
                }
            }
            return instance;
        }
    }
    static normalizeMediaType(mediaType) {
        if (mediaType === undefined) {
            return undefined;
        }
        return mediaType.split(";")[0].trim().toLowerCase();
    }
    static getPreferredMediaType(mediaTypes) {
        if (!mediaTypes) {
            return "application/json";
        }
        const normalMediaTypes = mediaTypes.map(this.normalizeMediaType);
        let selectedMediaType = undefined;
        let selectedRank = -Infinity;
        for (const mediaType of normalMediaTypes) {
            if (supportedMediaTypes[mediaType] > selectedRank) {
                selectedMediaType = mediaType;
                selectedRank = supportedMediaTypes[mediaType];
            }
        }
        if (selectedMediaType === undefined) {
            throw new Error("None of the given media types are supported: " + mediaTypes.join(", "));
        }
        return selectedMediaType;
    }
    static stringify(data, mediaType) {
        if (mediaType === "text/plain") {
            return String(data);
        }
        if (mediaType === "application/json") {
            return JSON.stringify(data);
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.stringify.");
    }
    static parse(rawData, mediaType) {
        if (mediaType === undefined) {
            throw new Error("Cannot parse content. No Content-Type defined.");
        }
        if (mediaType === "text/plain") {
            return rawData;
        }
        if (mediaType === "application/json") {
            return JSON.parse(rawData);
        }
        if (mediaType === "text/html") {
            return rawData;
        }
        throw new Error("The mediaType " + mediaType + " is not supported by ObjectSerializer.parse.");
    }
}
exports.ObjectSerializer = ObjectSerializer;
//# sourceMappingURL=ObjectSerializer.js.map