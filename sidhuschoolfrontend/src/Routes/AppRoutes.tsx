import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Login from "../Pages/Auth/Login"; 
// import SideBar from "../Components/SideBar";
import Landing from "../Components/Landing";

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/login" element={<Login />} /> */}
        {/* <Route path="/sidebar" element={<SideBar />} /> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
