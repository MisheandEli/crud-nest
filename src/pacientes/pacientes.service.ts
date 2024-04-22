import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from "./dto/CreatePacienteDto";
import { UpdatePacienteDto } from './dto/update-paciente.dto';

@Injectable()
export class PacientesService {
  create(createPacienteDto: CreatePacienteDto) {
    return 'This action adds a new paciente';
  }

  findAll() {
    return `This action returns all pacientes`;
  }

  findOne(id: number) {
    return `This action returns a #${id} paciente`;
  }

  update(id: number, updatePacienteDto: UpdatePacienteDto) {
    console.log(updatePacienteDto);
    return `This action updates a #${id} paciente`;
  }

  remove(id: number) {
    return `This action removes a #${id} paciente`;
  }
}
