import { Puller } from "../protocols/puller";

export class PullRoutine {
  constructor(private readonly pullerService: Puller) {}

  async setup() {
    const connection = {
      host: '192.168.132.130',
      port: 22,
      username: 'app',
      password: '123'
    }

    setInterval(async () => {
      await this.pullerService.pull(connection)
    }, 5000)
  } 
}