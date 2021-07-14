import { InputType, Int, Field } from '@nestjs/graphql'
import { IsAlpha, IsAlphanumeric, MaxLength, MinLength } from 'class-validator'
import { User } from 'src/user/entities/user.entity'

@InputType()
export class CreateTodoInput {
  @MinLength(3)
  @MaxLength(500)
  @Field()
  content: string

  @Field(() => Int, { nullable: false })
  userId: number
}
