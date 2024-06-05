import { Injectable, NotFoundException } from '@nestjs/common';
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
// MOSTRAR TODO
  // findAll() {
    async findAll(): Promise<Pacientes[]> {
    
      return await this.pacientesRepository.find();
    // return `This action returns all pacientes`;
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} paciente`;
  // }
  async findOne(id: number): Promise<Pacientes> {
    const pacientesId = await this.pacientesRepository.findOneBy({id});

      if(!pacientesId) throw new NotFoundException('Paciente no encontrado con ese ID');
      return pacientesId;

  }

  async update(id: number, updatePacienteDto: UpdatePacienteDto) {
    const getPaciente = await this.pacientesRepository.findOne({
      where: {
        id
     }
    })
       
      if(!getPaciente) throw new NotFoundException('Paciente no encontrado con ese ID');
       
      const updatePaciente = await Object.assign(getPaciente, updatePacienteDto);
      return  await this.pacientesRepository.save(updatePaciente);
       //return `This action updates a #${id} video`;
  }


  // update(id: number, updatePacienteDto: UpdatePacienteDto) {
  //   console.log(updatePacienteDto);
  //   return `This action updates a #${id} paciente`;
  // }

  async remove(id: number) {
    return await this.pacientesRepository.delete(id);
  }

}
