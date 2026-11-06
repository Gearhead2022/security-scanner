
import express from "express";
import cors from "cors";
import helmet from "helmet";

import routes from "./routes/index.js";

const app = express();

app.disable("x-powered-by");

app.use(helmet());

app.use(
    cors({
        origin: "http://localhost:3000",
    })
);

app.use(express.json({ limit: "1mb" }));
app.use(express.urlencoded({ extended: true }));

app.use("/api", routes);

export default app;
