import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({
    example: 'José',
    description: 'Nombre del usuario',
  })
  name!: string;

  @ApiProperty({
    example: 'jose@gmail.com',
    description: 'Correo electrónico del usuario',
  })
  email!: string;

  @ApiProperty({
    example: '123456',
    description: 'Contraseña del usuario',
  })
  password!: string;

  @ApiProperty({
    example: true,
    description: 'Indica si el usuario está activo',
    required: false,
  })
  isActive?: boolean;

   @ApiProperty({
    example: 'Hola',
    description: 'Estado de ánimo',
  })
  prueba3?: string;
}