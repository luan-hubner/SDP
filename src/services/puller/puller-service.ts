import { Connection } from '../../models/connection'
import { Puller } from '../../protocols/puller'
import { Client } from 'node-scp'

export class PullerService implements Puller {
  async pull (connection: Connection): Promise<boolean> {
    try {
      const client = await Client({
        host: connection.host,
        port: connection.port,
        username: connection.username,
        password: connection.password,
      })

      const filename = new Date().getTime()

      await client.downloadFile('/var/backup.txt', `./temp/${filename.toString()}.txt`)
      client.close()
      
      return true
    } catch (err) {
      console.error({
        date: new Date(),
        stack: err
      })
    }
  }
}