import { MigrationInterface, QueryRunner } from "typeorm";

export class CreateUsersTable1787784818606 implements MigrationInterface {
    name = 'CreateUsersTable1787784818606'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "prueba2" TO "prueba3"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "users" RENAME COLUMN "prueba3" TO "prueba2"`);
    }

}
