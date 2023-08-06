import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class detalles {

    @ObjectIdColumn()
  @PrimaryGeneratedColumn()
  @ApiProperty({ example: '1', description: 'Este es el id único del detalle que se autogenera' })
  id: string;

  @Column()
  @ApiProperty({
    example: '1',
    description: 'FK_tareas: llave que conecta con tareas',
  })
  tareas: number;

  @Column()
  @ApiProperty({
    example: '1',
    description: 'FK_personas: llave que conecta con personas',
  })
  personas: number;

}
