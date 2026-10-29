import { Link } from "react-router-dom";
import "./LandingPage.css";
import Home1 from "../assets/LandingPageAssets/Home1.png";
import interview from "../assets/LandingPageAssets/Interview.png";
import WideJob from "../assets/LandingPageAssets/WideJob.png";
import AiResume from "../assets/LandingPageAssets/AiResume.png";
import Skill from "../assets/LandingPageAssets/Skill.png";
import Analytics from "../assets/LandingPageAssets/Analytics.png";
import User from "../assets/LandingPageAssets/User.png";
import IconamoonOne from "../assets/LandingPageAssets/IconamoonOne.png";
import Grok from "../assets/LandingPageAssets/Grok.png";
import Wipro from "../assets/LandingPageAssets/Wipro.png";
import Qwen from "../assets/LandingPageAssets/Qwen.png";
import Deepseek from "../assets/LandingPageAssets/Deepseek.png";
import Infosys from "../assets/LandingPageAssets/Infosys.png";
import Claude from "../assets/LandingPageAssets/Claude.png";
import Openai from "../assets/LandingPageAssets/Openai.png";
import Group from "../assets/LandingPageAssets/Group.png";
import Twitter from "../assets/LandingPageAssets/Twitter.png";
import Instagram from "../assets/LandingPageAssets/Instagram.png";

const features = [
  {
    image: WideJob,
    title: "Wide Job Opportunities",
    description:
      "Access to thousands of job openings from top companies",
  },
  {
    image: AiResume,
    title: "AI Resume Matching",
    description:
      "Get matched with the right jobs using AI technology",
  },
  {
    image: Skill,
    title: "Training & Skill Readiness",
    description:
      "Build in-demand skills with industry-relevant training programs.",
  },
  {
    image: Analytics,
    title: "Placement Analytics",
    description:
      "Track performance and make data-driven decisions",
  },
  {
    image: User,
    title: "For Every User",
    description:
      "Tailored benefits for job seekers, recruiters and training institutions",
  },
];

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Designer @ Aura Systems",
    quote:
      "ConnectHire transformed my job search. The AI matching felt intuitive, and within two weeks, I was interviewed and hired by my dream company in fintech. The process was seamless.",
  },
  {
    name: "Jhon Francis",
    role: "Recruitment Manager @ Vertex Solutions",
    quote:
      "The community gave me the confidence to showcase my work and connect with amazing people. I got my first full-time offer within 6 months. The support and guidance here are unmatched.",
  },
  {
    name: "David Miller",
    role: "Talent Director @ Zenith Capital",
    quote:
      "The quality of candidates on ConnectHire is unmatched. We reduced our time-to-hire by 40% and have found some of our most productive team members through their automated screening.",
  },
];

const companies = [
  { image: Grok, name: "Grok" },
  { image: Wipro, name: "Wipro" },
  { image: Qwen, name: "Qwen" },
  { image: Deepseek, name: "DeepSeek" },
  { image: Infosys, name: "Infosys" },
  { image: Claude, name: "Claude" },
  { image: Openai, name: "OpenAI" },
];

