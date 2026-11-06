
import { Router } from "express";

import { APP_NAME, type HealthResponse } from "@repo/shared";

const router = Router();

router.get("/health", (_req, res) => {
    const response: HealthResponse = {
        success: true,
        message: `${APP_NAME} API is running`,
        data: {
            status: "healthy",
        },
    };

    res.status(200).json(response);
});

export default router;
