import { DataSource, Repository } from 'typeorm';
import { ImportItemOrder } from '../../db/entities/import-item-order';
import { Item } from '../../db/entities/item';
import { ImportItemStatus } from '../../shared/constraint';

export class ItemDataSource {
  itemRepository: Repository<Item>;
  // import item order repository
  iIORepository: Repository<ImportItemOrder>

  constructor(
    readonly db: DataSource
  ) {
    this.itemRepository = this.db.getRepository(Item);
    this.iIORepository = this.db.getRepository(ImportItemOrder);
  }

  async createItem(): Promise<Item> {
    return {} as any
  }

  async createImportItemOrder(uploadId: string): Promise<ImportItemOrder> {
    const newImportOrder = new ImportItemOrder();
    newImportOrder.status = ImportItemStatus.Pending;
    newImportOrder.orderNumber = 1; // temporary
    newImportOrder.uploadId = uploadId;

    const createdOrder = await this.iIORepository.save(newImportOrder);
    return createdOrder;
  }
}