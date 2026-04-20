'use server';

import { getBmecatDetails } from '@/lib/api/bmecat/file-import/get-bmecat-details';
import BmecatDetailsUI from './details-ui';

export default async function BmecatDetails() {
  const data = await getBmecatDetails();
  return <BmecatDetailsUI data={data} />;
}
