import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const directoryPath = path.join(__dirname);
fs.readdir(directoryPath, (err, files) => {
    if (err) {
      return console.log('Impossible de lire le répertoire : ' + err);
    }
    console.log('Liste des fichiers dans le répertoire :');
    files.forEach((file) => {
      console.log(file); 
    });
  });
  
