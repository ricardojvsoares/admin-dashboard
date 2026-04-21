import { Page } from '@/components/pages-layout';
import BmecatBreadcrumbs from './_components/breadcrumbs';
import { BmecatTabs } from './_components/tabs/tabs';

export default async function ImportPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  return (
    <Page>
      <BmecatBreadcrumbs />
      <Page.Header>
        <Page.Title>Teste</Page.Title>
      </Page.Header>

      <Page.Content>
        <BmecatTabs id={id} />
      </Page.Content>
    </Page>
  );
}
