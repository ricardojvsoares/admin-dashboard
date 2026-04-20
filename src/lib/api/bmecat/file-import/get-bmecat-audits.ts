import z from 'zod';

const dateSchema = z.iso.datetime();
const BmecatAudits = z.object({
  id: z.string(),
  oldValue: z.string(),
  newValue: z.string(),
  createdBy: z.number(),
  createdAt: dateSchema,
});

export type BmecatAudits = z.infer<typeof BmecatAudits>;

export async function getBmecatAudits(): Promise<BmecatAudits[]> {
  return BmecatAudits.array().parse([
    {
      id: '728ed52f',
      oldValue: 'Supplier A',
      newValue: 'Supplier B',
      createdBy: 1,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'a1b2c3d4',
      oldValue: 'Global Logistics Corp',
      newValue: 'TechFlow Systems',
      createdBy: 2,
      createdAt: new Date().toISOString(),
    },
    {
      id: 'f9e8d7c6',
      oldValue: 'North Star Wholesale',
      newValue: 'ForgeMaster Industries',
      createdBy: 3,
      createdAt: new Date().toISOString(),
    },
    {
      id: '33bba11c',
      oldValue: 'EcoTrade Solutions',
      newValue: 'GreenWrap Co.',
      createdBy: 3,
      createdAt: new Date().toISOString(),
    },
    {
      id: '99aabb22',
      oldValue: 'Supplier B',
      newValue: 'Supplier C',
      createdBy: 1,
      createdAt: new Date().toISOString(),
    },
  ]);
}
