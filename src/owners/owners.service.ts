import { forwardRef, Inject, Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'

import { Owner } from 'src/owners/entities/owner.entity'
import { PetsService } from 'src/pets/pets.service'
import { Repository, getConnection } from 'typeorm'
import { CreateOwnerInput } from './dto/create-owner.input'
import { UpdateOwnerInput } from './dto/update-owner.input'

@Injectable()
export class OwnersService {
  constructor(
    @InjectRepository(Owner) private ownerRepository: Repository<Owner>,
    @Inject(forwardRef(() => PetsService)) private petsService: PetsService,
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
    const returnable = this.ownerRepository.findOneOrFail(id, {
      relations: ['pets'],
    })
    return returnable
  }

  async update(id: number, updateOwnerInput: UpdateOwnerInput) {
    await this.ownerRepository.save({
      ...updateOwnerInput,
      id,
    })
    const returner = await this.ownerRepository.findOneOrFail(id, {
      relations: ['pets'],
    })
    return returner
  }

  remove(id: number) {
    this.petsService.removeAllByOwnerId(id)

    const success = this.ownerRepository.delete(id)
    return `Successfully removed ${id}`
    // return `this removes ${id} owner`
  }
}
