import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { CreatePetInput } from 'src/pets/dto/create-pet.input'
import { Pet } from 'src/pets/pet.entity'
import { Repository } from 'typeorm'

@Injectable()
export class PetsService {
  constructor(@InjectRepository(Pet) private petsRepostiory: Repository<Pet>) {}

  createPet(createPetInput: CreatePetInput): Promise<Pet> {
    const newPet = this.petsRepostiory.create(createPetInput) // newPet = new Pet(); new.name = input.name

    return this.petsRepostiory.save(newPet) //insert
  }
  async findAll(): Promise<Pet[]> {
    return this.petsRepostiory.find() //SELECT * pet
  }
}
