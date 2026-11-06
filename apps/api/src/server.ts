
import "dotenv/config";

import app from "./app.js";

const HOST = "127.0.0.1";
const PORT = Number(process.env.PORT ?? 5000);

const server = app.listen(PORT, HOST, () => {
    console.log(`Security Scanner API running at http://${HOST}:${PORT}`);
});

function shutdown() {
    server.close(() => {
        process.exit(0);
    });
}

process.on("SIGINT", shutdown);
process.on("SIGTERM", shutdown);
