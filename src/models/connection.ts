export interface Connection {
  host: string
  port: number
  username: string
  password: string
  privateKey?: Buffer
  passphrase?: string
}

