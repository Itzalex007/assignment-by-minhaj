import { createContext, useContext, useState } from "react";

// Create the Form Context
const FormContext = createContext();

// Custom Hook for accessing the context
export const useFormContext = () => {
  return useContext(FormContext);
};

// Form Context Provider
export const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    personalInfo: { name: "", email: "" },
    address: { address: "", city: "" },
    preferences: { newsletter: false, notifications: false },
  });

  const updateFormData = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [field]: value,
      },
    }));
  };

  return (
    <FormContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormContext.Provider>
  );
};
