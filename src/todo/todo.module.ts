import { Module } from '@nestjs/common'
import { TodoService } from './todo.service'
import { TodoResolver } from './todo.resolver'
import { TypeOrmModule } from '@nestjs/typeorm'
import { Todo } from 'src/todo/entities/todo.entity'
import { UserModule } from 'src/user/user.module'

@Module({
  imports: [TypeOrmModule.forFeature([Todo]), UserModule],
  providers: [TodoResolver, TodoService],
  exports: [TodoService],
})
export class TodoModule {}
