import dotenv from "dotenv"
import pg from "pg"

dotenv.config()

//Conexão com o banco de dados
const { Pool } = pg;
const configDatabase = {
    connectionString: process.env.DATABASE_URL,
};
export const db = new Pool(configDatabase);


