// Mock data standing in for a real backend. Each barber has a status of
// either "on-service" (busy, gray pill) or "available" (green pill).
// Replace this file's export with a fetch() call to your API when ready —
// nothing else in the components needs to change as long as the shape
// (id, name, status, heads) stays the same.

export const initialBarbers = [
  { id: 1, name: "Baldo", status: "on-service", heads: 8 },
  { id: 2, name: "James", status: "on-service", heads: 9 },
  { id: 3, name: "Joshua", status: "on-service", heads: 4 },
  { id: 4, name: "Bltoy", status: "on-service", heads: 4 },
  { id: 5, name: "Bong", status: "available", heads: 4 },
];

export const dashboardStats = {
  date: "April 14, 2026",
  serviceHeadCount: 25,
  dailySales: 2513,
  monthlySales: 2513,
  mostAvailedService: "Haircut",
  stock: "Ash Grey",
};

export const navLinks = [
  { label: "Dashboard", href: "#" },
  { label: "Barbers", href: "#" },
  { label: "Services", href: "#" },
  { label: "Sales report", href: "#" },
  { label: "Stocks", href: "#" },
  { label: "Settings", href: "#" },
];
