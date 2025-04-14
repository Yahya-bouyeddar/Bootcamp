import express from "express";
import path from "path";
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const app = express()
app.use(express.static(path.join(__dirname)))
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'test.html'));  // Sert le fichier test.html quand on accède à la racine
});
app.listen(3000, () => {
    console.log('Serveur démarré sur http://localhost:3000');
});