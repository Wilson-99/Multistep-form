import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import { BiUser, BiComment, BiListCheck } from "react-icons/bi";
import "../Styles/Stepper.sass"

export const Stepper = () => {
  const location = useLocation();
  const [steps] = useState([
    { path: "/", label: "Pessoal", icon: <BiUser /> },
    { path: "/comment", label: "Comentário", icon: <BiComment /> },
    { path: "/confirm", label: "Resumo", icon: <BiListCheck /> }
  ]);

  const activeStepIndex = steps.findIndex(step => step.path === location.pathname);

  return (
    
      <div className="stepper">
        <div className="navbar-nav" >
          <u>
          {steps.map((step, index) => (
            <li key={step.path} className="step nav-item">
              <span
                className={`nav-link ${index === activeStepIndex ? 'active' : ''} ${index <= activeStepIndex ? 'completed' : ''}`}
              >
                <div className="icon"><p>{step.icon}</p></div>
                <p>{step.label}</p>
              </span>
            </li>
          ))}
          </u>
        </div>
      </div>
    
  );
};