function LandingPage() {
  return (
    <main className="lp-page">
      
      <header className="lp-header">
        <a className="lp-brand" href="#home" aria-label="Placement and Recruitment Platform home">
          <img src={Home1}  />

          <span>
            Placement & 
            <br />
            Recruitment Platform
          </span>
        </a>

        <nav className="lp-navigation" aria-label="Main navigation">
          <a className="lp-nav-link lp-active" href="#home">
            Home
          </a>

          <a className="lp-nav-link" href="#features">
            Features
          </a>

          <a className="lp-nav-link" href="#recruiters">
            For Recruiters/Employers
          </a>

          <a className="lp-nav-link" href="#training">
            For Training Institutions
          </a>

          <a className="lp-nav-link" href="#success">
            Success Stories
          </a>
        </nav>

        <div className="lp-header-actions">
          <Link className="lp-login-button" >
            Login
          </Link>

          <Link className="lp-register-button" >
            Register
          </Link>
        </div>
      </header>

     
      <section className="lp-hero" id="home">
        <div className="lp-hero-content">
          <p className="lp-eyebrow">BUILD YOUR FUTURE</p>

          <h1>
            Connect. Learn.
            <br />
            Get Placed.
          </h1>

          <p className="lp-hero-description">
            The all-in-one platform that bridges the gap between
            talented individuals, top employers and training
            institutions.
          </p>

          <div className="lp-hero-actions">
            <Link className="lp-primary-button" >
              Get Started
            </Link>

            <a className="lp-secondary-button" >
              Explore Jobs
            </a>
          </div>
        </div>

        <div className="lp-hero-image">
          <img
            src={interview}
            alt="Career and recruitment illustration"
          />
        </div>
      </section>

      
      <section className="lp-features-section" id="features">
        <div className="lp-section-heading">
          <p className="lp-section-eyebrow">WHY CHOOSE US</p>

          <h2>Everything You Need for a Successful Career</h2>
        </div>

        <div className="lp-feature-grid">
          {features.map((feature) => (
            <article
              className="lp-feature-card"
              key={feature.title}
            >
              <div className="lp-feature-icon">
                <img src={feature.image} alt="" />
              </div>

              <h3>{feature.title}</h3>

              <p>{feature.description}</p>
            </article>
          ))}
        </div>
      </section>

     
      <section className="lp-success-section" id="success">
        <div className="lp-section-heading">
          <p className="lp-section-eyebrow">SUCCESS STORIES</p>

          <h2>WHAT OUR USERS SAY</h2>
        </div>

        <div className="lp-testimonial-grid">
          {testimonials.map((testimonial) => (
            <article
              className="lp-testimonial-card"
              key={testimonial.name}
            >
              <span
                className="lp-quote-mark"
                aria-hidden="true"
              >
                ”
              </span>

              <div className="lp-testimonial-person">
                <div className="lp-avatar">
                  <img src={IconamoonOne} alt="" />
                </div>

                <div className="lp-person-details">
                  <div
                    className="lp-stars"
                    aria-label="5 out of 5 stars"
                  >
                    ★★★★★
                  </div>

                  <h3>{testimonial.name}</h3>

                  <p>{testimonial.role}</p>
                </div>
              </div>

              <blockquote>{testimonial.quote}</blockquote>
            </article>
          ))}
        </div>
      </section>

     
      <section className="lp-companies-section" id="recruiters">
        <p className="lp-companies-eyebrow">
          TRUSTED BY LEADING COMPANIES
        </p>

        <h2>TOP COMPANIES HIRE HERE</h2>

        <div className="lp-company-list">
          {companies.map((company) => (
            <div
              className="lp-company-item"
              key={company.name}
            >
              <img
                src={company.image}
                alt={company.name}
              />
            </div>
          ))}
        </div>
      </section>

      
      <div
        className="lp-training-anchor"
        id="training"
      />

      
      <footer className="LandingPage-footer">
        <div className="LandingPage-footerColumns">
          <div className="LandingPage-footerColumn">
            <h4 className="LandingPage-footerHeading">COMPANY</h4>
            <a className="LandingPage-footerLink" href="#about">About Us</a>
            <a className="LandingPage-footerLink" href="#careers">Careers</a>
            <a className="LandingPage-footerLink" href="#contact">contact</a>
          </div>

          <div className="LandingPage-footerColumn">
            <h4 className="LandingPage-footerHeading">PLATFORM</h4>
            <a className="LandingPage-footerLink" href="#features">Job Postings</a>
            <a className="LandingPage-footerLink" href="#features">AI Resume Matching</a>
            <a className="LandingPage-footerLink" href="#training">
              Training & skill Readiness
            </a>
            <a className="LandingPage-footerLink" href="#features">
              Placement Analytics
            </a>
          </div>

          <div className="LandingPage-footerColumn">
            <h4 className="LandingPage-footerHeading">SUPPORT</h4>
            <a className="LandingPage-footerLink" href="#support">Help Center</a>
            <a className="LandingPage-footerLink" href="#faq">FAQ</a>
            <a className="LandingPage-footerLink" href="#support">Raise Issue</a>
            <a className="LandingPage-footerLink" href="#contact">
              Contact Support
            </a>
          </div>

          <div className="LandingPage-footerColumn">
            <h4 className="LandingPage-footerHeading">LEGAL</h4>
            <div className="LandingPage-legalList">
              <a className="LandingPage-legalLink" href="#privacy">
                Privacy Policy
              </a>
              <a
                className="LandingPage-legalLink LandingPage-legalIndent"
                href="#terms"
              >
                Terms & Conditions
              </a>
              <a
                className="LandingPage-legalLink LandingPage-legalIndent"
                href="#cookies"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>

        <div className="LandingPage-footerDivider" aria-hidden="true" />
        <div className="LandingPage-footerBottom">
          <p className="LandingPage-copyright">
            © 2026 Placement and Recruitment Platform.
          </p>
          <div className="LandingPage-social">
            <a href="#facebook" aria-label="Facebook">
              <img src={Group} alt="" />
            </a>
            <a href="#twitter" aria-label="Twitter">
              <img src={Twitter} alt="" />
            </a>
            <a href="#instagram" aria-label="Instagram">
              <img src={Instagram} alt="" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default LandingPage;
