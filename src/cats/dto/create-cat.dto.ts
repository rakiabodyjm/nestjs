// import { Cat } from 'src/cats/entities/cat.entity'

import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
} from 'class-validator'

export type CatBreedTypes = 'main-coon' | 'persian'

export const CatBreedsType: CatBreedTypes[] = ['main-coon', 'persian']
export class CreateCatDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsNumber()
  age: number

  @IsNotEmpty()
  @IsEnum(CatBreedsType)
  breed: 'maine-coon' | 'persian'
}
