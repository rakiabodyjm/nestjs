import { CreateUserInput } from './create-user.input'
import { InputType, Field, Int, PartialType } from '@nestjs/graphql'
import { IsAlpha, Max, Min } from 'class-validator'

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Int)
  id?: number

  @Field()
  name?: string
}
