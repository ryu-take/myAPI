import {MigrationInterface, QueryRunner} from "typeorm";

export class first1606117086291 implements MigrationInterface {
    name = 'first1606117086291'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "terms" ("id" SERIAL NOT NULL, "term" character varying NOT NULL, "meaning" character varying NOT NULL, CONSTRAINT "PK_33b6fe77d6ace7ff43cc8a65958" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "terms"`);
    }

}
