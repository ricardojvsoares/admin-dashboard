'use server';

import { getBmecatAudits } from '@/lib/api/bmecat/file-import/get-bmecat-audits';
import BmecatAuditsUI from './audits-ui';

export default async function BmecatAudits() {
  const data = await getBmecatAudits();

  return <BmecatAuditsUI data={data} />;
}
