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
__exportStar(require("../models/AttachToLangPrimaryRequestVNext"), exports);
__exportStar(require("../models/BatchInputJsonNode"), exports);
__exportStar(require("../models/BatchInputString"), exports);
__exportStar(require("../models/BatchInputTag"), exports);
__exportStar(require("../models/BatchResponseTag"), exports);
__exportStar(require("../models/BatchResponseTagWithErrors"), exports);
__exportStar(require("../models/CollectionResponseWithTotalTagForwardPaging"), exports);
__exportStar(require("../models/DetachFromLangGroupRequestVNext"), exports);
__exportStar(require("../models/ErrorDetail"), exports);
__exportStar(require("../models/ForwardPaging"), exports);
__exportStar(require("../models/ModelError"), exports);
__exportStar(require("../models/NextPage"), exports);
__exportStar(require("../models/SetNewLanguagePrimaryRequestVNext"), exports);
__exportStar(require("../models/StandardError"), exports);
__exportStar(require("../models/Tag"), exports);
__exportStar(require("../models/TagCloneRequestVNext"), exports);
__exportStar(require("../models/UpdateLanguagesRequestVNext"), exports);
const AttachToLangPrimaryRequestVNext_1 = require("../models/AttachToLangPrimaryRequestVNext");
const BatchInputJsonNode_1 = require("../models/BatchInputJsonNode");
const BatchInputString_1 = require("../models/BatchInputString");
const BatchInputTag_1 = require("../models/BatchInputTag");
const BatchResponseTag_1 = require("../models/BatchResponseTag");
const BatchResponseTagWithErrors_1 = require("../models/BatchResponseTagWithErrors");
const CollectionResponseWithTotalTagForwardPaging_1 = require("../models/CollectionResponseWithTotalTagForwardPaging");
const DetachFromLangGroupRequestVNext_1 = require("../models/DetachFromLangGroupRequestVNext");
const ErrorDetail_1 = require("../models/ErrorDetail");
const ForwardPaging_1 = require("../models/ForwardPaging");
const ModelError_1 = require("../models/ModelError");
const NextPage_1 = require("../models/NextPage");
const SetNewLanguagePrimaryRequestVNext_1 = require("../models/SetNewLanguagePrimaryRequestVNext");
const StandardError_1 = require("../models/StandardError");
const Tag_1 = require("../models/Tag");
const TagCloneRequestVNext_1 = require("../models/TagCloneRequestVNext");
const UpdateLanguagesRequestVNext_1 = require("../models/UpdateLanguagesRequestVNext");
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
    "AttachToLangPrimaryRequestVNextLanguageEnum",
    "AttachToLangPrimaryRequestVNextPrimaryLanguageEnum",
    "BatchResponseTagStatusEnum",
    "BatchResponseTagWithErrorsStatusEnum",
    "TagLanguageEnum",
    "UpdateLanguagesRequestVNextLanguagesEnum",
]);
let typeMap = {
    "AttachToLangPrimaryRequestVNext": AttachToLangPrimaryRequestVNext_1.AttachToLangPrimaryRequestVNext,
    "BatchInputJsonNode": BatchInputJsonNode_1.BatchInputJsonNode,
    "BatchInputString": BatchInputString_1.BatchInputString,
    "BatchInputTag": BatchInputTag_1.BatchInputTag,
    "BatchResponseTag": BatchResponseTag_1.BatchResponseTag,
    "BatchResponseTagWithErrors": BatchResponseTagWithErrors_1.BatchResponseTagWithErrors,
    "CollectionResponseWithTotalTagForwardPaging": CollectionResponseWithTotalTagForwardPaging_1.CollectionResponseWithTotalTagForwardPaging,
    "DetachFromLangGroupRequestVNext": DetachFromLangGroupRequestVNext_1.DetachFromLangGroupRequestVNext,
    "ErrorDetail": ErrorDetail_1.ErrorDetail,
    "ForwardPaging": ForwardPaging_1.ForwardPaging,
    "ModelError": ModelError_1.ModelError,
    "NextPage": NextPage_1.NextPage,
    "SetNewLanguagePrimaryRequestVNext": SetNewLanguagePrimaryRequestVNext_1.SetNewLanguagePrimaryRequestVNext,
    "StandardError": StandardError_1.StandardError,
    "Tag": Tag_1.Tag,
    "TagCloneRequestVNext": TagCloneRequestVNext_1.TagCloneRequestVNext,
    "UpdateLanguagesRequestVNext": UpdateLanguagesRequestVNext_1.UpdateLanguagesRequestVNext,
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