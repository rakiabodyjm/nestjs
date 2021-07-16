import { Field, ObjectType, Int } from '@nestjs/graphql'
import { User } from 'src/user/entities/user.entity'
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class Todo {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number

  @Column()
  @Field()
  content: string

  @Column()
  @Field()
  status: boolean

  @Column()
  @Field(() => Int)
  userId: number

  @ManyToOne(() => User, (user) => user.todos)
  @Field(() => User)
  user: User
}
