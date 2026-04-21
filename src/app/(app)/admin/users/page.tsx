import { Page } from '@/components/pages-layout';

export default async function UsersPage() {
  return (
    <Page>
      <Page.Header>
        <Page.Title>Users</Page.Title>
      </Page.Header>

      <Page.Content className="">
        <h1>Users Page</h1>
      </Page.Content>
    </Page>
  );
}
