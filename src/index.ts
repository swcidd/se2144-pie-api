import express from 'express';
import dotenv from 'dotenv';
import pieRoutes from './pieRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use('/api/pies', pieRoutes);

app.listen(PORT, () => {
  console.log(`Pie API server running on http://localhost:${PORT}`);
});