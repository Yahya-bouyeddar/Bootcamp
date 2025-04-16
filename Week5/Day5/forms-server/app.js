const express = require('express');
const app = express();
const path = require('path');

// 🧠 Middleware pour lire les données envoyées par un formulaire HTML
app.use(express.urlencoded({ extended: true }));

// 📁 Rendre le dossier public accessible
app.use(express.static('public'));

// 🏠 Route racine : sert la page HTML (facultatif si tu as déjà express.static)
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// 📨 Route pour gérer les données du formulaire
app.post('/welcome', (req, res) => {
  const firstname = req.body.firstname;
  res.send(`Bienvenue, ${firstname} !`);
});

app.listen(3000, () => {
  console.log('Serveur démarré sur http://localhost:3000');
});
