import { IsDateString, IsNotEmpty, IsEmail  } from "class-validator";

export class CreatePacienteDto {
    id: number;
    Nombre: string;
    Apellido: string;
    N_documento: string;
    Telefono: string;
    @IsEmail()
    Correo: string;
    @IsDateString()
    Fecha: string;
    Hora: string;
    @IsNotEmpty()
    Nombre_doctor: string;
}
