import z from 'zod';

const ImportedBmecat = z.object({
  id: z.string(),
  supplier: z.string(),
  gtin: z.string(),
  name: z.string(),
  manufacturer: z.string(),
  status: z.enum(['pending', 'processing', 'success', 'failed']),
});

export type ImportedBmecat = z.infer<typeof ImportedBmecat>;

export async function getBmecatFiles(): Promise<ImportedBmecat[]> {
  return ImportedBmecat.array().parse([
    {
      id: '728ed52f',
      supplier: 'Supplier A',
      gtin: '1234567890123',
      name: 'Product A',
      manufacturer: 'Manufacturer A',
      status: 'pending',
    },
    {
      id: 'a1b2c3d4',
      supplier: 'Global Logistics Corp',
      gtin: '5012345678901',
      name: 'Wireless Ergonomic Mouse',
      manufacturer: 'TechFlow Systems',
      status: 'pending',
    },
    {
      id: 'f9e8d7c6',
      supplier: 'North Star Wholesale',
      gtin: '0087654321098',
      name: 'Industrial Grade Steel Bolts',
      manufacturer: 'ForgeMaster Industries',
      status: 'success',
    },
    {
      id: '33bba11c',
      supplier: 'EcoTrade Solutions',
      gtin: '7654321098765',
      name: 'Biodegradable Packaging Tape',
      manufacturer: 'GreenWrap Co.',
      status: 'pending',
    },
    {
      id: '99aabb22',
      supplier: 'Supplier B',
      gtin: '4455667788990',
      name: 'High-Speed HDMI Cable (2m)',
      manufacturer: 'Manufacturer B',
      status: 'processing',
    },
  ]);
}
