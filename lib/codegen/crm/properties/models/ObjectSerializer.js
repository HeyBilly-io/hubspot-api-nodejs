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
__exportStar(require("../models/BatchInputPropertyCreate"), exports);
__exportStar(require("../models/BatchInputPropertyName"), exports);
__exportStar(require("../models/BatchReadInputPropertyName"), exports);
__exportStar(require("../models/BatchResponseProperty"), exports);
__exportStar(require("../models/CollectionResponseProperty"), exports);
__exportStar(require("../models/CollectionResponsePropertyGroup"), exports);
__exportStar(require("../models/ErrorCategory"), exports);
__exportStar(require("../models/ErrorDetail"), exports);
__exportStar(require("../models/ModelError"), exports);
__exportStar(require("../models/NextPage"), exports);
__exportStar(require("../models/Option"), exports);
__exportStar(require("../models/OptionInput"), exports);
__exportStar(require("../models/Paging"), exports);
__exportStar(require("../models/Property"), exports);
__exportStar(require("../models/PropertyCreate"), exports);
__exportStar(require("../models/PropertyGroup"), exports);
__exportStar(require("../models/PropertyGroupCreate"), exports);
__exportStar(require("../models/PropertyGroupUpdate"), exports);
__exportStar(require("../models/PropertyModificationMetadata"), exports);
__exportStar(require("../models/PropertyName"), exports);
__exportStar(require("../models/PropertyUpdate"), exports);
__exportStar(require("../models/StandardError"), exports);
const BatchInputPropertyCreate_1 = require("../models/BatchInputPropertyCreate");
const BatchInputPropertyName_1 = require("../models/BatchInputPropertyName");
const BatchReadInputPropertyName_1 = require("../models/BatchReadInputPropertyName");
const BatchResponseProperty_1 = require("../models/BatchResponseProperty");
const CollectionResponseProperty_1 = require("../models/CollectionResponseProperty");
const CollectionResponsePropertyGroup_1 = require("../models/CollectionResponsePropertyGroup");
const ErrorCategory_1 = require("../models/ErrorCategory");
const ErrorDetail_1 = require("../models/ErrorDetail");
const ModelError_1 = require("../models/ModelError");
const NextPage_1 = require("../models/NextPage");
const Option_1 = require("../models/Option");
const OptionInput_1 = require("../models/OptionInput");
const Paging_1 = require("../models/Paging");
const Property_1 = require("../models/Property");
const PropertyCreate_1 = require("../models/PropertyCreate");
const PropertyGroup_1 = require("../models/PropertyGroup");
const PropertyGroupCreate_1 = require("../models/PropertyGroupCreate");
const PropertyGroupUpdate_1 = require("../models/PropertyGroupUpdate");
const PropertyModificationMetadata_1 = require("../models/PropertyModificationMetadata");
const PropertyName_1 = require("../models/PropertyName");
const PropertyUpdate_1 = require("../models/PropertyUpdate");
const StandardError_1 = require("../models/StandardError");
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
    "BatchResponsePropertyStatusEnum",
    "ErrorCategoryHttpStatusEnum",
    "PropertyCreateTypeEnum",
    "PropertyCreateFieldTypeEnum",
    "PropertyUpdateTypeEnum",
    "PropertyUpdateFieldTypeEnum",
]);
let typeMap = {
    "BatchInputPropertyCreate": BatchInputPropertyCreate_1.BatchInputPropertyCreate,
    "BatchInputPropertyName": BatchInputPropertyName_1.BatchInputPropertyName,
    "BatchReadInputPropertyName": BatchReadInputPropertyName_1.BatchReadInputPropertyName,
    "BatchResponseProperty": BatchResponseProperty_1.BatchResponseProperty,
    "CollectionResponseProperty": CollectionResponseProperty_1.CollectionResponseProperty,
    "CollectionResponsePropertyGroup": CollectionResponsePropertyGroup_1.CollectionResponsePropertyGroup,
    "ErrorCategory": ErrorCategory_1.ErrorCategory,
    "ErrorDetail": ErrorDetail_1.ErrorDetail,
    "ModelError": ModelError_1.ModelError,
    "NextPage": NextPage_1.NextPage,
    "Option": Option_1.Option,
    "OptionInput": OptionInput_1.OptionInput,
    "Paging": Paging_1.Paging,
    "Property": Property_1.Property,
    "PropertyCreate": PropertyCreate_1.PropertyCreate,
    "PropertyGroup": PropertyGroup_1.PropertyGroup,
    "PropertyGroupCreate": PropertyGroupCreate_1.PropertyGroupCreate,
    "PropertyGroupUpdate": PropertyGroupUpdate_1.PropertyGroupUpdate,
    "PropertyModificationMetadata": PropertyModificationMetadata_1.PropertyModificationMetadata,
    "PropertyName": PropertyName_1.PropertyName,
    "PropertyUpdate": PropertyUpdate_1.PropertyUpdate,
    "StandardError": StandardError_1.StandardError,
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