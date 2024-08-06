import SideNav from "@/app/ui/side-nav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen flex-row">
      <div className="flex-none">
        <SideNav />
      </div>
      <div className="flex-grow p-6">{children}</div>
    </div>
  );
}
