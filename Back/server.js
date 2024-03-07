// Import des modules nécessaires
const express = require('express'); // Pour créer le serveur Express
const cors = require('cors'); // Pour activer CORS
const { createClient } = require('@supabase/supabase-js'); // Pour créer le client Supabase

// Création de l'application Express
const app = express(); 
const port = 3000; // Port sur lequel le serveur écoutera les requêtes entrantes

// Création du client Supabase en utilisant l'URL et la clé d'API
const supabaseUrl = 'https://xucoxvobepvmmiloebkv.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh1Y294dm9iZXB2bW1pbG9lYmt2Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTU2NDU3MiwiZXhwIjoyMDI1MTQwNTcyfQ.D2rN0DqvZBZa2RQpgEmQ04jfMGsw_ZCQfIH3umjMJSs';
const supabase = createClient(supabaseUrl, supabaseKey);

// Fonction asynchrone pour récupérer les données de la table 'Matiere' depuis Supabase
async function getMatiereData() {
    try {
        // Récupération des données de la table 'Matiere'
        let { data, error } = await supabase.from('Matiere').select('*');
        // Vérification s'il y a eu une erreur
        if (error) {
            // S'il y a une erreur, lance une exception avec un message d'erreur
            throw new Error('Erreur lors de la récupération des données: ' + error.message);
        }
        // Retourne les données récupérées
        return data;
    } catch (error) {
        // S'il y a une erreur lors de la récupération des données, affiche l'erreur dans la console
        console.error('Erreur lors de la récupération des données:', error.message);
        // Retourne un tableau vide en cas d'erreur
        return [];
    }
}

// Activation du middleware CORS pour autoriser les requêtes provenant de toutes les origines
app.use(cors());

// Définition de la route racine ('/') pour récupérer et renvoyer les données de la table 'Matiere'
app.get('/', async (req, res) => {
    // Appel de la fonction pour récupérer les données de la table 'Matiere'
    const data = await getMatiereData();
    // Envoi des données récupérées en réponse à la requête HTTP
    res.send(data);
});

// Démarrage du serveur Express sur le port spécifié
app.listen(port, () => {
    console.log(`Serveur démarré sur http://localhost:${port}`);
});
