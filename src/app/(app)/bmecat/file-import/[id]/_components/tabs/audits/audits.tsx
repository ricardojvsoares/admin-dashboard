'use server';

import { getBmecatAudits } from '@/lib/api/bmecat/file-import/get-bmecat-audits';
import BmecatAuditsUI from './audits-ui';

export default async function BmecatAudits({ id }: { id: string }) {
  const data = await getBmecatAudits(id);

  return <BmecatAuditsUI data={data} />;
}
