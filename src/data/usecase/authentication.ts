
import { HttpPostClient, HttpStatusCode} from '@data/protocols'
import { Authentication } from '@domain/index'
import { InvalidCredentialsError, UnexpectedError,  } from '@domain/errors'


export class RemoteAuth implements Authentication.IAuthentication {
  constructor (
    private readonly url: string,
    private readonly httpPostClient: HttpPostClient<Authentication.Response>
  ) {}

  async auth (params: Authentication.Params): Promise<Authentication.Response> {
    const httpResponse = await this.httpPostClient.post({
      url: this.url,
      body: params
    })
    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return httpResponse.body
      case HttpStatusCode.unauthorized: throw new InvalidCredentialsError()
      default: throw new UnexpectedError()
    }
  }
}

