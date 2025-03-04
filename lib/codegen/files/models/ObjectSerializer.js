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
__exportStar(require("../models/CollectionResponseFile"), exports);
__exportStar(require("../models/CollectionResponseFolder"), exports);
__exportStar(require("../models/ErrorCategory"), exports);
__exportStar(require("../models/ErrorDetail"), exports);
__exportStar(require("../models/FileActionResponse"), exports);
__exportStar(require("../models/FileUpdateInput"), exports);
__exportStar(require("../models/Folder"), exports);
__exportStar(require("../models/FolderActionResponse"), exports);
__exportStar(require("../models/FolderInput"), exports);
__exportStar(require("../models/FolderUpdateInput"), exports);
__exportStar(require("../models/FolderUpdateTaskLocator"), exports);
__exportStar(require("../models/ImportFromUrlInput"), exports);
__exportStar(require("../models/ImportFromUrlTaskLocator"), exports);
__exportStar(require("../models/ModelError"), exports);
__exportStar(require("../models/ModelFile"), exports);
__exportStar(require("../models/NextPage"), exports);
__exportStar(require("../models/Paging"), exports);
__exportStar(require("../models/PreviousPage"), exports);
__exportStar(require("../models/SignedUrl"), exports);
__exportStar(require("../models/StandardError"), exports);
const CollectionResponseFile_1 = require("../models/CollectionResponseFile");
const CollectionResponseFolder_1 = require("../models/CollectionResponseFolder");
const ErrorCategory_1 = require("../models/ErrorCategory");
const ErrorDetail_1 = require("../models/ErrorDetail");
const FileActionResponse_1 = require("../models/FileActionResponse");
const FileUpdateInput_1 = require("../models/FileUpdateInput");
const Folder_1 = require("../models/Folder");
const FolderActionResponse_1 = require("../models/FolderActionResponse");
const FolderInput_1 = require("../models/FolderInput");
const FolderUpdateInput_1 = require("../models/FolderUpdateInput");
const FolderUpdateTaskLocator_1 = require("../models/FolderUpdateTaskLocator");
const ImportFromUrlInput_1 = require("../models/ImportFromUrlInput");
const ImportFromUrlTaskLocator_1 = require("../models/ImportFromUrlTaskLocator");
const ModelError_1 = require("../models/ModelError");
const ModelFile_1 = require("../models/ModelFile");
const NextPage_1 = require("../models/NextPage");
const Paging_1 = require("../models/Paging");
const PreviousPage_1 = require("../models/PreviousPage");
const SignedUrl_1 = require("../models/SignedUrl");
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
    "ErrorCategoryHttpStatusEnum",
    "FileActionResponseStatusEnum",
    "FileUpdateInputAccessEnum",
    "FolderActionResponseStatusEnum",
    "ImportFromUrlInputAccessEnum",
    "ImportFromUrlInputDuplicateValidationStrategyEnum",
    "ImportFromUrlInputDuplicateValidationScopeEnum",
    "ModelFileAccessEnum",
]);
let typeMap = {
    "CollectionResponseFile": CollectionResponseFile_1.CollectionResponseFile,
    "CollectionResponseFolder": CollectionResponseFolder_1.CollectionResponseFolder,
    "ErrorCategory": ErrorCategory_1.ErrorCategory,
    "ErrorDetail": ErrorDetail_1.ErrorDetail,
    "FileActionResponse": FileActionResponse_1.FileActionResponse,
    "FileUpdateInput": FileUpdateInput_1.FileUpdateInput,
    "Folder": Folder_1.Folder,
    "FolderActionResponse": FolderActionResponse_1.FolderActionResponse,
    "FolderInput": FolderInput_1.FolderInput,
    "FolderUpdateInput": FolderUpdateInput_1.FolderUpdateInput,
    "FolderUpdateTaskLocator": FolderUpdateTaskLocator_1.FolderUpdateTaskLocator,
    "ImportFromUrlInput": ImportFromUrlInput_1.ImportFromUrlInput,
    "ImportFromUrlTaskLocator": ImportFromUrlTaskLocator_1.ImportFromUrlTaskLocator,
    "ModelError": ModelError_1.ModelError,
    "ModelFile": ModelFile_1.ModelFile,
    "NextPage": NextPage_1.NextPage,
    "Paging": Paging_1.Paging,
    "PreviousPage": PreviousPage_1.PreviousPage,
    "SignedUrl": SignedUrl_1.SignedUrl,
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