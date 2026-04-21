import z from 'zod';
import mockData from '../../mock.json'; // needs "resolveJsonModule": true in tsconfig

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
  return ImportedBmecat.array().parse(
    mockData.bmecatFiles.map(({ id, supplier, gtin, name, manufacturer, status }) => ({
      id,
      supplier,
      gtin,
      name,
      manufacturer,
      status,
    }))
  );
}
