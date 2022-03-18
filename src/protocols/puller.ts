import { Connection } from '../models/connection'

export interface Puller {
  pull: (connection: Connection) => Promise<boolean>
}