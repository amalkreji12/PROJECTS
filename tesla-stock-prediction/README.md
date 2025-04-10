# 🚗 Tesla Stock Prediction

A full-stack machine learning web application for predicting Tesla stock prices using historical data and multivariable regression.

## 🛠️ Tech Stack

- **Frontend**: HTML, CSS, React
- **Backend**: Node.js, Express
- **Machine Learning**: Python (scikit-learn, pandas, pickle)
- **Data**: Tesla stock dataset (2010–2020)

## 📈 Project Overview

- Developed and implemented a robust multivariable regression model leveraging the Tesla stock dataset from 2010 to 2020.
- Enabled accurate predictions of future stock prices based on historical closing prices and dates.
- Utilized multiple features such as:
  - Opening price
  - High price
  - Low price
  - Trading volume
- Enhanced the model’s predictive performance by incorporating these features.
- Trained model saved using **Pickle** for future predictions, ensuring easy deployment and integration with the backend.

## 📂 Project Structure

```
tesla-stock-prediction/
├── backend/
│   ├── model.py           # Data preprocessing and model training
│   ├── predict.py         # Prediction logic using the trained model
│   ├── server.js          # Express server to serve predictions
│   ├── teslaModel.pkl     # Serialized machine learning model
│   ├── TSLA.csv           # Tesla stock dataset
│   ├── package.json       # Node dependencies for backend
│   └── package-lock.json  # Lock file for backend dependencies
│
├── frontend/
│   ├── public/            # Static assets
│   ├── src/
│   │   ├── assets/        # Images and icons
│   │   ├── components/    # Reusable React components
│   │   ├── App.jsx        # Main React component
│   │   ├── App.css        # Styles for App
│   │   └── main.jsx       # Entry point for React
│   ├── index.html         # Main HTML template
│   ├── vite.config.js     # Vite configuration
│   ├── package.json       # Node dependencies for frontend
│   └── package-lock.json  # Lock file for frontend dependencies
│
├── README.md              # Project documentation
├── .gitignore             # Git ignore file
├── eslint.config.js       # Linter configuration
```

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/tesla-stock-prediction.git
cd tesla-stock-prediction
```

### 2. Backend Setup (Node.js + Python Scripts)

```bash
cd backend
npm install

# Make sure you have Python 3 and necessary libraries installed
pip install pandas scikit-learn
```

### 3. Train the Model (if needed)

```bash
python model.py
```

### 4. Start Backend Server (Express)

```bash
node server.js
```

### 5. Frontend Setup (React)

```bash
cd ../frontend
npm install
npm run dev
```

## 🧠 Model Info

- **Algorithm**: Multivariable Linear Regression
- **Libraries Used**:
  - pandas
  - scikit-learn
  - pickle
- **Output**: `teslaModel.pkl` – the serialized model file used for predictions.

## 📊 Dataset

- File: `TSLA.csv`
- Time Range: 2010 to 2020
- Features Used:
  - `Open`
  - `High`
  - `Low`
  - `Volume`
  - `Close` (Target variable)

---

## 📌 Notes

- The backend (Express server) runs Python scripts using `child_process` to perform predictions.
- You can easily enhance the model with additional features or switch to a more advanced ML algorithm.

---

## ✨ Future Enhancements

- Add charts and visualizations using D3.js or Chart.js.
- Integrate real-time stock data APIs.
- Deploy the app using platforms like Vercel (frontend) and Render or Railway (backend).

---

## 📫 Contact

For any questions or suggestions, feel free to reach out via [GitHub Issues](https://github.com/your-username/tesla-stock-prediction/issues).

---

Made with ❤️ for learning and exploration.
