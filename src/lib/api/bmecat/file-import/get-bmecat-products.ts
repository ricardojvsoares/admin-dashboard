import { findFile } from '@/lib/find-file';
import z from 'zod';

const BmecatProduct = z.object({
  id: z.string(),
  supplierPid: z.string(),
  name: z.string(),
  gtin: z.string(),
  manufacturer: z.string(),
  status: z
    .enum(['pending', 'processing', 'success', 'failed', 'published', 'error'])
    .default('pending'),
  errorCount: z.number().default(0),
});

export type BmecatProduct = z.infer<typeof BmecatProduct>;

export async function getBmecatProducts(fileId: string): Promise<BmecatProduct[]> {
  return findFile(fileId).products as BmecatProduct[];
}
