import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class personas {

    @ObjectIdColumn()
    @PrimaryGeneratedColumn()
    @ApiProperty({ example: "1", description: 'este es el id unico de la persona se autogenera' })
    id: string;

    @Column()
    @ApiProperty({ example: "Diana Gabriela Escobar", description: 'Nombre de la persona' })
    nombre: string;

}
