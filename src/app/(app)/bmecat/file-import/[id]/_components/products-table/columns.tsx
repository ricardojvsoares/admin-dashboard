'use client';

import { BmecatProduct } from '@/lib/api/bmecat/file-import/get-bmecat-products';
import { ColumnDef } from '@tanstack/react-table';

export const columns: ColumnDef<BmecatProduct>[] = [
  {
    accessorKey: 'supplierPid',
    header: 'Supplier PID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'gtin',
    header: 'GTIN',
  },
  {
    accessorKey: 'manufacturer',
    header: 'Manufacturer',
  },

  {
    accessorKey: 'status',
    header: 'Status',
  },
  {
    accessorKey: 'errorCount',
    header: 'Error Count',
  },
];
