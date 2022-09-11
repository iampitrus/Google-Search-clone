import { Route, Routes } from "react-router-dom";
import Results from "./Results";

function Routee() {
  return (
    <div className="p-4">
      <Routes>
        <Route path="/search" />
        <Route path="/" element={<Results />} />
      </Routes>
    </div>
  );
}

export default Routee;
