
import { APP_NAME } from "@repo/shared";
import type { HealthResponse } from "@repo/shared";

export default function Home() {
  const example: HealthResponse = {
    success: true,
    message: "Shared package connected",
    data: {
      status: "healthy",
    },
  };

  return (
    <main className="min-h-screen p-10">
      <h1 className="text-3xl font-bold">{APP_NAME}</h1>
      <p className="mt-4">{example.message}</p>
    </main>
  );
}
