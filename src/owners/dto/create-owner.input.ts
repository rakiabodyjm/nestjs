import { InputType, Int, Field } from '@nestjs/graphql'
import { Pet } from 'src/pets/pet.entity'
import { OneToMany } from 'typeorm'

@InputType()
export class CreateOwnerInput {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;
  @Field()
  name: string
}
