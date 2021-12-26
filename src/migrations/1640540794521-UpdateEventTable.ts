import { MigrationInterface, QueryRunner } from 'typeorm';

export class UpdateEventTable1640540794521 implements MigrationInterface {
  name = 'UpdateEventTable1640540794521';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."IDX_b535fbe8ec6d832dde22065ebd"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_6e1de41532ad6af403d3ceb4f2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "event" RENAME COLUMN "name" TO "title"`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_4ccd63876554023ce6a4e863c2" ON "event" ("title") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_a49e6708f0931e6bdb960a8e88" ON "event" ("title", "type") `,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP INDEX "public"."IDX_a49e6708f0931e6bdb960a8e88"`,
    );
    await queryRunner.query(
      `DROP INDEX "public"."IDX_4ccd63876554023ce6a4e863c2"`,
    );
    await queryRunner.query(
      `ALTER TABLE "event" RENAME COLUMN "title" TO "name"`,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_6e1de41532ad6af403d3ceb4f2" ON "event" ("type", "name") `,
    );
    await queryRunner.query(
      `CREATE INDEX "IDX_b535fbe8ec6d832dde22065ebd" ON "event" ("name") `,
    );
  }
}
