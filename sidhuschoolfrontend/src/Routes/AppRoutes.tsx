import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Landing from "../Components/Landing";
import Login from "../Pages/Auth/Login";
import Register from "../Pages/Auth/Register";
import MainLayout from "../Components/MainLayout";
import { useSelector } from "react-redux";
import Dashboard from "../Pages/Admin/Dashboard";

// Placeholder components for each page
// import UsersPage from "../Pages/UsersPage";
// import ClassesPage from "../Pages/ClassesPage";
// import DashboardPage from "../Pages/DashboardPage";

const AppRoutes: React.FC = () => {
  const isAuthenticated = false; // Mock authentication status
  const role = useSelector((state: { user: { role: string } }) => state.user.role);
  console.log(role,'rolelelele');

  return (
    <BrowserRouter>
      <Routes>
        {/* Public routes */}
        <Route path="/" element={<Landing />} />
       
        <Route path={`${role}/login`} element={(isAuthenticated && role === "admin") ? <Navigate to="/admin/dashboard" /> : <Login />} />
        <Route path={`${role}/register`} element={(isAuthenticated && role === "admin") ? <Navigate to="/admin/dashboard" /> : <Register />} />
        {/* Admin Routes */}
        <Route path="admin" element={<MainLayout />}>
          {/* Redirect to /admin/dashboard if authenticated */}

          <Route index element={(isAuthenticated && role === "admin") ? <Navigate to="/admin/dashboard" /> : <Login />} />

          {/* Admin layout route */}
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="users" element={<h1>users page</h1>} />
          <Route path="classes" element={<h1>classes page</h1>} />
          {/* Add other admin pages like attendance, grades, etc. */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
