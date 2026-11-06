
import { PrismaClient } from "./generated/prisma/client.js";
import { PrismaMariaDb } from "@prisma/adapter-mariadb";

export interface DatabaseConfig {
    host: string;
    port: number;
    user: string;
    password: string;
    database: string;
}

export function createPrismaClient(config: DatabaseConfig): PrismaClient {
    const adapter = new PrismaMariaDb({
        host: config.host,
        port: config.port,
        user: config.user,
        password: config.password,
        database: config.database,
        connectionLimit: 10,
    });

    return new PrismaClient({ adapter });
}
