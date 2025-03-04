import { Configuration } from '../configuration';
import { Observable } from '../rxjsStub';
import { AttachToLangPrimaryRequestVNext } from '../models/AttachToLangPrimaryRequestVNext';
import { BatchInputJsonNode } from '../models/BatchInputJsonNode';
import { BatchInputString } from '../models/BatchInputString';
import { BatchInputTag } from '../models/BatchInputTag';
import { BatchResponseTag } from '../models/BatchResponseTag';
import { BatchResponseTagWithErrors } from '../models/BatchResponseTagWithErrors';
import { CollectionResponseWithTotalTagForwardPaging } from '../models/CollectionResponseWithTotalTagForwardPaging';
import { DetachFromLangGroupRequestVNext } from '../models/DetachFromLangGroupRequestVNext';
import { SetNewLanguagePrimaryRequestVNext } from '../models/SetNewLanguagePrimaryRequestVNext';
import { Tag } from '../models/Tag';
import { TagCloneRequestVNext } from '../models/TagCloneRequestVNext';
import { UpdateLanguagesRequestVNext } from '../models/UpdateLanguagesRequestVNext';
import { BlogTagsApiRequestFactory, BlogTagsApiResponseProcessor } from "../apis/BlogTagsApi";
export declare class ObservableBlogTagsApi {
    private requestFactory;
    private responseProcessor;
    private configuration;
    constructor(configuration: Configuration, requestFactory?: BlogTagsApiRequestFactory, responseProcessor?: BlogTagsApiResponseProcessor);
    archive(objectId: string, archived?: boolean, _options?: Configuration): Observable<void>;
    archiveBatch(batchInputString: BatchInputString, _options?: Configuration): Observable<void>;
    attachToLangGroup(attachToLangPrimaryRequestVNext: AttachToLangPrimaryRequestVNext, _options?: Configuration): Observable<void>;
    create(tag: Tag, _options?: Configuration): Observable<Tag>;
    createBatch(batchInputTag: BatchInputTag, _options?: Configuration): Observable<BatchResponseTag | BatchResponseTagWithErrors>;
    createLangVariation(tagCloneRequestVNext: TagCloneRequestVNext, _options?: Configuration): Observable<Tag>;
    detachFromLangGroup(detachFromLangGroupRequestVNext: DetachFromLangGroupRequestVNext, _options?: Configuration): Observable<void>;
    getById(objectId: string, archived?: boolean, _options?: Configuration): Observable<Tag>;
    getPage(createdAt?: Date, createdAfter?: Date, createdBefore?: Date, updatedAt?: Date, updatedAfter?: Date, updatedBefore?: Date, sort?: Array<string>, after?: string, limit?: number, archived?: boolean, _options?: Configuration): Observable<CollectionResponseWithTotalTagForwardPaging>;
    readBatch(batchInputString: BatchInputString, archived?: boolean, _options?: Configuration): Observable<BatchResponseTag | BatchResponseTagWithErrors>;
    setLangPrimary(setNewLanguagePrimaryRequestVNext: SetNewLanguagePrimaryRequestVNext, _options?: Configuration): Observable<void>;
    update(objectId: string, tag: Tag, archived?: boolean, _options?: Configuration): Observable<Tag>;
    updateBatch(batchInputJsonNode: BatchInputJsonNode, archived?: boolean, _options?: Configuration): Observable<BatchResponseTag | BatchResponseTagWithErrors>;
    updateLangs(updateLanguagesRequestVNext: UpdateLanguagesRequestVNext, _options?: Configuration): Observable<void>;
}
