import { AccessModel } from '@/domain/models'

export type Params = {
  email: string
  password: string
}

export type Response = AccessModel | undefined

export interface IAuthentication {
  auth: (params: Params) => Promise<Response>
}