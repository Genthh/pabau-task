import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AllMissions } from "../pages/AllMissions/AllMissions";
import { Mission } from "../pages/Mission/Mission";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AllMissions />} />
        <Route path="/mission/:id" element={<Mission />} />
      </Routes>
    </BrowserRouter>
  );
};
