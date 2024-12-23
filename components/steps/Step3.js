import React, { useState, useEffect } from "react";

const Step3 = ({ formData, setFormData }) => {
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
      <h2>Step 3: Preferences</h2>
      <label>
        Newsletter:
        <input
        
          type="checkbox"
          name="newsletter"
          checked={preferences.newsletter}
          onChange={handleChange}
        />
      </label>
      <label>
        Updates:
        <input
          type="checkbox"
          name="updates"
          checked={preferences.updates}
          onChange={handleChange}
        />
      </label>
      {/* <button onClick={handleSave}>Save</button> */}
    </div>
  );
};

export default Step3;
