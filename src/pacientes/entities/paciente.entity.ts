import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";


@Entity()

export class Pacientes {
    
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

