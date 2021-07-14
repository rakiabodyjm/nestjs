import { config } from 'dotenv'
config()

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
// import { ValidationPipe } from '@nestjs/common'

declare const module: any

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  /**
   * Set global prefix
   */

  // app.useGlobalPipes(new ValidationPipe())
  // app.use(helmet())
  app.setGlobalPrefix('api')
  await app.listen(process.env.PORT || 6000)

  if (module.hot) {
    module.hot.accept()
    module.hot.dispose(() => app.close())
  }
}
bootstrap()
