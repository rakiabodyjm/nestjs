import { Module, ValidationPipe } from '@nestjs/common'
import { CatsService } from './cats.service'
import { CatsController } from './cats.controller'
import { APP_PIPE } from '@nestjs/core'

@Module({
  controllers: [CatsController],
  providers: [
    CatsService,
    {
      provide: APP_PIPE,
      useClass: ValidationPipe,
    },
  ],
  exports: [CatsService],
})
export class CatsModule {}
