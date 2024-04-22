import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class Pacientes {
    // id:            number;
    // Nombre:        string;
    // Apellido:      string;
    // N_documento:   string;
    // Telefono:      string;
    // Correo:        string;
    // Fecha:         Date;
    // Hora:          string;
    // Nombre_doctor: string;
    @PrimaryGeneratedColumn()
  id: number;
  @Column({ type: 'varchar', length: 50 })
  Nombre: string;
  @Column()
  Apellido: string;
  @Column()
  N_documento: string;
  @Column()
  Telefono: string;
  @Column()
  Correo: string;
  @Column()
  Fecha: Date;
  @Column()
  Hora: string;  
  @Column()
  Nombre_doctor: string;

  @CreateDateColumn({ type: 'timestamp' })
  createdAt: Date;
}

