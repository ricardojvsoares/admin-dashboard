'use client';

import { type Table } from '@tanstack/react-table';
import { Check, Settings2 } from 'lucide-react';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export function DataTableColumnToggle<TData>({ table }: { table: Table<TData> }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="sm" className="ml-auto hidden h-8 lg:flex">
          <Settings2 />
          View
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-37.5">
        <DropdownMenuLabel>Toggle columns</DropdownMenuLabel>
        <DropdownMenuSeparator />
        {table
          .getAllColumns()
          .filter((column) => column.getCanHide())
          .map((column) => {
            const isVisible = column.getIsVisible();
            return (
              <DropdownMenuItem
                key={column.id}
                className="flex items-center justify-between capitalize"
                onSelect={(event) => {
                  event.preventDefault();
                  column.toggleVisibility(!isVisible);
                }}
              >
                <span>{column.id}</span>
                {isVisible ? <Check className="size-4" /> : null}
              </DropdownMenuItem>
            );
          })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
