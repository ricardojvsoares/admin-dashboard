'use client';

import { ColumnDef } from '@tanstack/react-table';

export type ImportedBmecat = {
  id: string;
  supplier: string;
  gtin: string;
  name: string;
  manufacturer: string;
  status: 'pending' | 'processing' | 'success' | 'failed';
};

export const columns: ColumnDef<ImportedBmecat>[] = [
  {
    accessorKey: 'id',
    header: 'ID',
  },
  {
    accessorKey: 'name',
    header: 'Name',
  },
  {
    accessorKey: 'status',
    header: 'Status',
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
    accessorKey: 'supplier',
    header: 'Supplier',
  },
];
