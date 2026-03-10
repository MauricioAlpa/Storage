import { Pool } from 'pg';
import dotenv from 'dotenv/config';

const db = new Pool({
    connetcionString: process.env.CONNECTION_STRING
});