export class InvalidCredentialsError extends Error {
  constructor () {
    super('Credenciais inválida!')
    this.name = 'InvalidCredentialsError'
  }
}