import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AppSidebar } from '@/components/nav';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <main className="flex min-w-0 flex-1 flex-col">
          <SidebarTrigger />
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}
