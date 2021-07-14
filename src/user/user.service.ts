import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { User } from 'src/user/entities/user.entity'
import { Repository } from 'typeorm'
import { CreateUserInput } from './dto/create-user.input'
import { UpdateUserInput } from './dto/update-user.input'

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}
  create(createUserInput: CreateUserInput) {
    const newUser = this.userRepository.create(createUserInput)
    return this.userRepository.save(newUser)
    // return 'This action adds a new user'
  }

  findAll() {
    return this.userRepository.find({
      relations: ['todos'],
    })
    // return `This action returns all user`
  }

  findOne(id: number) {
    return this.userRepository.findOneOrFail(id, { relations: ['todos'] })
    // return `This action returns a #${id} user`
  }

  async update(id: number, updateUserInput: UpdateUserInput) {
    const tobeUpdated = await this.userRepository.findOneOrFail(id, {
      relations: ['todos'],
    })

    return this.userRepository.save({
      ...tobeUpdated,
      ...updateUserInput,
      id,
    })

    // return this.userRepository.findOneOrFail(id, {
    //   relations: ['todos'],
    // })
    // return `This action updates a #${id} user`
  }
  async findByName(name: string) {
    const returnValue = await this.userRepository.findOne({
      name,
    })
    return returnValue
  }
  async remove(id: number) {
    try {
      const user = await this.userRepository.findOneOrFail(id)
      this.userRepository.remove(user)
      return `User ID: ${id} removed`
    } catch (err) {
      return err.message
    }

    // return `This action removes a #${id} user`
  }
}
