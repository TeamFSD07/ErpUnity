import React, { useState } from "react";
import "./signup.css";

const Signup = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  };

  const prevStep = () => {
    setStep((prevStep) => prevStep - 1);
  };

  return (
    <div className="Signup-Container">
      <div className="sumit-container">
        <header>Signup Form</header>
        <div className="sumit-progress-bar">
          <div className={`sumit-step ${step >= 1 ? "active" : ""}`}>
            <p>Name</p>
            <div className="sumit-bullet">
              <span>1</span>
            </div>
          </div>
          <div className={`sumit-step ${step >= 2 ? "active" : ""}`}>
            <p>Contact</p>
            <div className="sumit-bullet">
              <span>2</span>
            </div>
          </div>
          <div className={`sumit-step ${step >= 3 ? "active" : ""}`}>
            <p>Birth</p>
            <div className="sumit-bullet">
              <span>3</span>
            </div>
          </div>
          <div className={`sumit-step ${step >= 4 ? "active" : ""}`}>
            <p>Submit</p>
            <div className="sumit-bullet">
              <span>4</span>
            </div>
          </div>
        </div>

        <div className="sumit-form-outer">
          <form action="/Backend/Servlet/registerServlet.java" method="post">
            {step === 1 && (
              <div className="sumit-page sumit-slide-page">
                <div className="sumit-title">Basic Info:</div>
                <div className="sumit-field">
                  <div className="sumit-label">First Name</div>
                  <input type="text" name="firstname" required />
                </div>
                <div className="sumit-field">
                  <div className="sumit-label">Last Name</div>
                  <input type="text" name="lastname" required />
                </div>
                <div className="sumit-field">
                  <button type="button" className="sumit-next" onClick={nextStep}>
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="sumit-page sumit-slide-page">
                <div className="sumit-title">Contact Info:</div>
                <div className="sumit-field">
                  <div className="sumit-label">Email Address</div>
                  <input type="email" name="email" required />
                </div>
                <div className="sumit-field">
                  <div className="sumit-label">Phone Number</div>
                  <input type="tel" name="phone" required />
                </div>
                <div className="sumit-field sumit-btns">
                  <button type="button" className="sumit-prev" onClick={prevStep}>
                    Previous
                  </button>
                  <button type="button" className="sumit-next" onClick={nextStep}>
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="sumit-page sumit-slide-page">
                <div className="sumit-title">Date of Birth:</div>
                <div className="sumit-field">
                  <div className="sumit-label">Date</div>
                  <input type="date" name="dob" required />
                </div>
                <div className="sumit-field">
                  <div className="sumit-label">Gender</div>
                  <select name="gender" required>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="sumit-field sumit-btns">
                  <button type="button" className="sumit-prev" onClick={prevStep}>
                    Previous
                  </button>
                  <button type="button" className="sumit-next" onClick={nextStep}>
                    Next
                  </button>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="sumit-page sumit-slide-page">
                <div className="sumit-title">Login Details:</div>
                <div className="sumit-field">
                  <div className="sumit-label">Username</div>
                  <input type="text" name="username" required />
                </div>
                <div className="sumit-field">
                  <div className="sumit-label">Password</div>
                  <input type="password" name="password" required />
                </div>
                <div className="sumit-field sumit-btns">
                  <button type="button" className="sumit-prev" onClick={prevStep}>
                    Previous
                  </button>
                  <button type="submit" className="sumit-submit">
                    Submit
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
