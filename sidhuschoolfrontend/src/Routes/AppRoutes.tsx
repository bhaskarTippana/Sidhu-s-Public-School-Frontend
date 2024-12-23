import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Pages/Auth/Login"; 
import SideBar from "../Components/SideBar";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path="/" element={<Login />} />
        <Route path="/sidebar" element={<SideBar />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
