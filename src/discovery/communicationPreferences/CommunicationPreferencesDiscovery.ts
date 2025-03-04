import {
  Configuration,
  createConfiguration,
  DefinitionApi,
  RequestContext,
  ResponseContext,
  ServerConfiguration,
  StatusApi,
} from '../../../codegen/communication_preferences/index'
import { Observable } from '../../../codegen/communication_preferences/rxjsStub'
import { ApiClientConfigurator } from '../../configuration/ApiClientConfigurator'
import IConfiguration from '../../configuration/IConfiguration'
import ApiDecoratorService from '../../services/ApiDecoratorService'

export default class CommunicationPreferencesDiscovery {
  public definitionApi: DefinitionApi
  public statusApi: StatusApi

  constructor(config: IConfiguration = {}) {
    const configuration = createConfiguration(
      ApiClientConfigurator.getParams<
        RequestContext,
        ResponseContext,
        Observable<RequestContext>,
        Observable<ResponseContext>,
        ServerConfiguration<{}>
      >(config, ServerConfiguration, Observable, Observable),
    )

    this.definitionApi = ApiDecoratorService.getInstance().apply<DefinitionApi, Configuration>(
      new DefinitionApi(configuration),
      configuration,
    )
    this.statusApi = ApiDecoratorService.getInstance().apply<StatusApi, Configuration>(
      new StatusApi(configuration),
      configuration,
    )
  }
}
