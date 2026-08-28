// Placeholder data — replace each export below with a real API call once
// the backend exists. Component code doesn't need to change: as long as
// the shape (field names) stays the same, only this file changes.

export const initialBarbers = [];

export const dashboardStats = {
  date: "",
  serviceHeadCount: 0,
  dailySales: 0,
  monthlySales: 0,
  mostAvailedService: "—",
  stock: "—",
};

export const services = [];

export const inventoryItems = [];

export const criticalStockThreshold = 5;

// Transaction log — empty until a real backend exists. Each confirmed
// payment should eventually push a record here: { barberId, date,
// amount, method }. Reports.jsx derives its table from this once
// it's populated; for now every date shows zeros.
export const transactions = [];

// Performance Graph tab — all empty until a real backend/transaction
// log exists. Shapes to match when real data is wired in:
//   barberPerformance: [{ name: "Baldo", heads: 58 }, ...]
//   monthlySales:      [{ month: "January", amount: 18000 }, ...]
//   dailySalesPerformance: [{ day: "Monday", amount: 4000 }, ...]
//   greatestBarbero:   { name: "James", heads: 78 } | null
export const barberPerformance = [];
export const monthlySales = [];
export const dailySalesPerformance = [];
export const greatestBarbero = null;
export const thisMonthSale = 0;
