import React, { useState } from "react";

const Form = () => {
  const [formData, setFormData] = useState({
    openPrice: "",
    highPrice: "",
    lowPrice: "",
    volumePrice: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-md w-100">
        <form className="flex flex-col space-y-3">
          <label className="font-semibold">Open Price :</label>
          <input
            name="openPrice"
            value={formData.openPrice}
            onChange={handleChange}
            type="number"
            className="border rounded p-2 focus:border-sky-500 focus:outline focus:outline-sky-500 disabled:border-gray-200"
          />

          <label className="font-semibold">High Price :</label>
          <input
            name="highPrice"
            value={formData.highPrice}
            onChange={handleChange}
            type="number"
            className="border rounded p-2 focus:border-sky-500 focus:outline focus:outline-sky-500 disabled:border-gray-200"
          />

          <label className="font-semibold">Low Price :</label>
          <input
            name="lowPrice"
            value={formData.lowPrice}
            onChange={handleChange}
            type="number"
            className="border rounded p-2 focus:border-sky-500 focus:outline focus:outline-sky-500 disabled:border-gray-200"
          />

          <label className="font-semibold">Volume Price :</label>
          <input
            name="volumePrice"
            value={formData.volumePrice}
            onChange={handleChange}
            type="number"
            className="border rounded p-2 focus:border-sky-500 focus:outline focus:outline-sky-500 disabled:border-gray-200"
          />

          <button
            onClick={handleSubmit}
            type="button"
            className="bg-blue-500 text-white p-2 rounded-lg font-semibold hover:bg-blue-600 mt-2 cursor-pointer"
          >
            Predict closing price
          </button>

          <h2 className="mt-4 text-lg font-bold text-center">
            Predicted Closing Price
          </h2>
        </form>
      </div>
    </div>
  );
};

export default Form;
