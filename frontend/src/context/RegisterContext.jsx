import React, { createContext, useState, useMemo } from "react";
import PropTypes from "prop-types";

// Crée un nouveau contexte nommé "RegisterContext"
const RegisterContext = createContext();

// Définit un composant "RegisterContextProvider" qui enveloppe ses enfants avec le contexte "RegisterContext"
export function RegisterContextProvider({ children }) {
  // Déclare un état local "formValues" qui contient des valeurs pour un formulaire d'enregistrement
  const [formValues, setFormValues] = useState({
    lastName: "",
    firstName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  // Crée un objet "contextValue" qui contient l'état "formValues" et la fonction "setFormValues"
  // Utilise useMemo pour éviter la ré-évaluation inutile de "contextValue" à chaque rendu
  const contextValue = useMemo(
    () => ({
      formValues,
      setFormValues,
    }),
    [formValues]
  );

  // Retourne le contexte "RegisterContext" avec la valeur "contextValue" pour que les enfants puissent y accéder
  return (
    <RegisterContext.Provider value={contextValue}>
      {children}
    </RegisterContext.Provider>
  );
}

// Définit le type de prop "children" attendu par "RegisterContextProvider"
RegisterContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// Exporte le contexte "RegisterContext"
export default RegisterContext;
