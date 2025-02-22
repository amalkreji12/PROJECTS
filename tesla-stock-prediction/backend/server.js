const express = require('express');
const cors = require('cors');
const { exec } = require('child_process');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/home', (req, res) => {
    res.json({
        message: "Hello from the backend"
    })
});

app.post('/predict', (req, res) => {
    const { openPrice, highPrice, lowPrice, volumePrice } = req.body;
    console.log("Received Data:", req.body);
    if (openPrice === undefined || highPrice === undefined || lowPrice === undefined || volumePrice === undefined) {
        return res.status(400).json({ error: "Invalid input data" });
    }

    exec(`python predict.py ${openPrice} ${highPrice} ${lowPrice} ${volumePrice}`, (error, stdout, stderr) => {
        if (error) {
            console.error(`Error:${error.message}`);
            return res.status(500).json({ error: 'prediction failed' });
        }
        if (stderr) {
            console.log(`Stderr: ${stderr}`);
            return res.status(500).json({ error: 'prediction error' });
        }

        res.json({ predicted_closePrice: parseFloat(stdout) });
    });
});






const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));