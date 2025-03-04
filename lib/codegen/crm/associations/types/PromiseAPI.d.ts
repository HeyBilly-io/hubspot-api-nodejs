import { Configuration } from '../configuration';
import { BatchInputPublicAssociation } from '../models/BatchInputPublicAssociation';
import { BatchInputPublicObjectId } from '../models/BatchInputPublicObjectId';
import { BatchResponsePublicAssociation } from '../models/BatchResponsePublicAssociation';
import { BatchResponsePublicAssociationMulti } from '../models/BatchResponsePublicAssociationMulti';
import { BatchResponsePublicAssociationMultiWithErrors } from '../models/BatchResponsePublicAssociationMultiWithErrors';
import { BatchResponsePublicAssociationWithErrors } from '../models/BatchResponsePublicAssociationWithErrors';
import { CollectionResponsePublicAssociationDefinitionNoPaging } from '../models/CollectionResponsePublicAssociationDefinitionNoPaging';
import { BatchApiRequestFactory, BatchApiResponseProcessor } from "../apis/BatchApi";
export declare class PromiseBatchApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: BatchApiRequestFactory, responseProcessor?: BatchApiResponseProcessor);
    archive(fromObjectType: string, toObjectType: string, batchInputPublicAssociation: BatchInputPublicAssociation, _options?: Configuration): Promise<void>;
    create(fromObjectType: string, toObjectType: string, batchInputPublicAssociation: BatchInputPublicAssociation, _options?: Configuration): Promise<BatchResponsePublicAssociation | BatchResponsePublicAssociationWithErrors>;
    read(fromObjectType: string, toObjectType: string, batchInputPublicObjectId: BatchInputPublicObjectId, _options?: Configuration): Promise<BatchResponsePublicAssociationMultiWithErrors | BatchResponsePublicAssociationMulti>;
}
import { TypesApiRequestFactory, TypesApiResponseProcessor } from "../apis/TypesApi";
export declare class PromiseTypesApi {
    private api;
    constructor(configuration: Configuration, requestFactory?: TypesApiRequestFactory, responseProcessor?: TypesApiResponseProcessor);
    getAll(fromObjectType: string, toObjectType: string, _options?: Configuration): Promise<CollectionResponsePublicAssociationDefinitionNoPaging>;
}
