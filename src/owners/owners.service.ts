import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Owner } from 'src/owners/entities/owner.entity'
import { Repository, getConnection } from 'typeorm'
import { CreateOwnerInput } from './dto/create-owner.input'
import { UpdateOwnerInput } from './dto/update-owner.input'

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner) private ownerRepository: Repository<Owner>,
  ) {}

  create(createOwnerInput: CreateOwnerInput) {
    const newOwner = this.ownerRepository.create(createOwnerInput)
    return this.ownerRepository.save(newOwner)
  }

  findAll() {
    /**
     * To include relationship, use this option
     */
    return this.ownerRepository.find({ relations: ['pets'] })
  }

  findOne(id: number) {
    // return `This action returns a #${id} owner`
    const returnable = this.ownerRepository.findOneOrFail(id)
    return returnable
  }

  async update(id: number, updateOwnerInput: UpdateOwnerInput) {
    // return `This action updates a #${id} owner`
    // const toBeUpdated = await this.ownerRepository.findOneOrFail()
    // Object.entries(updateOwnerInput).forEach(
    //   ([key, value]) => (toBeUpdated[key] = value),
    // )

    await getConnection()
      .createQueryBuilder()
      .update(Owner)
      .set(updateOwnerInput)
      .where('id = :id', { id })
      .execute()
  }

  remove(id: number) {
    return `This action removes a #${id} owner`
  }
}
