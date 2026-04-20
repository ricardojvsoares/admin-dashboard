import { Page } from '@/components/pages-layout';
import { ImportsModal } from './_components/imports-modal';
import { DataTable } from './_components/table/data-table';
import { columns } from './_components/table/columns';
import { getBmecatFiles } from '@/lib/api/bmecat/get-bmecat-files';
import BmecatBreadcrumbs from './_components/breadcrumbs';

export default async function BmecatPage() {
  const data = await getBmecatFiles();
  return (
    <Page>
      <BmecatBreadcrumbs />
      <Page.Header>
        <Page.Title>Teste</Page.Title>
        <Page.Actions>
          <ImportsModal />
        </Page.Actions>
      </Page.Header>

      <Page.Content className="">
        <DataTable columns={columns} data={data} />
      </Page.Content>
    </Page>
  );
}
