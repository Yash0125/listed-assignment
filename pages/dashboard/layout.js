import { Sidebar } from "@/components/dashboard/SideDrawer";

export default function Layout({ children }) {
  return (
    <div className="p-[40px] bg-[#F5F5F5] h-screen w-full flex gap-[40px] overflow-hidden">
      <Sidebar></Sidebar>
      <section className="h-full w-full p-[20px] flex flex-col gap-[40px]  overflow-y-scroll no-scrollbar">
        {children}
      </section>
    </div>
  );
}
