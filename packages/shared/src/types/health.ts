
export interface HealthResponse {
    success: boolean;
    message: string;
    data: {
        status: "healthy";
    };
}
