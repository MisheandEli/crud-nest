import { Controller, Get, Post, Body, Patch, Param, Delete, Query, ValidationPipe, UsePipes, ParseIntPipe, Put } from '@nestjs/common';
import { PacientesService } from './pacientes.service';
import { CreatePacienteDto } from "./dto/CreatePacienteDto";
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Controller('pacientes')
@UsePipes(new ValidationPipe())
export class PacientesController {
  constructor(private readonly pacientesService: PacientesService) {}

  @Post()
  create(@Body() create: CreatePacienteDto) {
    console.log(create);
    return this.pacientesService.create(create);
  }

  @Get()
  async findAll() {
    const data = await this.pacientesService.findAll();
    return {
      message: 'Peticion Correcta',
      data: data

    } 
  // findAll(@Query() query: string) {
  //   console.log(query);
  //   return this.pacientesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.pacientesService.findOne(+id);
  }

  @Put(':id')
  update(@Param('id', ParseIntPipe) id: string, @Body() updateVideoDto: UpdatePacienteDto) {
    return this.pacientesService.update(+id, updateVideoDto);
  }


  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updatePacienteDto: UpdatePacienteDto) {
  //   return this.pacientesService.update(+id, updatePacienteDto);
  // }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.pacientesService.remove(+id);
  }

}
