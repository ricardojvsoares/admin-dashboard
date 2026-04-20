'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { Field, FieldGroup } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Combobox,
  ComboboxChip,
  ComboboxChips,
  ComboboxChipsInput,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
  ComboboxValue,
  useComboboxAnchor,
} from '@/components/ui/combobox';
import React from 'react';
import {
  Empty,
  EmptyContent,
  EmptyDescription,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
} from '@/components/ui/empty';
import { FileIcon } from 'lucide-react';

const companies = ['Company A', 'Company B', 'Company C', 'Company D', 'Company E'];

const brands: Record<string, string[]> = {
  'Company A': ['Brand A1', 'Brand A2', 'Brand A3'],
  'Company B': ['Brand B1', 'Brand B2', 'Brand B3'],
  'Company C': ['Brand C1', 'Brand C2', 'Brand C3'],
  'Company D': ['Brand D1', 'Brand D2', 'Brand D3'],
  'Company E': ['Brand E1'],
};

export function ImportsModal() {
  const [selectedCompany, setSelectedCompany] = useState<string | null>(null);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const anchor = useComboboxAnchor();

  const availableBrands = selectedCompany ? brands[selectedCompany] : [];

  function handleCompanyChange(company: string | null) {
    setSelectedCompany(company);
    setSelectedBrands([]);
  }

  const [open, setOpen] = useState(false);

  return (
    <Dialog modal={false} open={open} onOpenChange={setOpen}>
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}
      <form>
        <DialogTrigger asChild>
          <Button variant="outline">New Import</Button>
        </DialogTrigger>
        <DialogContent className="z-50 sm:max-w-2xl">
          <DialogHeader>
            <DialogTitle>New Import</DialogTitle>
            <DialogDescription>
              Fill in the details for the new import. Click save when you&apos;re done.
            </DialogDescription>
          </DialogHeader>
          <FieldGroup>
            <Field>
              <Label htmlFor="name-1">Name</Label>
              <Input id="name-1" name="name" />
            </Field>
            <Field>
              <Label>Company</Label>
              <Combobox
                items={companies}
                value={selectedCompany}
                onValueChange={handleCompanyChange}
              >
                <ComboboxInput placeholder="Select a company" />
                <ComboboxContent>
                  <ComboboxEmpty>No items found.</ComboboxEmpty>
                  <ComboboxList>
                    {(item) => (
                      <ComboboxItem key={item} value={item}>
                        {item}
                      </ComboboxItem>
                    )}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </Field>
            <Field>
              <Label>
                Brands
                <span className="text-muted-foreground font-normal"> (optional)</span>
              </Label>
              <Combobox
                items={availableBrands}
                value={selectedBrands}
                onValueChange={setSelectedBrands}
                multiple
                autoHighlight
                disabled={!selectedCompany}
              >
                <ComboboxChips ref={anchor} className="w-full">
                  <ComboboxValue>
                    {(values) => (
                      <React.Fragment>
                        {values.map((value: string) => (
                          <ComboboxChip key={value}>{value}</ComboboxChip>
                        ))}
                        <ComboboxChipsInput />
                      </React.Fragment>
                    )}
                  </ComboboxValue>
                </ComboboxChips>
                <ComboboxContent anchor={anchor}>
                  <ComboboxEmpty>No items found.</ComboboxEmpty>
                  <ComboboxList>
                    {(item) => (
                      <ComboboxItem key={item} value={item}>
                        {item}
                      </ComboboxItem>
                    )}
                  </ComboboxList>
                </ComboboxContent>
              </Combobox>
            </Field>

            <Field>
              <Empty className="border-foreground border border-dashed">
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <FileIcon />
                  </EmptyMedia>
                  <EmptyTitle>Cloud Storage Empty</EmptyTitle>
                  <EmptyDescription>
                    Upload files to your cloud storage to access them anywhere.
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Button variant="outline" size="sm">
                    Upload Files
                  </Button>
                </EmptyContent>
              </Empty>
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
