import { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import StatCard from "./Statcard.jsx";
import BarberQueueTable from "./barbequetable";
import { initialBarbers, dashboardStats } from "./mockData";
import "../Css/Dashboard.css";

export default function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [barbers, setBarbers] = useState(initialBarbers);

  const toggleBarberStatus = (id) => {
    setBarbers((prev) =>
      prev.map((b) =>
        b.id === id
          ? {
              ...b,
              status: b.status === "available" ? "on-service" : "available",
            }
          : b,
      ),
    );
  };

  const formatCurrency = (n) => `\u20b1${n.toLocaleString()}`;

  return (
    <div className="dashboard-root">
      <Header
        onMenuClick={() => setSidebarOpen((v) => !v)}
        onLogout={() => alert("Wire this up to your real logout logic")}
      />
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <main className="dashboard-main">
        <div className="dashboard-top">
          <div>
            <h1 className="dashboard-title">
              DASHBOARD{" "}
              <span className="dashboard-date">{dashboardStats.date}</span>
            </h1>
          </div>
          <div className="status-legend">
            <p>On Service - Not Available</p>
            <p>Services - Available</p>
          </div>
        </div>

        <div className="stat-row">
          <StatCard
            label="Service Head Count"
            value={dashboardStats.serviceHeadCount}
          />
          <StatCard
            label="Daily Sales"
            value={formatCurrency(dashboardStats.dailySales)}
          />
          <StatCard
            label="Monthly Sales"
            value={formatCurrency(dashboardStats.monthlySales)}
          />
          <StatCard
            label="Most Availed Service"
            value={dashboardStats.mostAvailedService}
          />
          <StatCard
            label="Stocks"
            labelClass="stat-label-accent"
            value={dashboardStats.stock}
          />
        </div>

        <BarberQueueTable
          barbers={barbers}
          onToggleStatus={toggleBarberStatus}
        />
      </main>
    </div>
  );
}
