import { Module } from '@nestjs/common'
import { GraphQLModule } from '@nestjs/graphql'
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { CatsModule } from './cats/cats.module'
import { PetsModule } from './pets/pets.module'
import { OwnersModule } from './owners/owners.module'
import { Pet } from 'src/pets/pet.entity'
import { Owner } from 'src/owners/entities/owner.entity'
import { UserModule } from './user/user.module'
import { User } from 'src/user/entities/user.entity'
import { Todo } from 'src/todo/entities/todo.entity'
import { TodoModule } from 'src/todo/todo.module'
import { ServeStaticModule } from '@nestjs/serve-static'
import { join } from 'path'
@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/schema.gql'),
      path: '/api/graphql',

      // cors: {
      //   origin: ['http://localhost:3000'],
      //   credentials: true,
      // },
    }),
    /**
     * Include modules as entities here
     */
    TypeOrmModule.forRoot({
      // type: 'sqlite',
      // database: ':memory:',
      // entities: ['dist/**/*entity{.ts,.js}'],
      // synchronize: true,
      type: 'mysql',
      host: 'localhost',
      username: 'rakiabodyjm',
      password: 'rakiabodyjm4690',
      database: 'todo',
      entities: [Pet, Owner, User, Todo],
      synchronize: true,
      logging: false,
    }),
    /**
     * static serving client and excluding /api* endpoints
     */
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../dist-client'),
      exclude: ['/api*'],
    }),
    CatsModule,
    PetsModule,
    OwnersModule,
    UserModule,
    TodoModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
