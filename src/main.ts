import { config as dotEnvConfig } from 'dotenv'

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { cpus } from 'os'
import * as cluster from 'cluster'
import * as processes from 'process'
dotEnvConfig()

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  /**
   * Set global prefix
   */

  // app.useGlobalPipes(new ValidationPipe())
  // app.use(helmet())
  app.setGlobalPrefix('api')

  const numCPUS = cpus().length

  if (cluster.isMaster) {
    console.log(`Primary ${process.pid} is running`)
    console.log(numCPUS)
  }

  await app.listen(process.env?.PORT || 6000)

  // if (module.hot) {
  //   module.hot.accept()
  //   module.hot.dispose(() => app.close())
  // }
}
bootstrap()
