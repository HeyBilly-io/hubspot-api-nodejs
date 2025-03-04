import { Configuration } from '../configuration';
import { BatchInputPublicAssociation } from '../models/BatchInputPublicAssociation';
import { BatchInputPublicObjectId } from '../models/BatchInputPublicObjectId';
import { BatchResponsePublicAssociation } from '../models/BatchResponsePublicAssociation';
import { BatchResponsePublicAssociationMulti } from '../models/BatchResponsePublicAssociationMulti';
import { BatchResponsePublicAssociationMultiWithErrors } from '../models/BatchResponsePublicAssociationMultiWithErrors';
import { BatchResponsePublicAssociationWithErrors } from '../models/BatchResponsePublicAssociationWithErrors';
import { CollectionResponsePublicAssociationDefinitionNoPaging } from '../models/CollectionResponsePublicAssociationDefinitionNoPaging';
import { BatchApiRequestFactory, BatchApiResponseProcessor } from "../apis/BatchApi";
export interface BatchApiArchiveRequest {
    fromObjectType: string;
    toObjectType: string;
    batchInputPublicAssociation: BatchInputPublicAssociation;
}
export interface BatchApiCreateRequest {
    fromObjectType: string;
    toObjectType: string;
    batchInputPublicAssociation: BatchInputPublicAssociation;
}
export interface BatchApiReadRequest {
    fromObjectType: string;
    toObjectType: string;
    batchInputPublicObjectId: BatchInputPublicObjectId;
}
export declare class ObjectBatchApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor);
    archive(param: BatchApiArchiveRequest, options?: Configuration): Promise<void>;
    create(param: BatchApiCreateRequest, options?: Configuration): Promise<BatchResponsePublicAssociation | BatchResponsePublicAssociationWithErrors>;
    read(param: BatchApiReadRequest, options?: Configuration): Promise<BatchResponsePublicAssociationMultiWithErrors | BatchResponsePublicAssociationMulti>;
}
import { TypesApiRequestFactory, TypesApiResponseProcessor } from "../apis/TypesApi";
export interface TypesApiGetAllRequest {
    fromObjectType: string;
    toObjectType: string;
}
export declare class ObjectTypesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TypesApiRequestFactory, responseProcessor?: TypesApiResponseProcessor);
    getAll(param: TypesApiGetAllRequest, options?: Configuration): Promise<CollectionResponsePublicAssociationDefinitionNoPaging>;
}
