import express from 'express';
import {config} from "dotenv";
import pg from 'pg';

config()

const app = express();
const pool = new pg.Pool({
    connectionString: process.env.DATABASE_URL
})

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/date', async (req, res) => {
    const result = await pool.query('SELECT NOW()')
    return res.json(result.rows[0])
})

app.listen(process.env.PORT || 3000)
console.log('Server on port');