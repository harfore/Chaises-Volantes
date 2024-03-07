//ABANDON
/*
const express = require('express');
const { Pool } = require('pg');

const app = express();

  // Configuration de la connexion à la base de données
const pool = new Pool({
    user: 'postgres.xucoxvobepvmmiloebkv',
    host: 'aws-0-eu-central-1.pooler.supabase.com',
    database: 'test',
    password: 'ChaiseVolante!',
    port: 5432 // Généralement 5432 pour PostgreSQL
});

  // Route pour récupérer les données de la base de données
app.get('/donnees', async (req, res) => {
    try {
      // Connexion à la base de données
    const client = await pool.connect();
    console.log("query en cours...")
      // Exécution de la requête SQL pour récupérer les données
      const result = await client.query('SELECT * FROM Matiere');
        
      // Envoi des données récupérées en tant que réponse
    res.json(result.rows);
      // Libération du client de la pool
    client.release();
    } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
        res.status(500).json({ error: 'Erreur lors de la récupération des données' });
    }
});

  // Démarrage du serveur Express sur le port 3000
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
    console.log(`Serveur Express en cours d'exécution sur le port ${PORT}`);
    });
*/
