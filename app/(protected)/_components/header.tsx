import { DashboardNavbar} from "@/components/auth/dashboard-navbar";
import { UserButton } from "@/components/auth/user-button";

export const DashboardHeader = () => {
  return (
    <nav className="bg-secondary flex justify-between items-center p-4 rounded-xl w-[600px] shadow-sm">
      <DashboardNavbar/>
      <UserButton />
    </nav>
  );
};