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

export async function getBmecatDetails(): Promise<BmecatDetails> {
  return BmecatDetails.parse({
    id: 'uuid-002',
    supplierPid: 'SUP-4431',
    name: 'Office Supplies Q2',
    gtin: '5098765432109',
    manufacturer: 'PaperLink Inc',
    totalProducts: 45,
    validProducts: 45,
    invalidProducts: 0,
    totalFeatures: 300,
    validFeatures: 300,
    invalidFeatures: 0,
    createdBy: 204,
    createdAt: '2026-03-20T10:00:00Z',
    updatedBy: 205,
    updatedAt: '2026-03-22T09:15:00Z',
  });
}
