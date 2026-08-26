import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1787778587900 implements MigrationInterface {
    name = 'CreateUsersTable1787778587900'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" ADD "prueba2" character varying(255)`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" DROP COLUMN "prueba2"`);
    }

}
