import { createConfiguration } from '../../../../../codegen/crm/objects/emails/configuration'
import {
  AssociationsApi,
  BasicApi,
  BatchApi,
  PublicObjectApi,
  RequestContext,
  ResponseContext,
  SearchApi,
  ServerConfiguration,
} from '../../../../../codegen/crm/objects/emails/index'
import { Observable } from '../../../../../codegen/crm/objects/emails/rxjsStub'
import { ApiClientConfigurator } from '../../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../../configuration/IConfiguration'

export default class EmailsDiscovery {
  public associationsApi: AssociationsApi
  public basicApi: BasicApi
  public batchApi: BatchApi
  public publicObjectApi: PublicObjectApi
  public searchApi: SearchApi

  constructor(config: IConfiguration) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.associationsApi = new AssociationsApi(configuration)
    this.basicApi = new BasicApi(configuration)
    this.batchApi = new BatchApi(configuration)
    this.publicObjectApi = new PublicObjectApi(configuration)
    this.searchApi = new SearchApi(configuration)
  }
}
