import { PartialType } from '@nestjs/mapped-types';
import { CreatePacienteDto } from "./CreatePacienteDto";

export class UpdatePacienteDto extends PartialType(CreatePacienteDto) {}
