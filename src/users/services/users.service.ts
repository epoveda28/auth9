import {
  Injectable,
  NotFoundException,
} from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dtos/create-user.dto';
import { UpdateUserDto } from '../dtos/update-user.dto';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  // ==========================================
  // GET - Obtener todos los usuarios
  // ==========================================

  async findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  // ==========================================
  // POST - Crear un usuario
  // ==========================================

  async create(createUserDto: CreateUserDto): Promise<User> {
    const user = this.usersRepository.create({
      name: createUserDto.name,
      email: createUserDto.email,
      password: createUserDto.password,
      isActive: createUserDto.isActive ?? true,
      prueba3: createUserDto.prueba3
    });

    return this.usersRepository.save(user);
  }

  // ==========================================
  // PUT - Actualizar un usuario
  // ==========================================

  async update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> {
    const user = await this.usersRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(
        'Usuario no encontrado',
      );
    }

    Object.assign(user, updateUserDto);

    return this.usersRepository.save(user);
  }

  // ==========================================
  // DELETE - Eliminar un usuario
  // ==========================================

  async remove(id: string): Promise<void> {
    const user = await this.usersRepository.findOne({
      where: { id },
    });

    if (!user) {
      throw new NotFoundException(
        'Usuario no encontrado',
      );
    }

    await this.usersRepository.remove(user);
  }
}