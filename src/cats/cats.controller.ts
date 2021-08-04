import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
  Res,
  Query,
  Ip,
  Session,
  HostParam,
  HttpCode,
  Header,
  HttpStatus,
  Injectable,
} from '@nestjs/common'
import { Request, Response } from 'express'
import { Cat } from 'src/cats/intefaces/cat.interface'
import { CatsService } from './cats.service'
import { CreateCatDto } from './dto/create-cat.dto'
import { UpdateCatDto } from './dto/update-cat.dto'
import { ValidationPipe } from '../validation/validation.pipe'

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(
    /**
     * Exclusive validation can be used with new ValidationPipe() inside @Body() decorator
     */
    @Body(new ValidationPipe())
    createCatDto: CreateCatDto,
  ) {
    const added = this.catsService.create(createCatDto)
    return {
      success: 'Cat Added',
      added,
    }
    // return this.catsService.create(createCatDto)
  }

  @Get()
  findAll() {
    return this.catsService.findAll()
  }

  @Get('cats-express')
  @HttpCode(200)
  @Header('Hello-World', 'hi')
  getPussiesWithExpress(
    @Req() req: Request,
    @Res() response: Response,
    @Query() query,
  ) {
    console.log(query)
    response.status(200).send(this.catsService.getPussies())
  }

  @Get('cats-hybrid')
  @Header('Content-Type', 'text/html')
  getPussiesWithExpressAndNest(@Res({ passthrough: true }) res: Response) {
    return `<h3 style="font-family: sans-serif;">Hello World</h3>`
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.catsService.findOne(id)
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
    return this.catsService.update(id, updateCatDto)
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.catsService.remove(+id)
  }

  @Get('cats')
  getPussies(@Req() req: Request, @Res() response: Response): Cat[] {
    response.status(200).send(this.catsService.getPussies())
    return this.catsService.getPussies()
  }

  @Post('cat')
  addPussyWithExpress(@Res() res: Response) {
    res.status(HttpStatus.CREATED).send({
      success: 'Added new cat',
    })
  }
}
