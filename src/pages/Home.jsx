import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home-wrapper">

      <div className="hero">

        <div className="tag">🌱 Smart Farming Made Simple</div>

        <h1>
          Grow Smarter, <span>Profit More</span>
        </h1>

        <p>
          AI-powered crop recommendations based on your soil, climate and land
          conditions. Make data-driven decisions and maximize your agricultural
          profits.
        </p>

        <div className="hero-buttons">
          <button
            className="primary-btn"
            onClick={() => navigate("/conditions")}
          >
            Start Recommending →
          </button>

          <button
            className="secondary-btn"
            onClick={() => navigate("/crop")}
          >
            Explore Crops
          </button>
        </div>

      </div>

      <div className="stats">
        <div className="stat-box">
          <h2>12+</h2>
          <p>Major Crops</p>
        </div>

        <div className="stat-box">
          <h2>35%</h2>
          <p>Higher Profits</p>
        </div>

        <div className="stat-box">
          <h2>9+</h2>
          <p>Soil Types</p>
        </div>
      </div>

    </div>
  );
}

export default Home;
