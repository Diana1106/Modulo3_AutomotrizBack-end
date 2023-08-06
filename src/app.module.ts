import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { personas } from './entity/personas';
import { tareas } from './entity/tareas';
import { detalles } from './entity/detalles';
import { PersonasService } from './service/personas.service';
import { TareasService } from './service/tareas.service';
import { DetallesService } from './service/detalles.service';
import { PersonasController } from './controller/personas.controller';
import { TareasController } from './controller/tareas.controller';
import { DetallesController } from './controller/detalles.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql', // Tipo de base de datos
      host: 'localhost', // Host de la base de datos
      port: 3306, // Puerto de la base de datos
      username: 'root', // Usuario de la base de datos
      password: 'root', // Contraseña de la base de datos
      database: 'automotriz', // Nombre de la base de datos
      entities: [personas,tareas,detalles], // Entidades que serán utilizadas en el proyecto
      synchronize: true, // Sincroniza las entidades con la base de datos (en desarrollo, deshabilitar en producción)
      logging: true,
      extra: {"insecureAuth":true}
    }),
    TypeOrmModule.forFeature([personas,tareas,detalles]), // Agrega tu entidad aquí
  ],
  controllers: [AppController,PersonasController,TareasController,DetallesController],
  providers: [AppService,PersonasService,TareasService,DetallesService],
})
export class AppModule {}
