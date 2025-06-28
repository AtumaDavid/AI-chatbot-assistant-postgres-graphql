import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col flex-1">
      <Header />
      <div className="flex flex-col lg:flex-row bg-gray-200 flex-1">
        {/* sidebar */}
        <Sidebar />
        <div className="flex flex-1 justify-center lg:justify-start items-center max-w-5xl mx-auto">
          {children}
        </div>
      </div>
    </div>
  );
}

export default AdminLayout;
