import { Injectable } from '@nestjs/common';
import { CreatePacienteDto } from "./dto/CreatePacienteDto";
import { UpdatePacienteDto } from './dto/update-paciente.dto';
import { Pacientes } from './entities/paciente.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class PacientesService {

  constructor(
    @InjectRepository(Pacientes)
    private readonly pacientesRepository: Repository<Pacientes>
   ) {}

  //  create(createPacienteDto: CreatePacienteDto) {
  //   console.log(createPacienteDto);//para saber que esta llegando
  //   return 'hola';
  // }
  // create(createPacienteDto: CreatePacienteDto) {
  //   return 'This action adds a new paciente';
  // }
  async create(createPacienteDto: CreatePacienteDto) {
    const createPaciente = await this.pacientesRepository.create(createPacienteDto);
    return await this.pacientesRepository.save(createPaciente);    

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
