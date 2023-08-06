import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class tareas {
    @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    @ApiProperty({ example: "1", description: 'este es el id unico de la persona se autogenera' })
    id: string;

    @Column()
    @ApiProperty({ example: "Mantenimiento al carro", description: 'Descripcion de la tarea' })
    tareas: string;

   
}
