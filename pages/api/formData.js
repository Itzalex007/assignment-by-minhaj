// pages/api/formData.js
export default function handler(req, res) {
    // Simulate form data with some default values
    const mockData = {
      personalInfo: {
        name: "John Doe",
        email: "john.doe@example.com"
      },
      addressDetails: {
        street: "123 Main St",
        city: "New York",
        zip: "10001"
      },
      preferences: {
        newsletter: true,
        updates: false
      }
    };
  
    // Send a response with the mock data
    res.status(200).json(mockData);
  }
  