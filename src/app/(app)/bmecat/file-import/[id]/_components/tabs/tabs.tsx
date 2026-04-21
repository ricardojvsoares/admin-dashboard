import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BmecatDetails from './details/details';
import BmecatProducts from './products/products';
import BmecatAudits from './audits/audits';

export function BmecatTabs({ id }: { id: string }) {
  return (
    <Tabs defaultValue="details" className="w-full">
      <TabsList variant="line" className="w-full justify-start border-b">
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="products">Products</TabsTrigger>
        <TabsTrigger value="audits">Audits</TabsTrigger>
      </TabsList>
      <TabsContent value="details">
        <BmecatDetails id={id} />
      </TabsContent>
      <TabsContent value="products">
        <BmecatProducts id={id} />
      </TabsContent>
      <TabsContent value="audits">
        <BmecatAudits id={id} />
      </TabsContent>
    </Tabs>
  );
}
