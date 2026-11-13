import { useState } from "react";
import "./CandidateSidebar.css";

const navigationItems = [
  "Dashboard",
  "Job Search",
  "Interview Schedule",
  "Assessments",
  "Applications",
  "offers",
  "Training & Courses",
  "Resume Manager",
  "Profile",
  "Notification",
  "Settings",
];

function CandidateSidebar() {
  const [activeItem, setActiveItem] = useState("Dashboard");
  const [applicationsOpen, setApplicationsOpen] = useState(false);

  return (
    <aside className="Prp-Candidate-Sidebar">
      <nav className="Prp-Candidate-Sidebar-Navigation" aria-label="Dashboard">
        {navigationItems.map((item) => {
          const isApplications = item === "Applications";

          return (
            <button
              className={`Prp-Candidate-Sidebar-NavItem${
                activeItem === item ? " is-active" : ""
              }`}
              type="button"
              key={item}
              aria-current={activeItem === item ? "page" : undefined}
              aria-expanded={isApplications ? applicationsOpen : undefined}
              onClick={() => {
                setActiveItem(item);
                if (isApplications) {
                  setApplicationsOpen((open) => !open);
                }
              }}
            >
              <span>{item}</span>
              {isApplications && (
                <span
                  className={`Prp-Candidate-Sidebar-Chevron${
                    applicationsOpen ? " is-open" : ""
                  }`}
                  aria-hidden="true"
                />
              )}
            </button>
          );
        })}
      
        
      </nav>
    </aside>
  );
}

export default CandidateSidebar;
