import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { DASHBOARD, LOGIN, SIGNUP } from "./utils/constantlinks";
import ProtectedLayout from "./layout/protectedLayout";
import Login from "./pages/login/login";
import Signup from "./pages/signup/signup";
import UserLayout from "./layout/userLayout";
import MailPage from "./pages/dashboard/page";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<UserLayout />}>
          <Route path={LOGIN} element={<Login />} />
          <Route path={SIGNUP} element={<Signup />} />
          <Route path="*" element={<Navigate to={LOGIN} replace />} />
        </Route>
        <Route element={<ProtectedLayout />}>
          <Route path={DASHBOARD} element={<MailPage />} />
          <Route path="*" element={<Navigate to={DASHBOARD} replace />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
