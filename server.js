import express, { json } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import grammarRoutes from './routes/grammarRoutes.js';

config();

const app = express();

app.use(cors());
app.use(json());

app.use('/api/grammar', grammarRoutes);

app.get('/', (req, res) => {
    res.send('JLPT API is running');
});


export default app;