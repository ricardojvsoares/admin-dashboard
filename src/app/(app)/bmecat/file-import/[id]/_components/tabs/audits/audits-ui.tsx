import { BmecatAudit } from '@/lib/api/bmecat/file-import/get-bmecat-audits';
import { Item, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item';
import { Separator } from '@/components/ui/separator';
export default function BmecatAuditsUI({ data }: { data: BmecatAudit[] }) {
  return (
    <div>
      {data.map((audit) => (
        <Item variant="default" key={audit.id}>
          <ItemContent>
            <ItemTitle>
              {audit.oldValue} {'->'} {audit.newValue}
            </ItemTitle>
            <ItemDescription>
              Changed by User ID: {audit.createdBy} on {new Date(audit.createdAt).toLocaleString()}
            </ItemDescription>
          </ItemContent>
          <Separator className="my-2" />
        </Item>
      ))}
    </div>
  );
}
