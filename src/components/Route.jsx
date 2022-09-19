import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Results from "./Results";

function Routee() {
  const location = useLocation();
  return (
    <div className="p-4">
      <Routes location={location} key={location.pathname}>
        {/* <Route
          path={["/search", "/images", "/news", "/videos"]}
          element={<Results />}
        /> */}
        <Route path="/" element={<Navigate replace to="/search" />} />
        <Route path="/search" element={<Results />} />
        <Route path="/image" element={<Results />} />
        <Route path="/news" element={<Results />} />
        <Route path="/videos" element={<Results />} />
      </Routes>
    </div>
  );
}

export default Routee;
