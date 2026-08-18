import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1787088746274 implements MigrationInterface {
    name = 'CreateUsersTable1787088746274'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "prueba1" character varying(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "prueba1"`);
    }

}
