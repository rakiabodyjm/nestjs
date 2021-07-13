import { Field, InputType, Int } from '@nestjs/graphql'
import { IsAlpha, Max, MaxLength, Min, MinLength } from 'class-validator'

@InputType()
export class CreatePetInput {
  @IsAlpha()
  @MinLength(3)
  @MaxLength(24)
  @Field()
  name: string

  @Field()
  type?: string

  @Field((type) => Int)
  ownerId: number
}
