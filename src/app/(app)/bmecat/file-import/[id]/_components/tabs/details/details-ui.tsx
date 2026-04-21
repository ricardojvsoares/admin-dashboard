import { BmecatDetails } from '@/lib/api/bmecat/file-import/get-bmecat-details';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { FileText, Package, BarChart3, Clock, User } from 'lucide-react';

export default function BmecatDetailsUI({ data }: { data: BmecatDetails }) {
  const formatDate = (dateString: string) => new Date(dateString).toLocaleString();

  return (
    <div className="space-y-6 p-4">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold tracking-tight">BMEcat Import Overview</h2>
        <div className="text-muted-foreground text-sm">ID: {data.id}</div>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <StatCard
          title="Products"
          total={data.totalProducts}
          valid={data.validProducts}
          invalid={data.invalidProducts}
          icon={<Package className="h-4 w-4" />}
        />
        <StatCard
          title="Features"
          total={data.totalFeatures}
          valid={data.validFeatures}
          invalid={data.invalidFeatures}
          icon={<BarChart3 className="h-4 w-4" />}
        />
        <Card>
          <CardHeader className="flex flex-row items-center justify-between pb-2">
            <CardTitle className="text-sm font-medium">Metadata</CardTitle>
            <FileText className="text-muted-foreground h-4 w-4" />
          </CardHeader>
          <CardContent className="space-y-1">
            <p className="text-muted-foreground text-xs">Manufacturer</p>
            <p className="text-sm font-semibold">{data.manufacturer}</p>
            <p className="text-muted-foreground pt-2 text-xs">Supplier PID</p>
            <p className="text-sm font-semibold">{data.supplierPid}</p>
          </CardContent>
        </Card>
      </div>

      {/* Details List */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">File Information</CardTitle>
        </CardHeader>
        <CardContent>
          <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <DetailItem label="Internal Name" value={data.name} />
            <DetailItem label="GTIN" value={data.gtin} />
            <DetailItem
              label="Created"
              value={formatDate(data.createdAt)}
              icon={<Clock className="mr-1 inline h-3 w-3" />}
            />
            <DetailItem
              label="Last Updated"
              value={formatDate(data.updatedAt)}
              icon={<Clock className="mr-1 inline h-3 w-3" />}
            />
            <DetailItem
              label="Created By User ID"
              value={data.createdBy.toString()}
              icon={<User className="mr-1 inline h-3 w-3" />}
            />
            <DetailItem
              label="Updated By User ID"
              value={data.updatedBy.toString()}
              icon={<User className="mr-1 inline h-3 w-3" />}
            />
          </dl>
        </CardContent>
      </Card>
    </div>
  );
}

// --- Helper Components ---

type StatCardProps = {
  title: string;
  total: number;
  valid: number;
  invalid: number;
  icon: React.ReactNode;
};
function StatCard({ title, total, valid, invalid, icon }: StatCardProps) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {icon}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{total}</div>
        <div className="mt-2 flex items-center gap-4 text-xs">
          <span className="font-medium text-emerald-600">{valid} Valid</span>
          <span className="font-medium text-red-500">{invalid} Invalid</span>
        </div>
        {/* Simple Progress Bar */}
        <div className="bg-secondary mt-3 flex h-1.5 w-full overflow-hidden rounded-full">
          <div className="h-full bg-emerald-500" style={{ width: `${(valid / total) * 100}%` }} />
          <div className="h-full bg-red-500" style={{ width: `${(invalid / total) * 100}%` }} />
        </div>
      </CardContent>
    </Card>
  );
}

function DetailItem({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon?: React.ReactNode;
}) {
  return (
    <div className="space-y-1">
      <dt className="text-muted-foreground text-sm font-medium tracking-wider uppercase">
        {label}
      </dt>
      <dd className="flex items-center text-sm font-medium">
        {icon}
        {value}
      </dd>
    </div>
  );
}
