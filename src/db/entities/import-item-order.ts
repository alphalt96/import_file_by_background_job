import { Entity, Column, PrimaryColumn, UpdateDateColumn, CreateDateColumn } from 'typeorm';
import { ImportItemStatus } from '../../shared/constraint';

@Entity('import_item_orders')
export class ImportItemOrder {
  @PrimaryColumn()
  id: number;

  @Column({ name: 'upload_id' })
  uploadId: string;

  @Column()
  status: ImportItemStatus;

  @Column({ name: 'order_number' })
  orderNumber: number;

  @Column({ name: 'created_at' })
  createdAt: Date;

  @Column({ name: 'updated_at' })
  updatedAt: Date;
}
