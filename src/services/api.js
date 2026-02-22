import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8080"
});

export const getCropDetails = (cropName) =>
  API.post("/crop-details", { cropName });

export const recommendCrops = (data) =>
  API.post("/recommend-crops", data);
