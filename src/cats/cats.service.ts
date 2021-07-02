import { Injectable } from '@nestjs/common'
// import { Cat } from 'src/cats/entities/cat.entity'
import { Cat } from './intefaces/cat.interface'
import { CreateCatDto } from './dto/create-cat.dto'
import { UpdateCatDto } from './dto/update-cat.dto'

export class CatsService {
  // private readonly cats: Cat[] = []
  private cats: Cat[] = []
  create(cat: CreateCatDto) {
    const initCat = {
      id: (this.cats.length ||= 0).toString(),
      ...cat,
    }
    console.log('creating cats')
    this.cats.push(initCat)
    return initCat
    // return this.cats
    // return 'This action adds a new cat'
  }

  findAll() {
    return this.cats
    // return `This action returns all cats`
  }

  findOne(id: string) {
    return this.cats.find((fi) => fi.id === id)
    // return `This action returns a #${id} cat`
  }

  update(id: string, updateCatDto: UpdateCatDto) {
    const temp = this.cats

    const newObject = { ...temp.find((ea) => ea.id === id), ...updateCatDto }

    // const index = this.cats.indexOf(newObject)
    const index = this.cats.findIndex((fi) => fi.id === id)
    temp[index] = newObject
    this.cats = temp
    return this.cats
  }

  remove(id: number) {
    return `This action removes a #${id} cat`
  }

  getPussies() {
    return this.cats
  }
}
