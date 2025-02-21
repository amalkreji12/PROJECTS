const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/home', (req,res) => {
    res.json({
        message: "Hello from the backend"
    })
})






const PORT = 3000;
app.listen(PORT, () => console.log(`Server listening on ${PORT}`));