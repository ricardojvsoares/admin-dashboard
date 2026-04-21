import { findFile } from '@/lib/find-file';
import z from 'zod';

const dateSchema = z.iso.datetime();
const BmecatAudits = z.object({
  id: z.string(),
  oldValue: z.string(),
  newValue: z.string(),
  createdBy: z.number(),
  createdAt: dateSchema,
});

export type BmecatAudit = z.infer<typeof BmecatAudits>;

export async function getBmecatAudits(fileId: string): Promise<BmecatAudit[]> {
  return findFile(fileId).audits;
}
