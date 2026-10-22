
import { useState } from "react";
import "./Candidate.css";

import Home from "../assets/CandidateAssets/Home.png";
import Career from "../assets/CandidateAssets/Career.png";
import User from "../assets/CandidateAssets/Users.png";

const Candidate = () => {
  const [formData, setFormData] = useState({
    role: "Candidate",
    fullName: "",
    email: "",
    mobile: "",
    degree: "",
    gender: "Female",
    dob: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (event) => {
    const { name, value, checked, type } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.role) {
      newErrors.role = "Please select your role.";
    }

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Full name is required.";
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!/^[6-9]\d{9}$/.test(formData.mobile)) {
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    }

    if (!formData.degree.trim()) {
      newErrors.degree = "Degree is required.";
    }

    if (!formData.gender) {
      newErrors.gender = "Please select your gender.";
    }

    if (!formData.dob || new Date(formData.dob) >= new Date()) {
      newErrors.dob = "Enter a valid date of birth.";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must contain at least 8 characters.";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match.";
    }

    if (!formData.terms) {
      newErrors.terms = "Please accept the terms and conditions.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!validateForm()) return;

    alert("Registration form validated successfully!");
    console.log("Candidate registration submitted", {
      ...formData,
      password: "[hidden]",
      confirmPassword: "[hidden]",
    });
  };

  return (
    <main className="Prp-Candidate-Page">
      <div className="Prp-Candidate-Layout">

      
        <section className="Prp-Candidate-Left-Panel">
          <header className="Prp-Candidate-Brand">
            <img
              src={Home}
              alt="Platform logo"
              className="Prp-Candidate-Brand-Icon"
            />

            <div className="Prp-Candidate-Brand-Text">
              <h3>AI Education & Workforce Development Platform</h3>
              <p>Connect • Discover • Succeed</p>
            </div>
          </header>

          <div className="Prp-Candidate-Hero">
            <h1>
              Build Your Future with.
              <br />
              The Right Opportunities.
            </h1>

            <p>
              Join here and take the next step in your career journey.
              <br />
              Get discovered by top recruiters and unlock new possibilities.
            </p>

            <h2>Discover Opportunities. Build Your Career.</h2>
          </div>

          <div className="Prp-Candidate-Illustration-Wrapper">
            <img
              src={Career}
              alt="Students working together at a computer"
              className="Prp-Candidate-Illustration"
            />
          </div>

          <footer className="Prp-Candidate-Footer">
            <img
              src={User}
              alt="User"
              className="Prp-Candidate-Footer-Icon"
            />

            <div className="Prp-Candidate-Footer-Text">
              <p>Better training today.</p>
              <p>Brighter opportunities tomorrow.</p>
            </div>
          </footer>
        </section>


        <section className="Prp-Candidate-Right-Panel">
          <div className="Prp-Candidate-Form-Header">
            <h1>Your Journey Starts Here</h1>
            <p>Join our ecosystem of professional employers.</p>
          </div>

          <form
            className="Prp-Candidate-Form"
            onSubmit={handleSubmit}
            noValidate
          >
           
            <div className="Prp-Candidate-Field Prp-Candidate-Role-Field">
              <label htmlFor="role">Select your role</label>

              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleChange}
              >
                <option value="">Candidate</option>
                <option value="Candidate">Candidate</option>
                <option value="Student">Student</option>
              </select>

              {errors.role && (
                <span className="Prp-Candidate-Error">
                  {errors.role}
                </span>
              )}
            </div>

            <div className="Prp-Candidate-Fields-Grid">
             
              <div className="Prp-Candidate-Field">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  name="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                />

                {errors.fullName && (
                  <span className="Prp-Candidate-Error">
                    {errors.fullName}
                  </span>
                )}
              </div>

            
              <div className="Prp-Candidate-Field">
                <label htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email address"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                />

                {errors.email && (
                  <span className="Prp-Candidate-Error">
                    {errors.email}
                  </span>
                )}
              </div>

              
              <div className="Prp-Candidate-Field">
                <label htmlFor="mobile">Mobile Number</label>
                <input
                  id="mobile"
                  name="mobile"
                  type="tel"
                  placeholder="1234567890"
                  value={formData.mobile}
                  onChange={handleChange}
                  maxLength={10}
                  inputMode="numeric"
                  autoComplete="tel"
                />

                {errors.mobile && (
                  <span className="Prp-Candidate-Error">
                    {errors.mobile}
                  </span>
                )}
              </div>

              <div className="Prp-Candidate-Field">
                <label htmlFor="degree">Degree</label>
                <input
                  id="degree"
                  name="degree"
                  type="text"
                  placeholder="B.Tech Computer Science"
                  value={formData.degree}
                  onChange={handleChange}
                />

                {errors.degree && (
                  <span className="Prp-Candidate-Error">
                    {errors.degree}
                  </span>
                )}
              </div>

             
              <div className="Prp-Candidate-Field">
                <label htmlFor="gender">Gender</label>
                <select
                  id="gender"
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                >
                  <option value="">Select gender</option>
                  <option value="Female">Female</option>
                  <option value="Male">Male</option>
                  <option value="Other">Other</option>
                  <option value="Prefer not to say">
                    Prefer not to say
                  </option>
                </select>

                {errors.gender && (
                  <span className="Prp-Candidate-Error">
                    {errors.gender}
                  </span>
                )}
              </div>

              
              <div className="Prp-Candidate-Field">
                <label htmlFor="dob">Date of Birth</label>
                <input
                  id="dob"
                  name="dob"
                  type="date"
                  value={formData.dob}
                  onChange={handleChange}
                  max={new Date().toISOString().slice(0, 10)}
                />

                {errors.dob && (
                  <span className="Prp-Candidate-Error">
                    {errors.dob}
                  </span>
                )}
              </div>

              
              <div className="Prp-Candidate-Field">
                <label htmlFor="password">Password</label>

                <div className="Prp-Candidate-Password-Wrapper">
                  <input
                    id="password"
                    name="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    value={formData.password}
                    onChange={handleChange}
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    className="Prp-Candidate-Password-Toggle"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? "Hide" : "Show"}
                  </button>
                </div>

                {errors.password && (
                  <span className="Prp-Candidate-Error">
                    {errors.password}
                  </span>
                )}
              </div>

              
              <div className="Prp-Candidate-Field">
                <label htmlFor="confirmPassword">Confirm Password</label>

                <div className="Prp-Candidate-Password-Wrapper">
                  <input
                    id="confirmPassword"
                    name="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    placeholder="Confirm password"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    autoComplete="new-password"
                  />

                  <button
                    type="button"
                    className="Prp-Candidate-Password-Toggle"
                    onClick={() =>
                      setShowConfirmPassword((prev) => !prev)
                    }
                  >
                    {showConfirmPassword ? "Hide" : "Show"}
                  </button>
                </div>

                {errors.confirmPassword && (
                  <span className="Prp-Candidate-Error">
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
            </div>

           
            <div className="Prp-Candidate-Terms-Container">
              <label className="Prp-Candidate-Terms-Label">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                />

                <span>
                  I agree to the{" "}
                  <a href="/terms">Terms of service</a> and{" "}
                  <a href="/privacy">privacy policy</a> regarding my
                  administrative access.
                </span>
              </label>

              {errors.terms && (
                <span className="Prp-Candidate-Error">
                  {errors.terms}
                </span>
              )}
            </div>

           
            <button
              type="submit"
              className="Prp-Candidate-Submit-Button"
            >
              Complete Registration
            </button>

            <p className="Prp-Candidate-Login-Text">
              Already have an account? <a href="/login">Login</a>
            </p>
          </form>
        </section>
      </div>
    </main>
  );
};

export default Candidate;
