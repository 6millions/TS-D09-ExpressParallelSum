import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import SumRoute from "./routes/sumRoutes"

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());


app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript with Express!');
});

// Mounting middleware
app.use('/api', SumRoute);

app.listen(PORT, () => {
    console.log(`[index] Server is running on port ${PORT}`);
});