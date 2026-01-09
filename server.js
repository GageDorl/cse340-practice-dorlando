import express from 'express';

const app = express();

const name = process.env.NAME;

app.get('/', (req, res) => {
    res.send(`Welcome ${name}!`);
});

app.get('/secret', (req, res) => {
    res.send('This page is a secret. Don\'t tell anyone about this.');
})

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://127.0.0.1:${PORT}`);
});