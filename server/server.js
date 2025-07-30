import express from 'express';
import mysql2 from 'mysql2';

import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(express.json());

const connection = mysql2.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT,
});

connection.connect((err) => {
    if (err) {
        console.error('Error connect', err);
        return;
    }
    console.log(' DB Connected!');
});

app.get('/offers/:supplier_id', (req, res) => {
    const { supplier_id } = req.params;

    connection.query(
        'SELECT * FROM offers WHERE supplier_id = ?',
        [supplier_id],
        (err, result) => {
            if (err) {
                res.status(500).send(err);
                return;
            }
            res.status(200).json(result);
        }
    );
});

app.get('/offers', (req, res) => {
    connection.query('SELECT * FROM offers', (err, result) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(result);
    });
});

app.get('/suppliers', (req, res) => {
    connection.query('SELECT * FROM suppliers', (err, result) => {
        if (err) {
            res.status(500).send(err);
            return;
        }
        res.json(result);
    });
});

app.post('/offers', (req, res) => {
    const { mark, model, supplier_id } = req.body;
    connection.query(
        'INSERT INTO offers (`mark`, `model`, `supplier_id`) VALUES (?,?,?)',
        [mark, model, supplier_id],
        (err, result) => {
            if (err) {
                res.status(500).send(err);
            }
            res.status(200).json(result);
        }
    );
});

const PORT = 3000;

app.listen(PORT, () => {
    console.log('Visit http://localhost:3000');
});
