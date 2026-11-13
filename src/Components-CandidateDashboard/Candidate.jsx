import React from "react";
import "./Candidate.css";
import CandidateSidebar from "./CandidateSidebar";
import FrameOne from "../assets/DashboardAssets/FrameOne.png";
import FrameTwo from "../assets/DashboardAssets/FrameTwo.png";
import FrameThree from "../assets/DashboardAssets/FrameThree.png";
import FrameFour from "../assets/DashboardAssets/FrameFour.png";
import ArrowIcons from "../assets/DashboardAssets/ArrowIcons.png";

const dashboardData = [
  {
    id: "applications",
    title: "Application",
    count: 12,
    growth: "+2 this month",
    icon: FrameOne,
  },
  {
    id: "interviews",
    title: "Interviews scheduled",
    count: 2,
    growth: "+1 this month",
    icon: FrameTwo,
  },
  {
    id: "offers",
    title: "Offers Received",
    count: 2,
    growth: "+2 this month",
    icon: FrameThree,
  },
  {
    id: "saved-jobs",
    title: "Saved Jobs",
    count: 8,
    growth: "+2 this month",
    icon: FrameFour,
  },
];

function Candidate() {
  return (
    <main className="Prp-Candidate-Dashboard">
      <CandidateSidebar />

      <section
        className="Prp-Candidate-Dashboard-Main"
        aria-label="Candidate activity"
      >
        <div className="Prp-Candidate-Dashboard-Container">
          <div className="Prp-Candidate-Dashboard-Cards">
            {dashboardData.map((item) => (
              <article className="Prp-Candidate-Dashboard-Card" key={item.id}>
                <div className="Prp-Candidate-Dashboard-Icon">
                  <img src={item.icon} alt="" />
                </div>
                <h2 className="Prp-Candidate-Dashboard-Title">{item.title}</h2>
                <div className="Prp-Candidate-Dashboard-Details">
                  <p>{item.count}</p>
                  <span
                    className="Prp-Candidate-Dashboard-Arrow"
                    aria-hidden="true"
                  />
                </div>
                <div className="Prp-Candidate-Dashboard-Growth">
                  <img src={ArrowIcons} alt="" />
                  <span>{item.growth}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Candidate;
