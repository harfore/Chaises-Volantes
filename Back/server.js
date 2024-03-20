// Import des modules nécessaires
const express = require("express"); // Pour créer le serveur Express
const cors = require("cors"); // Pour activer CORS
const { createClient } = require("@supabase/supabase-js"); // Pour créer le client Supabase
require('dotenv').config() // Dotenv sert à créer des variables d'environnement
const supabaseUrl = process.env.SUPABASE_URL // supabaseUrl a été déplacé dans le fichier .env
const supabaseKey = process.env.SUPABASE_KEY // supabaseKey a été déplacé dans le fichier .env

// Création de l'application Express
const app = express();
// const port = 3000; // Port sur lequel le serveur écoutera les requêtes entrantes

// Création du client Supabase en utilisant l'URL et la clé d'API
const supabase = createClient(supabaseUrl, supabaseKey);

// Fonction asynchrone pour récupérer les données de la table 'Meuble' depuis Supabase
async function getAllMeublesData() {
  try {
    // Récupération des données de la table 'Meuble'
    let { data, error } = await supabase
    .from('view_get_allmeubles').select('*');
    // Vérification s'il y a eu une erreur
    if (error) {
      // S'il y a une erreur, lance une exception avec un message d'erreur
      throw new Error(
        "Erreur lors de la récupération des données: " + error.message
      );
    }
    // Retourne les données récupérées
    return data;
  } catch (error) {
    // S'il y a une erreur lors de la récupération des données, affiche l'erreur dans la console
    console.error("Erreur lors de la récupération des données:", error.message);
    // Retourne un tableau vide en cas d'erreur
    return [];
  }
}

// A COMPLETER
// Fonction asynchrone pour récupérer les données d'un seul meuble en fonction de son id
async function getMeubleData(meubleId) {
    try{
        let {data, error} = await supabase
        .from('view_get_meubles').select('*').eq('id', meubleId)
        return data
      
    } catch (error) {
        console.error("Erreur lors de la récupération des données:", error.message);
        return [];
    }
}


// Activation du middleware CORS pour autoriser les requêtes provenant de toutes les origines
app.use(cors());

// Définition de la route racine ('/allmeubles') pour récupérer et renvoyer les données suivantes de la table Meuble : nom, photo, type, prix
app.get("/allmeubles", async (req, res) => {
  // Appel de la fonction pour récupérer les données de la table Meuble
  const data = await getAllMeublesData();
  // Envoi des données récupérées en réponse à la requête HTTP
  res.status(200).json(data);
});

// A COMPLETER
// Définition de la route racine ('/id') pour récupérer et renvoyer les données d'un seul meuble, en fonction de son id
app.get("/meuble/:meubleid", async (req, res) => {
    const meubleId = req.params.meubleid
    const data = await getMeubleData(meubleId);
    res.status(200).json(data)
})

app.use('/', (req, res) => {
  res.send("serveur is running")
})

// Démarrage du serveur Express sur le port spécifié
app.listen(process.env.PORT || 3000)
// app.listen(port, () => {
//   console.log(`Serveur démarré sur http://localhost:${port}`);
// });
