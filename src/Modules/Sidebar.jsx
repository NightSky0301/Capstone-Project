// Icon + label nav items live here (not in mockData.js) since JSX icons
// can't be stored in a plain data file. Edit this array to add/remove
// sidebar links.
const navItems = [
  { label: "Dashboard", href: "#", Icon: HomeIcon },
  { label: "Inventory", href: "#", Icon: BoxIcon },
  { label: "Reports", href: "#", Icon: ReportIcon },
  { label: "P. Graph", href: "#", Icon: GraphIcon },
  { label: "Service M.", href: "#", Icon: ServiceIcon },
  { label: "History", href: "#", Icon: HistoryIcon },
];

export default function Sidebar({ isOpen, onClose }) {
  return (
    <>
      {/* Invisible click-catcher so clicking outside the panel closes it
          (no dark dimming — this design keeps the dashboard fully visible) */}
      <div
        className={`sidebar-overlay ${isOpen ? "visible" : ""}`}
        onClick={onClose}
        aria-hidden="true"
      />

      <nav
        className={`sidebar ${isOpen ? "open" : ""}`}
        aria-label="Main navigation"
      >
        <div className="sidebar-divider" />
        <ul>
          {navItems.map(({ label, href, Icon }) => (
            <li key={label}>
              <a href={href}>
                <Icon />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </>
  );
}

function HomeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10v9h13v-9" />
    </svg>
  );
}

function BoxIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M3 7.5 12 3l9 4.5-9 4.5-9-4.5Z" />
      <path d="M3 7.5v9L12 21l9-4.5v-9" />
      <path d="M12 12v9" />
    </svg>
  );
}

function ReportIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <rect x="4" y="3" width="16" height="18" rx="1.5" />
      <path d="M8 8h8M8 12h8M8 16h5" />
    </svg>
  );
}

function GraphIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <path d="M4 20V10M12 20V4M20 20v-6" />
      <path d="M2 20h20" />
    </svg>
  );
}

function ServiceIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="6" cy="6" r="2.2" />
      <circle cx="6" cy="18" r="2.2" />
      <line x1="19" y1="4" x2="8" y2="14" />
      <line x1="8" y1="10" x2="19" y2="20" />
    </svg>
  );
}

function HistoryIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      aria-hidden="true"
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.5V12l3 2" />
    </svg>
  );
}
