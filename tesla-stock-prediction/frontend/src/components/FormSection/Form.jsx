import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    openPrice: "",
    highPrice: "",
    lowPrice: "",
    volumePrice: "",
  });
  const [predictedPrice, setPredictedPrice] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const { openPrice, highPrice, lowPrice, volumePrice } = formData;
      const response = await fetch("http://localhost:3000/predict", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ openPrice, highPrice, lowPrice, volumePrice }),
      });

      if (!response.ok) throw new Error("Prediction failed");

      const data = await response.json();
      setPredictedPrice(data.predicted_closePrice);
    } catch (err) {
      setError(err.message || "An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-gray-50 py-12 px-4 sm:px-6 lg:px-8 flex items-center justify-center">
      <div className="max-w-md w-full bg-white rounded-xl shadow-lg p-6">
        <h1 className="text-2xl font-bold text-center text-gray-900">
          Stock Price Predictor
        </h1>
        <p className="text-center text-sm text-gray-600 mb-6">
          Enter market data to predict closing price
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Open Price :
          </label>
          <input
            name="openPrice"
            value={formData.openPrice}
            onChange={handleChange}
            type="number"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Open Price"
          />

          <label className="block text-sm font-medium text-gray-700 mb-1">
            High Price :
          </label>
          <input
            name="highPrice"
            value={formData.highPrice}
            onChange={handleChange}
            type="number"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter High Price"
          />

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Low Price :
          </label>
          <input
            name="lowPrice"
            value={formData.lowPrice}
            onChange={handleChange}
            type="number"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Low Price"
          />

          <label className="block text-sm font-medium text-gray-700 mb-1">
            Volume :
          </label>
          <input
            name="volumePrice"
            value={formData.volumePrice}
            onChange={handleChange}
            type="number"
            required
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter Volume"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full flex justify-center items-center py-3 px-4 rounded-md shadow-md text-white font-semibold transition duration-200 bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            {isSubmitting ? (
              <>
                <svg
                  className="animate-spin h-5 w-5 text-white mr-2"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Predicting...
              </>
            ) : (
              "Predict Closing Price"
            )}
          </button>
        </form>

        {error && (
          <div className="text-red-600 text-sm text-center mt-4 p-3 bg-red-50 rounded-md">
            ⚠️ {error}
          </div>
        )}

        {predictedPrice !== null && (
          <div className="mt-6 p-4 bg-blue-100 rounded-lg text-center animate-fade-in shadow-md">
            <p className="text-sm font-medium text-gray-600 mb-1">
              Predicted Closing Price
            </p>
            <p className="text-3xl font-bold text-blue-700">
              ${Number(predictedPrice).toFixed(2)}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
