import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';

import {
  ApiOperation,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

import { UsersService } from '../services/users.service';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@ApiTags('usuarios')
@Controller('users')
export class UsersController {
  constructor(
    private readonly usersService: UsersService,
  ) {}

  // ==========================================
  // GET /users
  // ==========================================

  @Get()
  @ApiOperation({
    summary: 'Obtener todos los usuarios',
  })
  @ApiResponse({
    status: 200,
    description:
      'Lista de usuarios obtenida correctamente',
  })
  findAll() {
    return this.usersService.findAll();
  }

  // ==========================================
  // POST /users
  // ==========================================

  @Post()
  @ApiOperation({
    summary: 'Crear un nuevo usuario',
  })
  @ApiResponse({
    status: 201,
    description: 'Usuario creado correctamente',
  })
  @ApiResponse({
    status: 400,
    description: 'Datos incorrectos',
  })
  create(
    @Body() createUserDto: CreateUserDto,
  ) {
    return this.usersService.create(createUserDto);
  }

  // ==========================================
  // PUT /users/:id
  // ==========================================

  @Put(':id')
  @ApiOperation({
    summary: 'Actualizar un usuario',
  })
  @ApiResponse({
    status: 200,
    description:
      'Usuario actualizado correctamente',
  })
  @ApiResponse({
    status: 404,
    description: 'Usuario no encontrado',
  })
  update(
    @Param('id') id: string,
    @Body() updateUserDto: UpdateUserDto,
  ) {
    return this.usersService.update(
      id,
      updateUserDto,
    );
  }

  // ==========================================
  // DELETE /users/:id
  // ==========================================

  @Delete(':id')
  @ApiOperation({
    summary: 'Eliminar un usuario',
  })
  @ApiResponse({
    status: 200,
    description:
      'Usuario eliminado correctamente',
  })
  @ApiResponse({
    status: 404,
    description:
      'Usuario no encontrado',
  })
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}