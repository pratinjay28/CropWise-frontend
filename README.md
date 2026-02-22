 🌾 CropWise Frontend

CropWise is a modern web application that helps farmers and users explore crop information, analyze growing conditions, and get intelligent crop recommendations based on soil, climate, and land inputs.

This frontend is built using **React + Vite** and communicates with a backend API to fetch crop details and recommendations.

---

## 🚀 Features

* 🌱 Explore crop details (soil, pH, temperature, rainfall, etc.)
* 📊 View fertilizer requirements (Nitrogen, Phosphorus, Potassium)
* 💰 View yield and economic insights
* 🤖 Get crop recommendations based on conditions
* 🧾 Clean and farmer-friendly UI
* ⚡ Fast performance using Vite
* 🔄 Offline fallback support (offlineCrops.json)

---

## 🛠️ Tech Stack

* ⚛️ React
* ⚡ Vite
* 🎨 CSS (Custom styling)
* 🌐 Axios (API communication)
* 🧭 React Router (Navigation)

---

## 📂 Project Structure

```
cropwise-frontend/
│
├── public/
│
├── src/
│   ├── assets/                 # Images and static assets
│
│   ├── components/            # Reusable UI components
│   │   ├── Layout.jsx
│   │   ├── CropInputForm.jsx
│   │   ├── ConditionForm.jsx
│   │   ├── ResultCard.jsx
│   │   └── ComparisonTable.jsx
│
│   ├── pages/                 # Application pages
│   │   ├── Home.jsx
│   │   ├── Dashboard.jsx
│   │   ├── CropDetails.jsx
│   │   ├── ConditionToCrop.jsx
│   │   ├── Result.jsx
│   │   └── CropResult.jsx
│
│   ├── data/
│   │   └── offlineCrops.json  # Offline fallback data
│
│   ├── services/
│   │   └── api.js             # API configuration
│
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md
```

---

## ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/pratinjay28/CropWise-frontend.git
```

Go into the project folder:

```bash
cd CropWise-frontend
```

Install dependencies:

```bash
npm install
```

---

## ▶️ How to Run the Project

Start development server:

```bash
npm run dev
```

You will see:

```
Local: http://localhost:5173/
```

Open in browser:

```
http://localhost:5173/
```

---

## 📊 Pages Overview

| Page         | Purpose                           |
| ------------ | --------------------------------- |
| Home         | Landing page                      |
| Crop Details | Enter crop name                   |
| Conditions   | Enter soil and climate conditions |
| Result       | Shows crop info and economics     |
| Dashboard    | Overview and navigation           |

---

## 🧠 How It Works

1. User enters crop name or conditions
2. Frontend sends request to backend API
3. Backend returns crop data
4. Frontend displays data in structured cards
5. If backend unavailable → offline data used

---

## 📸 UI Highlights

* Card-based layout
* Responsive design
* Clean and readable typography
* Professional farmer-focused theme

---

## 👨‍💻 Author

**Pratinjay Srivastava**

GitHub:
https://github.com/pratinjay28

---

## 📄 License

This project is for educational and learning purposes.

---

## ⭐ Future Improvements

* Add authentication
* Deploy to cloud
* Connect real agricultural APIs
* Add weather integration
* Improve recommendation logic

---

## 🙌 Contribution

Contributions are welcome!

Fork → Improve → Pull Request

---

## 💡 Summary

CropWise helps users make smarter agricultural decisions using modern web technology.

---
