import HeaderOne from "@/components/header/HeaderOne";
import SidebarOne from "@/components/sidebars/SidebarOne";

const DashboardLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="flex">
      <div className="w-[280px]">
        <SidebarOne />
      </div>
      <div className="w-[calc(100vw_-280px)]">
        <HeaderOne />
        <div className="bg-gray-100 p-5 h-[calc(100vh_-_64px)] overflow-hidden overflow-y-auto rounded-tl-3xl shadow-inner">
          {children}
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
