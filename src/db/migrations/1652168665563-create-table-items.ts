import { MigrationInterface, QueryRunner } from "typeorm"

export class createTableItems1652168665563 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE items (
        id SERIAL PRIMARY KEY NOT NULL,
        title VARCHAR(64) NOT NULL,
        description TEXT,
        image_id VARCHAR(256),
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW() 
      );`
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `DROP TABLE IF EXISTS items`
    );
  }

}
