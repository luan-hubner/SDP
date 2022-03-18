import { PullRoutine } from '../routines/pull-routine'
import { PullerService } from '../services/puller/puller-service'
import env from './config/env'

const setupServer = async () => {
  const app = (await import('./config/app')).default
  
  app.listen(env.port, () => console.log(`SDP running at port ${env.port}`))
}

setupServer()