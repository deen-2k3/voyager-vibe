import AdminGate from "@/components/admin/AdminGate";
import AdminNav from "@/components/admin/AdminNav";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <AdminGate>
      <div className="min-h-screen bg-cream">
        <AdminNav />
        <div className="mx-auto max-w-5xl px-6 py-10">{children}</div>
      </div>
    </AdminGate>
  );
}
