import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ObjectType,
  Field,
  ResolveField,
  Parent,
} from '@nestjs/graphql'
import { TodoService } from './todo.service'
import { Todo } from './entities/todo.entity'
import { CreateTodoInput } from './dto/create-todo.input'
import { UpdateTodoInput } from './dto/update-todo.input'
import { User } from 'src/user/entities/user.entity'

@Resolver(() => Todo)
export class TodoResolver {
  constructor(private readonly todoService: TodoService) {}

  @Mutation(() => Todo)
  createTodo(@Args('createTodoInput') createTodoInput: CreateTodoInput) {
    return this.todoService.create(createTodoInput)
  }

  @Query(() => [Todo], { name: 'todos' })
  findAll() {
    return this.todoService.findAll()
  }

  @ResolveField(() => User)
  user(@Parent() todo: Todo): Promise<User> {
    return this.todoService.findUser(todo.userId)
  }

  @Query(() => Todo, { name: 'todo' })
  findOne(@Args('id', { type: () => Int }) id: number): Promise<Todo> {
    return this.todoService.findOne(id)
  }

  @Mutation(() => Todo)
  updateTodo(@Args('updateTodoInput') updateTodoInput: UpdateTodoInput) {
    return this.todoService.update(updateTodoInput.id, updateTodoInput)
  }

  @Mutation(() => String)
  removeTodo(@Args('id', { type: () => Int }) id: number) {
    return this.todoService.remove(id)
  }
}
