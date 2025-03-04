import { AssociationsApi, BasicApi, BatchApi, PublicObjectApi, SearchApi } from '../../../../../codegen/crm/objects/postal_mail/index';
import IConfiguration from '../../../../configuration/IConfiguration';
export default class PostalMailDiscovery {
    associationsApi: AssociationsApi;
    basicApi: BasicApi;
    batchApi: BatchApi;
    publicObjectApi: PublicObjectApi;
    searchApi: SearchApi;
    constructor(config: IConfiguration);
}
