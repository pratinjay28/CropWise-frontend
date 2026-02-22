import { useNavigate } from "react-router-dom";
import { useState } from "react";
import CropInputForm from "../components/CropInputForm";
import { getCropDetails } from "../services/api";
import offline from "../data/offlineCrops.json";
import "./CropDetails.css";

function CropDetails() {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  async function handleSubmit(crop) {
    setLoading(true);

    try {
      const res = await getCropDetails(crop);

      // ✅ IMPORTANT: go to crop result page (NOT /result)
      navigate("/crop-result", {
        state: {
          source: "crop",
          data: res.data
        }
      });

    } catch (err) {

      const fallback = offline.find(
        (c) => c.crop.toLowerCase() === crop.toLowerCase()
      );

      navigate("/crop-result", {
        state: {
          source: "crop",
          data: fallback || null
        }
      });

    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="crop-details-page">
      <div className="crop-details-card">

        <div className="crop-icon">🌱</div>

        <h1 className="crop-title">Enter Crop Name</h1>

        <p className="crop-subtitle">
          Get yield, cost and profit details for a selected crop
        </p>

        <CropInputForm onSubmit={handleSubmit} />

        {loading && <p className="loading-text">⏳ Loading...</p>}

      </div>
    </div>
  );
}

export default CropDetails;
