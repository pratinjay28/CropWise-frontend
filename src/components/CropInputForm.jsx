import { useState } from "react";

function CropInputForm({ onSubmit }) {
  const [crop, setCrop] = useState("");

  function handleSubmit(e) {
    e.preventDefault();

    if (!crop.trim()) return;

    onSubmit(crop.trim());
  }

  return (
    <form className="crop-input-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter crop name"
        value={crop}
        onChange={(e) => setCrop(e.target.value)}
      />

      <button type="submit">
        Get Crop Details
      </button>
    </form>
  );
}

export default CropInputForm;
