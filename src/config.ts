import * as dotenv from 'dotenv';
import * as path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../.env') });

export interface Configuration {
    port: number;
    dbConnectionString: string;
}

export const configuration: Configuration = {
    port: parseInt(process.env.PORT || '3000', 10),
    dbConnectionString: process.env.DB_CONNECTION_STRING || '',
};