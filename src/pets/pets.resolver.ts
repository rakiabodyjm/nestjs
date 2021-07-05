import { Args, Mutation, Query, Resolver } from '@nestjs/graphql'
import { CreatePetInput } from 'src/pets/dto/create-pet.input'
import { Pet } from 'src/pets/pet.entity'
import { PetsService } from 'src/pets/pets.service'

@Resolver((of) => Pet)
export class PetsResolver {
  constructor(private petsService: PetsService) {}

  @Query((returns) => [Pet])
  pets(): Promise<Pet[]> {
    return this.petsService.findAll()
  }

  @Mutation((returns) => Pet)
  createPet(
    @Args('createPetInput') createPetInput: CreatePetInput,
  ): Promise<Pet> {
    return this.petsService.createPet(createPetInput)
  }
}
