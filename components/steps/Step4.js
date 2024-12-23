import React, { useState, useEffect } from "react";

const Step4 = ({ formData, setFormData }) => {
  const [preferences, setPreferences] = useState(formData.preferences);

  useEffect(() => {
    // Update local state when formData changes (for the initial load)
    setPreferences(formData.preferences);
  }, [formData]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSave = () => {
    // Update the formData in the parent component
    setFormData((prev) => ({ ...prev, preferences: preferences }));
  };

  return (
    <div>
      <h2>Step 4: Review & Submit</h2>
      <div>
        <h3>Personal Info</h3>
        <p>Name: {formData.personalInfo.name}</p>
        <p>Email: {formData.personalInfo.email}</p>
      </div>

      <div>
        <h3>Address Details</h3>
        <p>Street: {formData.addressDetails.street}</p>
        <p>City: {formData.addressDetails.city}</p>
        <p>Zip: {formData.addressDetails.zip}</p>
      </div>

      <div>
        <h3>Preferences</h3>
        <p>Newsletter: {preferences.newsletter ? "Subscribed" : "Not Subscribed"}</p>
        <p>Updates: {preferences.updates ? "Enabled" : "Disabled"}</p>
      </div>

      <button onClick={handleSave}>Submit</button>
    </div>
  );
};

export default Step4;
