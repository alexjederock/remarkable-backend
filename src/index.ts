import express, { Response } from 'express'
import nlrouter from './routes/newsletter';

const app = express();
// TODO make this dynamic (use env var)
const port = 8080; // default port to listen

/* register the "/newsletter" route with express
anytime a request comes in to route /newsletter it will go to nlrouter
*/
app.use('/newsletter', nlrouter);

app.get("/", ((req, res: Response) => {
    res.send("Hello world!");
}));

// start the Express server
app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
});