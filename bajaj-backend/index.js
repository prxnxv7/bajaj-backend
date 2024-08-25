const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

const USER_ID = "pranav_jayaraj_18052003";
const EMAIL = "pranav.jyj@gmail.com";
const ROLL_NUMBER = "21BRS1190";

app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
    const data = req.body.data || [];
    // if (!Array.isArray(data)) {
    //     return res.status(400).json({
    //         is_success: false,
    //         message: "Invalid input format"
    //     });
    // }

    const numbers = data.filter(item => !isNaN(item)).map(String);
    const alphabets = data.filter(item => isNaN(item));
    const lowercaseAlphabets = alphabets.filter(c => c === c.toLowerCase());
    const highestLowercaseAlphabet = lowercaseAlphabets.length > 0
        ? [lowercaseAlphabets.reduce((a, b) => (a > b ? a : b))]
        : [];

    res.json({
        is_success: true,
        user_id: USER_ID,
        email: EMAIL,
        roll_number: ROLL_NUMBER,
        numbers,
        alphabets,
        highest_lowercase_alphabet: highestLowercaseAlphabet
    });
});

app.get('/bfhl', (req, res) => {
    res.json({
        operation_code: 1
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
