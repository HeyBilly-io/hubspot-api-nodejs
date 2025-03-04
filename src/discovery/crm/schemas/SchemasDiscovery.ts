import {
  Configuration,
  CoreApi,
  createConfiguration,
  PublicObjectSchemasApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
} from '../../../../codegen/crm/schemas/index'
import { Observable } from '../../../../codegen/crm/schemas/rxjsStub'
import { ApiClientConfigurator } from '../../../configuration/ApiClientConfigurator'
import IConfiguration from '../../../configuration/IConfiguration'
import ApiDecoratorService from '../../../services/ApiDecoratorService'

export default class SchemasDiscovery {
  public coreApi: CoreApi
  public publicObjectSchemasApi: PublicObjectSchemasApi

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

    this.coreApi = ApiDecoratorService.getInstance().apply<CoreApi, Configuration>(
      new CoreApi(configuration),
      configuration,
    )
    this.publicObjectSchemasApi = ApiDecoratorService.getInstance().apply<PublicObjectSchemasApi, Configuration>(
      new PublicObjectSchemasApi(configuration),
      configuration,
    )
  }
}
