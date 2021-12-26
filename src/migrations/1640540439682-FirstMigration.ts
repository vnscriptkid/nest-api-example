import { MigrationInterface, QueryRunner } from 'typeorm';

export class FirstMigration1640540439682 implements MigrationInterface {
  name = 'FirstMigration1640540439682';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "ingredient" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, CONSTRAINT "PK_6f1e945604a0b59f56a57570e98" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "coffee" ("id" SERIAL NOT NULL, "name" character varying NOT NULL, "brand" character varying NOT NULL, "recommendations" integer NOT NULL DEFAULT '0', "flavors" json, CONSTRAINT "PK_4d27239ee0b99a491ad806aec46" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "event" ("id" SERIAL NOT NULL, "type" character varying NOT NULL, "name" character varying NOT NULL, "payload" json NOT NULL, CONSTRAINT "PK_30c2f3bbaf6d34a55f8ae6e4614" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b535fbe8ec6d832dde22065ebd" ON "event" ("name") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_6e1de41532ad6af403d3ceb4f2" ON "event" ("name", "type") `,
    );
    await queryRunner.query(
      `CREATE TABLE "coffee_ingredients_ingredient" ("coffeeId" integer NOT NULL, "ingredientId" integer NOT NULL, CONSTRAINT "PK_a9e8a50687bc28bc9a402bc9dbc" PRIMARY KEY ("coffeeId", "ingredientId"))`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_5d1d09ef69a6226e3be0781e33" ON "coffee_ingredients_ingredient" ("coffeeId") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_5bc4d7bb0a92906c31f68f6bc0" ON "coffee_ingredients_ingredient" ("ingredientId") `,
    );
    await queryRunner.query(
      `ALTER TABLE "coffee_ingredients_ingredient" ADD CONSTRAINT "FK_5d1d09ef69a6226e3be0781e335" FOREIGN KEY ("coffeeId") REFERENCES "coffee"("id") ON DELETE CASCADE ON UPDATE CASCADE`,
    );
    await queryRunner.query(
      `ALTER TABLE "coffee_ingredients_ingredient" ADD CONSTRAINT "FK_5bc4d7bb0a92906c31f68f6bc02" FOREIGN KEY ("ingredientId") REFERENCES "ingredient"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "coffee_ingredients_ingredient" DROP CONSTRAINT "FK_5bc4d7bb0a92906c31f68f6bc02"`,
    );
    await queryRunner.query(
      `ALTER TABLE "coffee_ingredients_ingredient" DROP CONSTRAINT "FK_5d1d09ef69a6226e3be0781e335"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_5bc4d7bb0a92906c31f68f6bc0"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_5d1d09ef69a6226e3be0781e33"`,
    );
    await queryRunner.query(`DROP TABLE "coffee_ingredients_ingredient"`);
    await queryRunner.query(
      `DROP INDEX "public"."IDX_6e1de41532ad6af403d3ceb4f2"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_b535fbe8ec6d832dde22065ebd"`,
    );
    await queryRunner.query(`DROP TABLE "event"`);
    await queryRunner.query(`DROP TABLE "coffee"`);
    await queryRunner.query(`DROP TABLE "ingredient"`);
  }
}
