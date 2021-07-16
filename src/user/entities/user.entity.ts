import { ObjectType, Field, Int } from '@nestjs/graphql'
import { Todo } from 'src/todo/entities/todo.entity'
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm'

@Entity()
@ObjectType()
export class User {
  @PrimaryGeneratedColumn()
  @Field((type) => Int)
  id: number

  @Column()
  @Field()
  name: string

  @OneToMany(() => Todo, (todo) => todo.user)
  @Field(() => [Todo])
  todos: Todo[]
}
