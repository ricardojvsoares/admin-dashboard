import { BmecatProduct } from '@/lib/api/bmecat/file-import/get-bmecat-products';
import { columns } from '../../products-table/columns';
import { DataTable } from '../../products-table/data-table';

export default function BmecatProductsUI({ data }: { data: BmecatProduct[] }) {
  return <DataTable columns={columns} data={data} />;
}
