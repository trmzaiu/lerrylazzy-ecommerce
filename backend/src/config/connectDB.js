const { Client } = require('pg')
require('dotenv').config()

const config = {
    user: process.env.DB_USERNAME,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT,
};

const connectDB = async () => {
    const client = new Client(config)
    try {
        await client.connect()
        console.log('Connected to PostgreSQL')
    } catch (err) {
        console.error('Error connecting to PostgreSQL:', err)
    }
}

module.exports = connectDB