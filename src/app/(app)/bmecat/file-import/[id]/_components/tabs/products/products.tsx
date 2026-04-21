'use server';

import { getBmecatProducts } from '@/lib/api/bmecat/file-import/get-bmecat-products';
import BmecatProductsUI from './products-ui';

export default async function BmecatProducts({ id }: { id: string }) {
  const data = await getBmecatProducts(id);
  return <BmecatProductsUI data={data} />;
}
