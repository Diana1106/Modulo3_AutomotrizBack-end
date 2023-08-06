import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { personas } from 'src/entity/personas';
import { PersonasService } from 'src/service/personas.service';


@ApiTags('personas')
@Controller('personas')
export class PersonasController {
    constructor(private readonly personaService: PersonasService) { }

    @Get()
    @ApiOperation({ summary: 'Obtener todas las personas' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 200, description: 'Ok.', type: personas })
    async findAll(): Promise<personas[]> {
        return this.personaService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtiene una persona' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 200, description: 'Ok.', type: personas })
    async findOne(@Param('id') id: string): Promise<personas> {
        return this.personaService.findOne(id);
    }

    @Post()
    @ApiOperation({ summary: 'Guardar persona' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 201, description: 'Creado.', type: personas })
    async create(@Body() personas: personas): Promise<personas> {
        return this.personaService.create(personas);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Actualizar persona' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 202, description: 'Aceptado.', type: personas })
    async update(@Param('id') id: string, @Body() personas: personas): Promise<personas> {
        return this.personaService.update(id, personas);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Eliminar persona' })
    @ApiResponse({ status: 403, description: 'No encontrado..' })
    @ApiResponse({ status: 500, description: 'Error de servidor.' })
    @ApiResponse({ status: 401, description: 'No authorizado' })
    @ApiResponse({ status: 200, description: 'Ok.', type: personas })
    async delete(@Param('id') id: string): Promise<personas> {
        return this.personaService.delete(id);
    }
}
