import express from "express";
import bodyParser from "body-parser";


const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get("/", (req, res) => res.json({slackUsername : "sammycodes",
backend : true,
age:25,
bio:"a passionate developer looking forneveryb possible means to improve his knowledge."}));

app.listen(PORT, () =>console.log(`Server running on port: http://localhost:${PORT}`));
