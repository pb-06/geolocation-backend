const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

// endpoints
app.get('/hello', (req, res) => {
    return res.status(200).json({ messages: "Hello!" });
});

const port = 3333;
var actualPort = process.env.PORT || port;
app.listen(actualPort, (err) => {
    console.log('Backend runs on port', actualPort);
});