import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { personas } from 'src/entity/personas';
import { Repository, ILike } from 'typeorm';

@Injectable()
export class PersonasService {
    constructor(
        @InjectRepository(personas)
        private readonly personasRepository: Repository<personas>,
      ) { }

      async findAll(): Promise<personas[]> {
        return this.personasRepository.find();
      }

      async findOne(id: string): Promise<personas> {
        return this.personasRepository.findOne({ where: { id: id } });
      }

      async create(personas: personas): Promise<personas> {
        return this.personasRepository.save(personas);
      }
    
      async update(id: string, personas: personas): Promise<personas> {
        await this.personasRepository.update(id, personas);
        return this.personasRepository.findOne({ where: { id: id } });
      }
    
      async delete(id: string): Promise<personas> {
       const personasEliminado = this.personasRepository.findOne({ where: { id: id } });
        await this.personasRepository.delete(id);
        return personasEliminado;
      }
}
