
import Sidebar from "../../component/layout/sidebar"
export default async function DashboardLayout({ children }) {


  return (
    <div className="flex">
      <Sidebar/>
      <main>{children}</main>
    </div>
  );
}
