import { MigrationInterface, QueryRunner } from "typeorm"

export class createTableImportItemOrders1652189515763 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        `CREATE TABLE import_item_orders (
          id SERIAL PRIMARY KEY NOT NULL,
          upload_id VARCHAR(256) NOT NULL,
          status VARCHAR(10) NOT NULL,
          order_number INT NOT NULL,
          created_at TIMESTAMP DEFAULT NOW(),
          updated_at TIMESTAMP DEFAULT NOW()
        );`
      );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
      await queryRunner.query(
        `DROP TABLE IF EXISTS import_item_orders`
      );
    }

}
