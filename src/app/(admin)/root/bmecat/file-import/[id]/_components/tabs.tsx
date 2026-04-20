import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import BmecatDetails from './details';
import BmecatProducts from './products';
import BmecatAudits from './audits';

export function BmecatTabs() {
  return (
    <Tabs defaultValue="overview" className="w-full">
      <TabsList variant="line" className="w-full justify-start border-b">
        <TabsTrigger value="details">Details</TabsTrigger>
        <TabsTrigger value="products">Products</TabsTrigger>
        <TabsTrigger value="audits">Audits</TabsTrigger>
      </TabsList>
      <TabsContent value="details">
        <BmecatDetails />
      </TabsContent>
      <TabsContent value="products">
        <BmecatProducts />
      </TabsContent>
      <TabsContent value="audits">
        <BmecatAudits />
      </TabsContent>
    </Tabs>
  );
}
