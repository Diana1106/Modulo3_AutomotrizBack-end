import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { tareas } from 'src/entity/tareas';
import { Repository, ILike } from 'typeorm';

@Injectable()
export class TareasService {

    constructor(
        @InjectRepository(tareas)
        private readonly tareasRepository: Repository<tareas>,
      ) { }

      async findAll(): Promise<tareas[]> {
        return this.tareasRepository.find();
      }

      async findOne(id: string): Promise<tareas> {
        return this.tareasRepository.findOne({ where: { id: id } });
      }

      async create(tareas: tareas): Promise<tareas> {
        return this.tareasRepository.save(tareas);
      }
    
      async update(id: string, clientes: tareas): Promise<tareas> {
        await this.tareasRepository.update(id, clientes);
        return this.tareasRepository.findOne({ where: { id: id } });
      }
    
      async delete(id: string): Promise<tareas> {
       const tareasEliminado = this.tareasRepository.findOne({ where: { id: id } });
        await this.tareasRepository.delete(id);
        return tareasEliminado;
      }

}
