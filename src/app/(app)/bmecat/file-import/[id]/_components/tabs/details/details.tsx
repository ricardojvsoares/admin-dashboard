'use server';

import { getBmecatDetails } from '@/lib/api/bmecat/file-import/get-bmecat-details';
import BmecatDetailsUI from './details-ui';

export default async function BmecatDetails({ id }: { id: string }) {
  const data = await getBmecatDetails(id);
  return <BmecatDetailsUI data={data} />;
}
