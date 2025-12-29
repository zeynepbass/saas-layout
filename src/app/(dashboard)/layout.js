import { GetFunction } from "../services/fetcher";
import Sidebar from "../../component/layout/sidebar"
export default async function DashboardLayout({ children }) {
  const post = await GetFunction.getAll();

  return (
    <div className="flex">
      <Sidebar post={post} />
      <main>{children}</main>
    </div>
  );
}
