import express, { json } from 'express';
import { config } from 'dotenv';
import cors from 'cors';
import grammarRoutes from './routes/grammarRoutes.js';
import vocabularyRoutes from './routes/vocabRoutes.js';

config();

const app = express();

app.use(cors());
app.use(json());

app.use('/api/grammar', grammarRoutes);

app.use('/api/vocabulary', vocabularyRoutes);

app.use('/', express.static('frontend'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
