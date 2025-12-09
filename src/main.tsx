import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import Landing from "./Pages/Landing.tsx";
import Login from "./Pages/Login.tsx";
import "./index.css";
import About from './Pages/About.tsx';
import NotFound from './Pages/NotFound.tsx';
import OrganizationHome from './Pages/OrganizationHome.tsx';
import Register from './Pages/Register.tsx';
import UserHome from './Pages/UserHome.tsx';
import { Routes, Route } from "react-router";




createRoot(document.getElementById("root") as HTMLElement).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/notFound" element={<NotFound />} />
        <Route path="/organizationHome" element={<OrganizationHome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/userHome" element={<UserHome />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
