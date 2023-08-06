import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { detalles } from 'src/entity/detalles';
import { personas } from 'src/entity/personas';
import { tareas } from 'src/entity/tareas';
import { Repository } from 'typeorm';

@Injectable()
export class DetallesService {
    constructor(
        @InjectRepository(detalles)
        private readonly detallesRepository: Repository<detalles>,
        @InjectRepository(personas)
        private readonly personasRepository: Repository<personas>,
        @InjectRepository(tareas)
        private readonly tareasRepository: Repository<tareas>,
    ) { }

    async findAll(): Promise<any[]> {
        const detalles = await this.detallesRepository.find();
        const detalleslst = [];
      
        for (const e of detalles) {
          const personas = await this.personasRepository.findOne({ where: { id: e.personas.toString()} });
          const tareas = await this.tareasRepository.findOne({ where: { id: e.tareas.toString()} });
      
          detalleslst.push({ id: e.id,personas: personas,tareas: tareas });
        }
      
        return detalleslst;
      }
      

    async create(detalleData: detalles): Promise<detalles> {
        const nuevoDetalle = new detalles();

        const personas = await this.personasRepository.findOne({ where: { id: detalleData.personas.toString() } });
        const tareas = await this.tareasRepository.findOne({ where: { id: detalleData.tareas.toString() } });
        const detalle = await this.detallesRepository.findOne({
            where: {
                personas: detalleData.personas,
                tareas: detalleData.tareas
            }
        });

        if (personas == null || tareas == null) {
            console.log("no existe esos valores");
            return null;
        } else if (detalle != null) {
            console.log("ya existe esos valores");
            return null;
        } else {
            nuevoDetalle.personas = detalleData.personas;
            nuevoDetalle.tareas = detalleData.tareas;
            return this.detallesRepository.save(nuevoDetalle);
        }
    }

    async delete(id: string): Promise<detalles> {
        const detallesEliminado = this.detallesRepository.findOne({ where: { id: id } });
         await this.detallesRepository.delete(id);
         return detallesEliminado;
       }
}
