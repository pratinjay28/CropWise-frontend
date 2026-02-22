import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./CropDetails.css";
import "./ConditionToCrop.css";

function ConditionToCrop() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    soil: "",
    ph: "",
    temperature: "",   // ✅ FIX
    rainfall: "",      // ✅ FIX
    land: ""
  });

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit() {
    navigate("/result", { state: form });
  }

  return (
    <div className="crop-details-page">
      <div className="crop-card">

        <h2>📍 Enter Your Conditions</h2>
        <p className="subtitle">
          Provide your land details to get personalized crop recommendations
        </p>

        <div className="form-grid">

          <div>
            🌱 Soil Type
            <select
              name="soil"
              value={form.soil}
              onChange={handleChange}
            >
              <option value="">Select soil type</option>
              <option>Red Sandy</option>
              <option>Black Cotton Soil</option>
              <option>Clay</option>
              <option>Loamy</option>
            </select>
          </div>

          <div>
            🧪 Soil pH
            <input
              name="ph"
              placeholder="e.g. 6.5"
              value={form.ph}
              onChange={handleChange}
            />
          </div>

          <div>
            🌡️ Average Temperature (°C)
            <input
              name="temperature"   // ✅ FIX
              placeholder="e.g. 25"
              value={form.temperature}
              onChange={handleChange}
            />
          </div>

          <div>
            🌧️ Annual Rainfall (mm)
            <input
              name="rainfall"     // ✅ FIX
              placeholder="e.g. 800"
              value={form.rainfall}
              onChange={handleChange}
            />
          </div>

          <div style={{ gridColumn: "1 / -1" }}>
            📐 Land Area (hectares)
            <input
              name="land"
              placeholder="e.g. 2.5"
              value={form.land}
              onChange={handleChange}
            />
          </div>

        </div>

        <button className="primary-btn" onClick={handleSubmit}>
          ✨🔥 Get Recommendations 🌿🍁
        </button>

      </div>
    </div>
  );
}

export default ConditionToCrop;
