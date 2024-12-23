import React, { useState, useEffect } from "react";

const Step2 = ({ formData, setFormData }) => {
  const [addressDetails, setAddressDetails] = useState(formData.addressDetails);

  useEffect(() => {
    // Update local state when formData changes (for the initial load)
    setAddressDetails(formData.addressDetails);
  }, [formData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddressDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSave = () => {
    // Update the formData in the parent component
    setFormData((prev) => ({ ...prev, addressDetails: addressDetails }));
  };

  return (
    <div>
      <h2>Step 2: Address Details</h2>
      <label>
        Street:
        <input
       className="w-full p-2 border rounded text-black"
          type="text"
          name="street"
          value={addressDetails.street}
          onChange={handleChange}
        />
      </label>
      <label>
        City:
        <input
       className="w-full p-2 border rounded text-black"
          type="text"
          name="city"
          value={addressDetails.city}
          onChange={handleChange}
        />
      </label>
      <label>
        Zip:
        <input
       className="w-full p-2 border rounded text-black"
          type="text"
          name="zip"
          value={addressDetails.zip}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Step2;
