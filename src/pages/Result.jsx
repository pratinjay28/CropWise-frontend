import { useLocation, useNavigate } from "react-router-dom";
import "./Result.css";

function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const data = location.state;

  if (!data) {
    return (
      <div className="result-wrapper">
        <div className="result-empty">
          ⚠️ No recommendation data found
          <button onClick={() => navigate("/conditions")}>⬅ Try again</button>
        </div>
      </div>
    );
  }

  const getCropRecommendation = () => {
    const soil = data.soil?.trim();
    const ph = Number(data.ph);
    const temperature = Number(data.temperature);
    const rainfall = Number(data.rainfall);

    // 🌾 Rice
    if (soil === "Clay" && temperature >= 20 && rainfall >= 700) {
      return {
        crop: "Rice",
        yield: "4,800 kg",
        revenue: "₹2,40,000",
        profit: "₹1,50,000",
        roi: "167%"
      };
    }

    // 🥜 Groundnut
    if (soil === "Red Sandy" && temperature >= 22) {
      return {
        crop: "Groundnut",
        yield: "5,000 kg",
        revenue: "₹2,75,000",
        profit: "₹1,87,500",
        roi: "214%"
      };
    }

    // 🌱 Cotton
    if (soil === "Black Cotton Soil" && temperature >= 24) {
      return {
        crop: "Cotton",
        yield: "3,200 kg",
        revenue: "₹3,10,000",
        profit: "₹1,80,000",
        roi: "138%"
      };
    }

    // 🌾 Wheat
    if (soil === "Loamy") {
      return {
        crop: "Wheat",
        yield: "4,200 kg",
        revenue: "₹2,10,000",
        profit: "₹1,20,000",
        roi: "133%"
      };
    }

    return null;
  };

  const result = getCropRecommendation();

  if (!result) {
    return (
      <div className="result-wrapper">
        <div className="result-empty">
          ⚠️ No recommendation available for your inputs
          <button onClick={() => navigate("/conditions")}>⬅ Try again</button>
        </div>
      </div>
    );
  }

  return (
    <div className="result-wrapper">

      {/* -------- Header ---------- */}
      <div className="result-header">
        🌾 Recommended Crop
        <p>
          Based on your conditions :
          🌱 {data.soil} soil,
          🧪 pH {data.ph},
          🌡 {data.temperature}°C,
          🌧 {data.rainfall} mm
        </p>
      </div>

      {/* -------- Main Card ---------- */}
      <div className="result-main-card">

        <div className="crop-title">
          🌿 {result.crop}
        </div>

        <div className="stat-grid">

          <div className="stat-box">
            🌾 Yield
            <span>{result.yield}</span>
          </div>

          <div className="stat-box">
            💰 Revenue
            <span>{result.revenue}</span>
          </div>

          <div className="stat-box">
            🟢 Net Profit
            <span>{result.profit}</span>
          </div>

          <div className="stat-box">
            📈 ROI
            <span>{result.roi}</span>
          </div>

        </div>

      </div>

      <button className="back-btn" onClick={() => navigate("/conditions")}>
        🔁 Check another condition
      </button>

    </div>
  );
}

export default Result;
