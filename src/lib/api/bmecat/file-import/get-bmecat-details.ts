import { findFile } from '@/lib/find-file';
import z from 'zod';

const dateSchema = z.iso.datetime();
const BmecatDetails = z.object({
  id: z.string(),
  supplierPid: z.string(),
  name: z.string(),
  gtin: z.string(),
  manufacturer: z.string(),
  totalProducts: z.number(),
  validProducts: z.number(),
  invalidProducts: z.number(),
  totalFeatures: z.number(),
  validFeatures: z.number(),
  invalidFeatures: z.number(),
  createdBy: z.number(),
  createdAt: dateSchema,
  updatedBy: z.number(),
  updatedAt: dateSchema,
});

export type BmecatDetails = z.infer<typeof BmecatDetails>;

export async function getBmecatDetails(fileId: string): Promise<BmecatDetails> {
  const file = findFile(fileId);
  return BmecatDetails.parse({
    id: file.id,
    name: file.name,
    gtin: file.gtin,
    manufacturer: file.manufacturer,
    ...file.details,
  });
}
