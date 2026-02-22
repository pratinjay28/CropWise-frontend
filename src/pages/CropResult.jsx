import { useLocation, useNavigate } from "react-router-dom";
const demoData = {
  crop: "Demo Crop",
  suitableSoil: "Loamy, Clay",
  phRange: "6.0 - 7.5",
  temperature: "22°C - 32°C",
  rainfall: "700 - 1200 mm",
  water: "Medium",
  growingPeriod: "110 - 130 days",

  nitrogen: 90,
  phosphorus: 45,
  potassium: 40,

  yieldPerHectare: "4200 kg",
  totalYield: "8400 kg",
  marketPrice: "₹20/kg",
  season: "Kharif"
};

import "./CropDetails.css";

function CropResult() {
  const { state } = useLocation();
  const data = state || demoData;
  console.log(state);
  const navigate = useNavigate();

  if (!state) {
    return (
      <div className="crop-details-page">
        <div className="crop-details-card result-layout">
          <h2>⚠️ No crop data found</h2>
          <button
            className="search-again-btn"
            onClick={() => navigate("/crop")}
          >
            ← Search another crop
          </button>
        </div>
      </div>
    );
  }

  /* ---------------------------
     Normalise data safely
  ----------------------------*/

  const cropName =
    state.crop ||
    state.name ||
    state.cropName ||
    "Selected Crop";

  const growing = state.growingConditions || state;

  const fertilizer = state.fertilizer || state.fertilizerRequirements || state;

  const economics = state.economics || state.yieldEconomics || state;

  return (
    <div className="crop-details-page">
      <div className="crop-details-card result-layout">

        <h2 style={{ textAlign: "center" }}>
          🌾 {cropName}
        </h2>

        <div className="result-grid">

          {/* ---------------- Growing Conditions ---------------- */}

          <div className="result-card">
            <h3>🌱 Growing Conditions</h3>

            <p>🌿 Suitable Soil : {growing.suitableSoil || growing.soil || "—"}</p>
            <p>🧪 pH Range : {growing.phRange || growing.ph || "—"}</p>
            <p>🌡 Temperature : {growing.temperature || "—"}</p>
            <p>🌧 Rainfall : {growing.rainfall || "—"}</p>
            <p>💧 Water Requirement : {growing.waterRequirement || "—"}</p>
            <p>📅 Growing Period : {growing.growingPeriod || "—"}</p>
          </div>

          {/* ---------------- Fertilizer ---------------- */}

          <div className="result-card">
            <h3>🧴 Fertilizer Requirements (per hectare)</h3>

            <p>🟢 Nitrogen (N) : {fertilizer.nitrogen || fertilizer.N || "—"} kg</p>
            <p>🟡 Phosphorus (P) : {fertilizer.phosphorus || fertilizer.P || "—"} kg</p>
            <p>🟠 Potassium (K) : {fertilizer.potassium || fertilizer.K || "—"} kg</p>
          </div>

          {/* ---------------- Yield & Economics ---------------- */}

          <div className="result-card">
            <h3>📊 Yield & Economics</h3>

            <p>🌾 Yield per hectare : {economics.yieldPerHectare || "—"}</p>
            <p>📦 Total expected yield : {economics.totalExpectedYield || "—"}</p>
            <p>💰 Market price : {economics.marketPrice || "—"}</p>
            <p>🗓 Season : {economics.season || "—"}</p>
          </div>

        </div>

        <button
          className="search-again-btn"
          onClick={() => navigate("/crop")}
        >
          ← Search another crop
        </button>

      </div>
    </div>
  );
}

export default CropResult;
