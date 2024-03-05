const express = require("express");
const { Pool } = require("pg");

const app = express();

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "chaisesVolantes",
  password: "T0d&Capsul3!",
  port: 5432,
});

app.get("/person", async (req, response) => {
    try {
        const queryResult = await pool.query('SELECT * FROM person');
        console.log('Résultat de la requête :', queryResult.rows);
        response.json(queryResult.rows);
    } catch (err) {
        console.error ("Erreur dexécution de la requête :", err);
        response.status(500).json({error: "Erreur"})
    }
});

module.exports = app;
