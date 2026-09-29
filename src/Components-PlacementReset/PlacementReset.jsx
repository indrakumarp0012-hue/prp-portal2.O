import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PlacementReset.css";

import Placement from "../assets/PlacementResetAssets/Placement.png";
import ResearchPaper from "../assets/PlacementResetAssets/ResearchPaper.png";
import UnifiedPlatform from "../assets/PlacementResetAssets/UnifiedPlatform.png";
import ResetLink from "../assets/PlacementResetAssets/ResetLink.png";
import EmailLink from "../assets/PlacementResetAssets/EmailLink.png";
import ResendLink from "../assets/PlacementResetAssets/ResendLink.png";

function PlacementReset() {
  const navigate = useNavigate();
  const email = "priya01@prp.com";
  const [resendCooldown, setResendCooldown] = useState(0);
  const [resendMessage, setResendMessage] = useState("");

  useEffect(() => {
    if (resendCooldown <= 0) {
      return;
    }

    const timer = window.setInterval(() => {
      setResendCooldown((previous) => {
        if (previous <= 1) {
          window.clearInterval(timer);
          return 0;
        }

        return previous - 1;
      });
    }, 1000);

    return () => window.clearInterval(timer);
  }, [resendCooldown]);

  const handleBackToLogin = () => {
    navigate(-1);
  };

  const handleResendLink = () => {
    if (resendCooldown > 0) return;

    setResendMessage("Resend simulated. Email delivery is not connected.");
    setResendCooldown(30);
  };

  const resendButtonText = () => {
    if (resendCooldown > 0) {
      return `Resend in ${resendCooldown}s`;
    }

    return "Resend Reset Link";
  };

  return (
    <main className="placement-reset-page">
     
      <section className="placement-reset-left">
        <div className="placement-reset-brand">
          <div className="placement-reset-brand-logo">
            <img src={Placement} alt="Placement platform logo" />
          </div>

          <div className="placement-reset-brand-text">
            <h3>Placement &amp; Recruitment Platform</h3>
            <p>Connect • Discover • Succeed</p>
          </div>
        </div>

        <div className="placement-reset-heading">
          <h1>Check Your Inbox</h1>

          <p>
            We've sent a password reset link to your registered email address.
            <br />
            Follow the link to securely create a new password.
          </p>
        </div>

        <div className="placement-reset-image-area">
          <div className="placement-reset-paper-box">
            <img
              src={ResearchPaper}
              alt="Password reset illustration"
              className="placement-reset-research-paper"
            />
          </div>
        </div>

        <div className="placement-reset-quote">
          <div className="placement-reset-quote-icon">
            <img
              src={UnifiedPlatform}
              alt=""
              aria-hidden="true"
            />
          </div>

          <p>
            "A unified platform that simplifies training, placements,
            and recruitment management."
          </p>
        </div>
      </section>

      <section className="placement-reset-right">
        <div className="placement-reset-content">
          <div className="placement-reset-icon-wrapper">
            <img
              src={ResetLink}
              alt="Reset link sent"
              className="placement-reset-icon"
            />
          </div>

          <h2>Reset Link Sent!</h2>

          <p className="placement-reset-description">
            We've sent a password reset link to your email address.
          </p>

          <a
            className="placement-reset-email"
            href={`mailto:${email}`}
            aria-label={`Send email to ${email}`}
          >
            <img src={EmailLink} alt="" aria-hidden="true" />
            <span>{email}</span>
          </a>

          <p className="placement-reset-inbox-text">
            Check your inbox for the reset link.
          </p>

          <button
            type="button"
            className="placement-reset-login-btn"
            onClick={handleBackToLogin}
          >
            <span>Back to Login</span>
            <span
              className="placement-reset-login-arrow"
              aria-hidden="true"
            >
              →
            </span>
          </button>

          <div className="placement-reset-resend-row">
            <div
              className="placement-reset-divider"
              aria-hidden="true"
            />

            <button
              type="button"
              className="placement-reset-resend-btn"
              onClick={handleResendLink}
              disabled={resendCooldown > 0}
              aria-disabled={resendCooldown > 0}
            >
              <img
                src={ResendLink}
                alt=""
                aria-hidden="true"
              />

              <span>{resendButtonText()}</span>
            </button>

            <div
              className="placement-reset-divider"
              aria-hidden="true"
            />
          </div>

          <p
            className="placement-reset-timer"
            aria-live="polite"
          >
            {resendMessage ||
              (resendCooldown > 0
                ? `You can request a new link in ${resendCooldown} seconds.`
                : "You can request a new link now.")}
          </p>

          <footer className="placement-reset-footer">
            <button type="button">Help</button>

            <span className="placement-reset-footer-dot">•</span>

            <button type="button">Privacy</button>

            <span className="placement-reset-footer-dot">•</span>

            <button type="button">Terms</button>
          </footer>
        </div>
      </section>
    </main>
  );
}

export default PlacementReset;