import { CreateOwnerInput } from './create-owner.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'
import { Pet } from 'src/pets/pet.entity'
import { OneToMany } from 'typeorm'

@InputType()
export class UpdateOwnerInput extends PartialType(CreateOwnerInput) {
  @Field(() => Int)
  id?: number

  @Field()
  name?: string

  @Field(() => [Int])
  pets?: Pet[]
}
