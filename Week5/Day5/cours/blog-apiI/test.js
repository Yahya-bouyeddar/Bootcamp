import express from "express";
const app = express();

// 🟡 Sert les fichiers dans le dossier 'public'
app.use(express.static('blog-api'));
app.listen(3000, () => console.log('App en écoute sur le port 3000 !'));