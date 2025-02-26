// src/components/UserLayout.tsx
import { LOGIN } from "@/utils/constantlinks";
import { useSelector } from "react-redux";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedLayout: React.FC = () => {
  const AuthReducer = useSelector((state: any) => state.auth?.isOK);

  if (!AuthReducer) {
    return <Navigate to={LOGIN} />;
  }

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default ProtectedLayout;
