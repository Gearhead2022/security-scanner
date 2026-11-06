
import { APP_NAME } from "@repo/shared";

async function main(): Promise<void> {
    console.log(`[${APP_NAME}] Worker initialized`);
    console.log("Waiting for queue integration...");
}

main().catch((error: unknown) => {
    console.error("Worker initialization failed:", error);
    process.exitCode = 1;
});
