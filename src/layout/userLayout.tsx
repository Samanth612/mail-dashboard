// src/components/UserLayout.tsx
import { DASHBOARD } from "@/utils/constantlinks";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const UserLayout: React.FC = () => {
  const AuthReducer = useSelector((Data: any) => Data.auth?.isOK);

  return <>{!AuthReducer ? <Outlet /> : <Navigate to={DASHBOARD} />}</>;
};

export default UserLayout;
