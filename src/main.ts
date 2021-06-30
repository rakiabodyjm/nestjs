import { config } from 'dotenv'
config()

import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
// import { ValidationPipe } from '@nestjs/common'
import { ValidationPipe } from './validation/validation.pipe'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  // app.useGlobalPipes(new ValidationPipe())
  await app.listen(process.env.PORT || 6000)
}
bootstrap()
