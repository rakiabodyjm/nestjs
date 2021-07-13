import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Owner } from 'src/owners/entities/owner.entity'
import { OwnersService } from 'src/owners/owners.service'
import { CreatePetInput } from 'src/pets/dto/create-pet.input'
import { Pet } from 'src/pets/pet.entity'
import { Repository } from 'typeorm'

@Injectable()
export class PetsService {
  constructor(
    @InjectRepository(Pet) private petsRepository: Repository<Pet>,
    private ownersService: OwnersService,
  ) {}

  async createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petsRepository.create(createPetInput) // newPet = new Pet(); new.name = input.name

    return this.petsRepository.save(newPet) //insert
  }
  async findAll(): Promise<Pet[]> {
    return this.petsRepository.find() //SELECT * pet
  }
  findOne(id: number): Promise<Pet> {
    return this.petsRepository.findOneOrFail(id)
  }

  getOwner(ownerId: number): Promise<Owner> {
    return this.ownersService.findOne(ownerId)
  }
}
