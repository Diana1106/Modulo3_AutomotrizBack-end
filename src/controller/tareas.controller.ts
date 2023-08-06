import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { tareas } from 'src/entity/tareas';
import { TareasService } from 'src/service/tareas.service';

@ApiTags('tareas')
@Controller('tareas')
export class TareasController {
    constructor(private readonly tareasService: TareasService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener todas las tareas' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 200, description: 'Ok.', type: tareas })
    async findAll(): Promise<tareas[]> {
        return this.tareasService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtiene una tarea' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 200, description: 'Ok.', type: tareas })
    async findOne(@Param('id') id: string): Promise<tareas> {
        return this.tareasService.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Guardar la tarea' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 201, description: 'Creado.', type: tareas })
    async create(@Body() tareas: tareas): Promise<tareas> {
        return this.tareasService.create(tareas);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Actualiza la tarea' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 202, description: 'Aceptado.', type: tareas })
    async update(@Param('id') id: string, @Body() tareas: tareas): Promise<tareas> {
        return this.tareasService.update(id, tareas);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Elimina la tarea' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 200, description: 'Ok.', type: tareas })
    async delete(@Param('id') id: string): Promise<tareas> {
        return this.tareasService.delete(id);
    }
}
