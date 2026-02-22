import "./ResultCard.css";
function ResultCard({ data }) {
  if (!data) return null;

  return (
    <div className="result-card">
      <h2>🌾 {data.crop || data.name}</h2>

      <ul>
        <li>🟫 <b>Soil type:</b> {data.soil || data.soilType}</li>
        <li>🧪 <b>pH range:</b> {data.ph}</li>
        <li>🌦️ <b>Climate:</b> {data.climate}</li>
        <li>🧬 <b>NPK:</b> {data.npk}</li>
        <li>📈 <b>Predicted yield:</b> {data.yield}</li>
        <li>💰 <b>Cost of cultivation:</b> ₹{data.cost}</li>
        <li>🪙 <b>Expected profit:</b> ₹{data.profit}</li>
        <li>✅ <b>Suitability:</b> {data.suitability}</li>
      </ul>
    </div>
  );
}

export default ResultCard;
