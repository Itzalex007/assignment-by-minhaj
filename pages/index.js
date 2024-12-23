import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Step1 from "@/components/steps/Step1";
import Step2 from "@/components/steps/Step2";
import Step3 from "@/components/steps/Step3";
import Step4 from "@/components/steps/Step4";

export default function Home() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
    personalInfo: { name: "", email: "" },
    addressDetails: { street: "", city: "", zip: "" },
    preferences: { newsletter: false, updates: false }
  });

  // Fetch mock form data from the API periodically
  useEffect(() => {
    fetch("/api/formData")
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched Data:", data); // Log fetched data to debug
        setFormData(data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      }); // Handle any errors
  }, []); // Empty dependency array means it runs only once

  // Handle Next Button Click
  const handleNext = () => {
    if (currentStep < 3) {
      setCurrentStep((prevStep) => prevStep + 1);
    }
  };

  // Handle Previous Button Click
  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep((prevStep) => prevStep - 1);
    }
  };

  const progress = ((currentStep + 1) / 4) * 100; // Calculate progress bar percentage

  return (
    <div className="p-4">
      {/* Progress Bar */}
      <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
        <div
          className="bg-blue-500 h-2 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>

      {/* Animated Step */}
      <motion.div
        key={currentStep}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        {currentStep === 0 && <Step1 formData={formData} setFormData={setFormData} />}
        {currentStep === 1 && <Step2 formData={formData} setFormData={setFormData} />}
        {currentStep === 2 && <Step3 formData={formData} setFormData={setFormData} />}
        {currentStep === 3 && <Step4 formData={formData} setFormData={setFormData} />}
      </motion.div>

      {/* Navigation Buttons */}
      <div className="mt-4">
        {currentStep > 0 && (
          <button
            onClick={handlePrevious}
            className="bg-gray-500 text-black py-2 px-4 rounded mr-2"
          >
            Previous
          </button>
        )}

        {currentStep < 3 && (
          <button
            onClick={handleNext}
            className="bg-blue-500 text-black py-2 px-4 rounded"
          >
            Next
          </button>
        )}

        {currentStep === 3 && (
          <button
            onClick={() => alert("Form submitted successfully!")}
            className="bg-green-500 text-black py-2 px-4 rounded ml-2"
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
