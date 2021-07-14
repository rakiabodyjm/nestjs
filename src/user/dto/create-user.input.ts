import { InputType, Int, Field } from '@nestjs/graphql'
import { IsAlpha, MaxLength, MinLength } from 'class-validator'

@InputType()
export class CreateUserInput {
  // @Field(() => Int, { description: 'Example field (placeholder)' })
  // exampleField: number;
  @IsAlpha()
  @MinLength(3)
  @MaxLength(24)
  @Field()
  name: string
}
