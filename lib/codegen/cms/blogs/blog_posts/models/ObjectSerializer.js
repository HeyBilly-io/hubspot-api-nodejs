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
__exportStar(require("../models/Angle"), exports);
__exportStar(require("../models/AttachToLangPrimaryRequestVNext"), exports);
__exportStar(require("../models/BackgroundImage"), exports);
__exportStar(require("../models/BatchInputBlogPost"), exports);
__exportStar(require("../models/BatchInputJsonNode"), exports);
__exportStar(require("../models/BatchInputString"), exports);
__exportStar(require("../models/BatchResponseBlogPost"), exports);
__exportStar(require("../models/BatchResponseBlogPostWithErrors"), exports);
__exportStar(require("../models/BlogPost"), exports);
__exportStar(require("../models/BlogPostLanguageCloneRequestVNext"), exports);
__exportStar(require("../models/CollectionResponseWithTotalBlogPostForwardPaging"), exports);
__exportStar(require("../models/CollectionResponseWithTotalVersionBlogPost"), exports);
__exportStar(require("../models/ColorStop"), exports);
__exportStar(require("../models/ContentCloneRequestVNext"), exports);
__exportStar(require("../models/ContentLanguageVariation"), exports);
__exportStar(require("../models/ContentScheduleRequestVNext"), exports);
__exportStar(require("../models/DetachFromLangGroupRequestVNext"), exports);
__exportStar(require("../models/ErrorDetail"), exports);
__exportStar(require("../models/ForwardPaging"), exports);
__exportStar(require("../models/Gradient"), exports);
__exportStar(require("../models/LayoutSection"), exports);
__exportStar(require("../models/ModelError"), exports);
__exportStar(require("../models/NextPage"), exports);
__exportStar(require("../models/Paging"), exports);
__exportStar(require("../models/PreviousPage"), exports);
__exportStar(require("../models/RGBAColor"), exports);
__exportStar(require("../models/RowMetaData"), exports);
__exportStar(require("../models/SetNewLanguagePrimaryRequestVNext"), exports);
__exportStar(require("../models/SideOrCorner"), exports);
__exportStar(require("../models/StandardError"), exports);
__exportStar(require("../models/Styles"), exports);
__exportStar(require("../models/UpdateLanguagesRequestVNext"), exports);
__exportStar(require("../models/VersionBlogPost"), exports);
__exportStar(require("../models/VersionUser"), exports);
const Angle_1 = require("../models/Angle");
const AttachToLangPrimaryRequestVNext_1 = require("../models/AttachToLangPrimaryRequestVNext");
const BackgroundImage_1 = require("../models/BackgroundImage");
const BatchInputBlogPost_1 = require("../models/BatchInputBlogPost");
const BatchInputJsonNode_1 = require("../models/BatchInputJsonNode");
const BatchInputString_1 = require("../models/BatchInputString");
const BatchResponseBlogPost_1 = require("../models/BatchResponseBlogPost");
const BatchResponseBlogPostWithErrors_1 = require("../models/BatchResponseBlogPostWithErrors");
const BlogPost_1 = require("../models/BlogPost");
const BlogPostLanguageCloneRequestVNext_1 = require("../models/BlogPostLanguageCloneRequestVNext");
const CollectionResponseWithTotalBlogPostForwardPaging_1 = require("../models/CollectionResponseWithTotalBlogPostForwardPaging");
const CollectionResponseWithTotalVersionBlogPost_1 = require("../models/CollectionResponseWithTotalVersionBlogPost");
const ColorStop_1 = require("../models/ColorStop");
const ContentCloneRequestVNext_1 = require("../models/ContentCloneRequestVNext");
const ContentLanguageVariation_1 = require("../models/ContentLanguageVariation");
const ContentScheduleRequestVNext_1 = require("../models/ContentScheduleRequestVNext");
const DetachFromLangGroupRequestVNext_1 = require("../models/DetachFromLangGroupRequestVNext");
const ErrorDetail_1 = require("../models/ErrorDetail");
const ForwardPaging_1 = require("../models/ForwardPaging");
const Gradient_1 = require("../models/Gradient");
const LayoutSection_1 = require("../models/LayoutSection");
const ModelError_1 = require("../models/ModelError");
const NextPage_1 = require("../models/NextPage");
const Paging_1 = require("../models/Paging");
const PreviousPage_1 = require("../models/PreviousPage");
const RGBAColor_1 = require("../models/RGBAColor");
const RowMetaData_1 = require("../models/RowMetaData");
const SetNewLanguagePrimaryRequestVNext_1 = require("../models/SetNewLanguagePrimaryRequestVNext");
const SideOrCorner_1 = require("../models/SideOrCorner");
const StandardError_1 = require("../models/StandardError");
const Styles_1 = require("../models/Styles");
const UpdateLanguagesRequestVNext_1 = require("../models/UpdateLanguagesRequestVNext");
const VersionBlogPost_1 = require("../models/VersionBlogPost");
const VersionUser_1 = require("../models/VersionUser");
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
    "AngleUnitsEnum",
    "AttachToLangPrimaryRequestVNextLanguageEnum",
    "AttachToLangPrimaryRequestVNextPrimaryLanguageEnum",
    "BackgroundImageBackgroundPositionEnum",
    "BatchResponseBlogPostStatusEnum",
    "BatchResponseBlogPostWithErrorsStatusEnum",
    "BlogPostAbStatusEnum",
    "BlogPostLanguageEnum",
    "BlogPostContentTypeCategoryEnum",
    "BlogPostCurrentStateEnum",
    "SideOrCornerVerticalSideEnum",
    "SideOrCornerHorizontalSideEnum",
    "StylesVerticalAlignmentEnum",
    "StylesFlexboxPositioningEnum",
    "UpdateLanguagesRequestVNextLanguagesEnum",
]);
let typeMap = {
    "Angle": Angle_1.Angle,
    "AttachToLangPrimaryRequestVNext": AttachToLangPrimaryRequestVNext_1.AttachToLangPrimaryRequestVNext,
    "BackgroundImage": BackgroundImage_1.BackgroundImage,
    "BatchInputBlogPost": BatchInputBlogPost_1.BatchInputBlogPost,
    "BatchInputJsonNode": BatchInputJsonNode_1.BatchInputJsonNode,
    "BatchInputString": BatchInputString_1.BatchInputString,
    "BatchResponseBlogPost": BatchResponseBlogPost_1.BatchResponseBlogPost,
    "BatchResponseBlogPostWithErrors": BatchResponseBlogPostWithErrors_1.BatchResponseBlogPostWithErrors,
    "BlogPost": BlogPost_1.BlogPost,
    "BlogPostLanguageCloneRequestVNext": BlogPostLanguageCloneRequestVNext_1.BlogPostLanguageCloneRequestVNext,
    "CollectionResponseWithTotalBlogPostForwardPaging": CollectionResponseWithTotalBlogPostForwardPaging_1.CollectionResponseWithTotalBlogPostForwardPaging,
    "CollectionResponseWithTotalVersionBlogPost": CollectionResponseWithTotalVersionBlogPost_1.CollectionResponseWithTotalVersionBlogPost,
    "ColorStop": ColorStop_1.ColorStop,
    "ContentCloneRequestVNext": ContentCloneRequestVNext_1.ContentCloneRequestVNext,
    "ContentLanguageVariation": ContentLanguageVariation_1.ContentLanguageVariation,
    "ContentScheduleRequestVNext": ContentScheduleRequestVNext_1.ContentScheduleRequestVNext,
    "DetachFromLangGroupRequestVNext": DetachFromLangGroupRequestVNext_1.DetachFromLangGroupRequestVNext,
    "ErrorDetail": ErrorDetail_1.ErrorDetail,
    "ForwardPaging": ForwardPaging_1.ForwardPaging,
    "Gradient": Gradient_1.Gradient,
    "LayoutSection": LayoutSection_1.LayoutSection,
    "ModelError": ModelError_1.ModelError,
    "NextPage": NextPage_1.NextPage,
    "Paging": Paging_1.Paging,
    "PreviousPage": PreviousPage_1.PreviousPage,
    "RGBAColor": RGBAColor_1.RGBAColor,
    "RowMetaData": RowMetaData_1.RowMetaData,
    "SetNewLanguagePrimaryRequestVNext": SetNewLanguagePrimaryRequestVNext_1.SetNewLanguagePrimaryRequestVNext,
    "SideOrCorner": SideOrCorner_1.SideOrCorner,
    "StandardError": StandardError_1.StandardError,
    "Styles": Styles_1.Styles,
    "UpdateLanguagesRequestVNext": UpdateLanguagesRequestVNext_1.UpdateLanguagesRequestVNext,
    "VersionBlogPost": VersionBlogPost_1.VersionBlogPost,
    "VersionUser": VersionUser_1.VersionUser,
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