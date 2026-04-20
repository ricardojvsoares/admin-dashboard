import { Page } from '@/components/pages-layout';

export default async function HomePage() {
  return (
    <Page>
      <Page.Header>
        <Page.Title>Teste</Page.Title>
      </Page.Header>

      <Page.Content className="">
        <h1>Home Page</h1>
      </Page.Content>
    </Page>
  );
}
