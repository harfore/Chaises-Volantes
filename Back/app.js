// const express = require("express");
// const { Pool } = require("pg");

// const app = express();

// app.use(express.json());

// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "chaisesVolantes",
//   password: "",
//   port: 5432,
// });

// app.get("/person", async (req, res) => {
//     try {
//         const queryResult = await pool.query('SELECT * FROM person');
//         console.log('Résultat de la requête :', queryResult.rows);
//         res.json(queryResult.rows);
//     } catch (err) {
//         console.error ("Erreur dexécution de la requête :", err);
//         res.status(500).json({error: "Erreur"})
//     }
// });

// app.post("/person", (req, res, next) => {
//         console.log(req.body)
//         res.status(201).json({message:'Good !'})
//         // const postQuery = await pool.query('INSERT INTO person (first_name, last_name')
// })

// module.exports = app;
