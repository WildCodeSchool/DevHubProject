import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

const RegisterContext = createContext();

export function RegisterContextProvider({ children }) {
  const [activeStep, setActiveStep] = useState(0);
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreement: false,
  });

  const RegistercontextValue = useMemo(
    () => ({
      activeStep,
      setActiveStep,
      formValues,
      setFormValues,
    }),
    [activeStep, formValues]
  );

  return (
    <RegisterContext.Provider value={RegistercontextValue}>
      {children}
    </RegisterContext.Provider>
  );
}

RegisterContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default RegisterContext;
