import { Link } from "react-router-dom";
import "./Layout.css";

function Layout({ children }) {
  return (
    <div className="layout-wrapper">
      <header className="layout-header">
        <div className="layout-brand">🌿 CropWise</div>

       <nav className="layout-nav">
  <Link to="/">Home</Link>
  <a href="#features">Features</a>
  <a href="#how">How It Works</a>

  <Link to="/dashboard">Dashboard</Link>
  <Link to="/crop">Crop</Link>
  <Link to="/conditions">Conditions</Link>
</nav>

      </header>

      <main className="layout-content">
        {children}
      </main>
    </div>
  );
}

export default Layout;
