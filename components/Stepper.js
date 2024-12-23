export default function Stepper({ steps, currentStep }) {
    return (
      <div className="flex items-center justify-center space-x-4">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex items-center space-x-2 ${
              currentStep === index
                ? "text-blue-600 font-bold"
                : "text-gray-500"
            }`}
          >
            <div
              className={`w-8 h-8 flex items-center justify-center rounded-full ${
                currentStep === index ? "bg-blue-600 text-white" : "bg-gray-300"
              }`}
            >
              {index + 1}
            </div>
            <span>{step}</span>
          </div>
        ))}
      </div>
    );
  }
  