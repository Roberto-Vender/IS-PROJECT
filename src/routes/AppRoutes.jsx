import React from "react";
import { Routes, Route } from "react-router-dom";



import HeaderLayout from "../layouts/HeaderLayout";
import HeaderNoneLayout from "../layouts/HeaderNoneLayout";
import HeaderOnlyLayout from "../layouts/HeaderOnlyLayout";


import LandingPage from "../pages/LandingPage";
import Home from "../pages/Home";
import Team from "../pages/Team";
import AboutUs from "../pages/AboutUs";
import Contact from "../pages/contact";
import Enrollment from "../pages/Enrollment";
import Courses from "../pages/courses";
import OrgChart from "../pages/OrgChart";
import ProcessFlow from "../pages/ProcessFlow";
import Requirements from "../pages/Requirements";



const AppRoutes = () => {
  return (
    <Routes>  

  <Route element={<HeaderLayout />}>
    <Route path="/" element={<LandingPage />} />
    <Route path="/Home" element={<Home />} />
    <Route path="/AboutUs" element={<AboutUs />} />
    <Route path="/Contact" element={<Contact />} />
    <Route path="/Enrollment" element={<Enrollment />} />
    <Route path="/Courses" element={<Courses />} />
    <Route path="/OrgChart" element={<OrgChart />} />
    <Route path="/ProcessFlow" element={<ProcessFlow />} />
    <Route path="/Requirements" element={<Requirements />} />
    </Route>


  <Route element={<HeaderNoneLayout />}>
    <Route path="/LandingPage" element={<LandingPage />} />

  </Route>

  <Route element={<HeaderOnlyLayout />}>
    <Route path="/Team" element={<Team />} />
  </Route>


</Routes>

  );
};

export default AppRoutes;