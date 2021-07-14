import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Todo } from 'src/todo/entities/todo.entity'
import { UserService } from 'src/user/user.service'
import { Repository } from 'typeorm'
import { CreateTodoInput } from './dto/create-todo.input'
import { UpdateTodoInput } from './dto/update-todo.input'

@Injectable()
export class TodoService {
  constructor(
    @InjectRepository(Todo) private todoRepository: Repository<Todo>,
    private userService: UserService,
  ) {}

  create(createTodoInput: CreateTodoInput) {
    const createdTodo = this.todoRepository.create({
      ...createTodoInput,
      status: false,
    })
    return this.todoRepository.save(createdTodo)
  }

  findUser(userId) {
    return this.userService.findOne(userId)
  }

  findAll() {
    // return `This action returns all todo`
    return this.todoRepository.find({ relations: ['user'] })
  }

  findOne(id: number) {
    return this.todoRepository.findOneOrFail(id)
    // return `This action returns a #${id} todo`
  }

  async update(id: number, updateTodoInput: UpdateTodoInput) {
    const updateTodo = await this.todoRepository.findOneOrFail(id)
    return this.todoRepository.save({
      id,
      ...updateTodo,
      ...updateTodoInput,
    })
    return
    // return `This action updates a #${id} todo`
  }

  async remove(id: number) {
    await this.todoRepository.findOneOrFail(id)
    this.todoRepository.delete(id)
    return `Todo ID ${id} Deleted`
    // return `This action removes a #${id} todo`
  }
}
