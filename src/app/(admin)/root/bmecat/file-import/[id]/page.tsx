import { Page } from '@/components/pages-layout';
import BmecatBreadcrumbs from './_components/breadcrumbs';
import { BmecatTabs } from './_components/tabs';

export default async function BmecatPage() {
  return (
    <Page>
      <BmecatBreadcrumbs />
      <Page.Header>
        <Page.Title>Teste</Page.Title>
      </Page.Header>

      <Page.Content>
        <BmecatTabs />
      </Page.Content>
    </Page>
  );
}
