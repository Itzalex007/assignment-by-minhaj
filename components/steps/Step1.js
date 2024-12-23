import React, { useState, useEffect } from "react";

const Step1 = ({ formData, setFormData }) => {
  const [personalInfo, setPersonalInfo] = useState(formData.personalInfo);
  const [empty, setEmpty] = useState("");

  useEffect(() => {
    // Update local state when formData changes (for the initial load)
    setPersonalInfo(formData.personalInfo);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prev) => ({ ...prev, [name]: value }));
    setEmpty(value)
  };

  const handleSave = () => {
    // Update the formData in the parent component
    setFormData((prev) => ({ ...prev, personalInfo: personalInfo }));
  };

  return (
    <div>
      <h2>Step 1: Personal Info</h2>
      <label>
        Name:
        <input
        className="w-full p-2 border rounded text-black"
          type="text"
          name="name"
          value={personalInfo.name || empty }
          onChange={handleChange}
        />
      </label>
      <label>
        Email:
        <input
        className="w-full p-2 border rounded text-black"
          type="email"
          name="email"
          value={personalInfo.email}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Step1;
